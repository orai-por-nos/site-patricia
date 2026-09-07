import {Component, useEffect, useState, type ReactNode} from 'react';
import {createRoot} from 'react-dom/client';
import AnatomyScene from './scene';
import type {Atlas, Part, SceneState, SystemId} from './anatomy';

const initial=():SceneState=>({explode:0,visible:['skeletal','muscular','connective'],selected:[],isolate:false,view:'front',rotate:false,reset:0});
const systemNames:Partial<Record<SystemId,string>>={skeletal:'Ossos',muscular:'Músculos',connective:'Tecido conjuntivo'};
const phrases:Record<string,string>={
 'gingiva of upper jaw':'Gengiva da maxila','gingiva of lower jaw':'Gengiva da mandíbula','intervertebral disk':'Disco intervertebral',
 'iliotibial tract':'Trato iliotibial','external anal sphincter':'Esfíncter anal externo','superficial perineal muscle':'Músculo perineal superficial',
 'external intercostal muscle':'Músculo intercostal externo','internal intercostal muscle':'Músculo intercostal interno','innermost intercostal muscle':'Músculo intercostal íntimo',
 'levator palpebrae superioris':'Levantador da pálpebra superior','pectoralis major':'Peitoral maior','pectoralis minor':'Peitoral menor',
 'biceps brachii':'Bíceps braquial','triceps brachii':'Tríceps braquial','biceps femoris':'Bíceps femoral','rectus femoris':'Reto femoral',
 'gluteus maximus':'Glúteo máximo','gluteus medius':'Glúteo médio','gluteus minimus':'Glúteo mínimo','serratus anterior':'Serrátil anterior',
 'tibialis anterior':'Tibial anterior','tibialis posterior':'Tibial posterior','flexor digitorum':'Flexor dos dedos','extensor digitorum':'Extensor dos dedos',
 'flexor hallucis':'Flexor do hálux','extensor hallucis':'Extensor do hálux','adductor hallucis':'Adutor do hálux','abductor hallucis':'Abdutor do hálux',
 'flexor pollicis':'Flexor do polegar','extensor pollicis':'Extensor do polegar','adductor pollicis':'Adutor do polegar','abductor pollicis':'Abdutor do polegar',
 'opponens digiti minimi':'Oponente do dedo mínimo','abductor digiti minimi':'Abdutor do dedo mínimo','flexor digiti minimi':'Flexor do dedo mínimo',
 'quadratus femoris':'Quadrado femoral','quadratus lumborum':'Quadrado lombar','gastrocnemius':'Gastrocnêmio','sternocleidomastoid':'Esternocleidomastóideo',
 'levator scapulae':'Levantador da escápula','transversus thoracis':'Transverso do tórax','pronator teres':'Pronador redondo',
 'flexor carpi ulnaris':'Flexor ulnar do carpo','extensor carpi ulnaris':'Extensor ulnar do carpo','extensor carpi radialis':'Extensor radial do carpo',
 'flexor carpi radialis':'Flexor radial do carpo','palmaris longus':'Palmar longo','teres major':'Redondo maior','teres minor':'Redondo menor',
 'femur':'Fêmur','tibia':'Tíbia','fibula':'Fíbula','patella':'Patela','humerus':'Úmero','radius':'Rádio','ulna':'Ulna','scapula':'Escápula',
 'clavicle':'Clavícula','sternum':'Esterno','sacrum':'Sacro','coccyx':'Cóccix','mandible':'Mandíbula','maxilla':'Maxila','hyoid bone':'Osso hioide',
 'hip bone':'Osso do quadril','frontal bone':'Osso frontal','parietal bone':'Osso parietal','temporal bone':'Osso temporal','occipital bone':'Osso occipital',
 'sphenoid bone':'Osso esfenoide','ethmoid bone':'Osso etmoide','nasal bone':'Osso nasal','lacrimal bone':'Osso lacrimal','zygomatic bone':'Osso zigomático',
 'palatine bone':'Osso palatino','vomer':'Vômer','rib':'Costela','vertebra':'Vértebra','cartilage':'Cartilagem','phalanx':'Falange',
 'metacarpal':'Metacarpo','metatarsal':'Metatarso','cuneiform':'Cuneiforme','tooth':'Dente','molar':'Molar','premolar':'Pré-molar','incisor':'Incisivo','canine':'Canino'
};
const words:Record<string,string>={left:'esquerdo',right:'direito',upper:'superior',lower:'inferior',first:'primeiro',second:'segundo',third:'terceiro',fourth:'quarto',fifth:'quinto',sixth:'sexto',seventh:'sétimo',eighth:'oitavo',ninth:'nono',tenth:'décimo',eleventh:'décimo primeiro',twelfth:'décimo segundo',secondary:'permanente',central:'central',lateral:'lateral',medial:'medial',anterior:'anterior',posterior:'posterior',superior:'superior',inferior:'inferior',proximal:'proximal',distal:'distal',long:'longo',short:'curto',longus:'longo',brevis:'curto',major:'maior',minor:'menor',maximus:'máximo',minimus:'mínimo',medius:'médio',intermedius:'intermédio',externus:'externo',internus:'interno',external:'externo',internal:'interno',superficial:'superficial',deep:'profundo',head:'cabeça',part:'porção',set:'conjunto',muscle:'músculo',bone:'osso',disk:'disco',joint:'articulação',ligament:'ligamento',tendon:'tendão',foot:'pé',hand:'mão',finger:'dedo',toe:'dedo do pé',thumb:'polegar',little:'mínimo',index:'indicador',ring:'anelar',thoracic:'torácico',lumbar:'lombar',cervical:'cervical',costal:'costal',plantar:'plantar',dorsal:'dorsal',palmar:'palmar',transverse:'transverso',oblique:'oblíquo',rectus:'reto',flexor:'flexor',extensor:'extensor',adductor:'adutor',abductor:'abdutor',levator:'levantador',rotator:'rotador',sphincter:'esfíncter',papillary:'papilar',ventricle:'ventrículo',jaw:'maxilar',gingiva:'gengiva',cartilage:'cartilagem',vertebra:'vértebra',phalanx:'falange',rib:'costela',tooth:'dente',of:'do'};
const skeletalExact:Record<string,string>={atlas:'Atlas',axis:'Áxis','body of sternum':'Corpo do esterno',manubrium:'Manúbrio','xiphoid process':'Processo xifoide',ethmoid:'Etmoide','cricoid cartilage':'Cartilagem cricoide','thyroid cartilage':'Cartilagem tireoide','left arytenoid cartilage':'Cartilagem aritenoide esquerda','right arytenoid cartilage':'Cartilagem aritenoide direita','left corniculate cartilage':'Cartilagem corniculada esquerda','right corniculate cartilage':'Cartilagem corniculada direita','left cuneiform cartilage':'Cartilagem cuneiforme esquerda','right cuneiform cartilage':'Cartilagem cuneiforme direita','left major alar cartilage':'Cartilagem alar maior esquerda','right major alar cartilage':'Cartilagem alar maior direita'};
const boneBase:Record<string,string>={femur:'Fêmur',tibia:'Tíbia',fibula:'Fíbula',patella:'Patela',humerus:'Úmero',radius:'Rádio',ulna:'Ulna',scapula:'Escápula',clavicle:'Clavícula',sternum:'Esterno',sacrum:'Sacro',coccyx:'Cóccix',mandible:'Mandíbula',maxilla:'Maxila','hyoid bone':'Osso hioide','hip bone':'Osso do quadril','frontal bone':'Osso frontal','parietal bone':'Osso parietal','temporal bone':'Osso temporal','occipital bone':'Osso occipital','sphenoid bone':'Osso esfenoide','nasal bone':'Osso nasal','lacrimal bone':'Osso lacrimal','zygomatic bone':'Osso zigomático','palatine bone':'Osso palatino',vomer:'Vômer',calcaneus:'Calcâneo',capitate:'Capitato',hamate:'Hamato',lunate:'Semilunar',pisiform:'Pisiforme',scaphoid:'Escafoide',talus:'Tálus',trapezium:'Trapézio',trapezoid:'Trapezoide',triquetral:'Triquetro','cuboid bone':'Cuboide','intermediate cuneiform bone':'Cuneiforme intermédio','lateral cuneiform bone':'Cuneiforme lateral','medial cuneiform bone':'Cuneiforme medial','navicular bone':'Navicular','sesamoid bone':'Sesamoide'};
const ordinals:Record<string,string>={first:'primeira',second:'segunda',third:'terceira',fourth:'quarta',fifth:'quinta',sixth:'sexta',seventh:'sétima',eighth:'oitava',ninth:'nona',tenth:'décima',eleventh:'décima primeira',twelfth:'décima segunda'};
const ordinalsMasc:Record<string,string>={first:'primeiro',second:'segundo',third:'terceiro',fourth:'quarto',fifth:'quinto'};
function skeletalLabel(name:string):string{
 const raw=name.toLowerCase(),side=/\bleft\b/.test(raw)?'esquerda':/\bright\b/.test(raw)?'direita':''; let v=raw.replace(/\b(left|right)\b/g,'').replace(/\s+/g,' ').trim();
 if(skeletalExact[raw])return skeletalExact[raw];
 let m=v.match(/^(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth) (cervical|thoracic|lumbar) vertebra$/); if(m)return `${ordinals[m[1]]} vértebra ${m[2]==='thoracic'?'torácica':m[2]==='lumbar'?'lombar':'cervical'}`;
 m=v.match(/^intervertebral disk(?: of (.+))?$/); if(m)return m[1]?`Disco intervertebral da ${skeletalLabel(m[1])}`:'Disco intervertebral';
 m=v.match(/^(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth) rib$/); if(m)return `${ordinals[m[1]]} costela${side?' '+side:''}`;
 m=v.match(/^(first|second|third|fourth|fifth) (metacarpal|metatarsal) bone$/); if(m)return `${ordinalsMasc[m[1]]} ${m[2]==='metacarpal'?'metacarpo':'metatarso'}${side?' '+side:''}`.replace(/^./,c=>c.toUpperCase());
 m=v.match(/^(first|second|third|fourth|fifth|sixth|seventh) costal cartilage$/); if(m)return `Cartilagem costal ${ordinals[m[1]]}${side?' '+side:''}`;
 m=v.match(/^(upper|lower) (first|second) secondary (molar|premolar|central incisor|lateral incisor|canine) tooth$/); if(m){const dent=m[3]==='molar'?'molar':m[3]==='premolar'?'pré-molar':m[3]==='central incisor'?'incisivo central':m[3]==='lateral incisor'?'incisivo lateral':'canino';return `Dente ${dent} permanente ${m[1]==='upper'?'superior':'inferior'}${side?' '+side:''}`;}
 m=v.match(/^(distal|middle|proximal) phalanx of (.+)$/); if(m){let f=m[2].replace(/\b(big|second|third|fourth|little) toe\b/,(_,x)=>x==='big'?'hálux':`${words[x]??x} dedo do pé`).replace(/\b(index|middle|ring|little) finger\b/,(_,x)=>`${x==='middle'?'médio':words[x]} dedo`).replace(/\bthumb\b/,'polegar');return `${m[1]==='middle'?'Falange média':m[1]==='distal'?'Falange distal':'Falange proximal'} do ${f}${side?' '+side:''}`;}
 if(v==='gingiva of upper jaw')return 'Gengiva da maxila'; if(v==='gingiva of lower jaw')return 'Gengiva da mandíbula';
 const exact=boneBase[v]; if(exact)return exact+(side?' '+side:'');
 const fallback:Record<string,string>={'fibularis brevis':'Fibular curto','fibularis longus':'Fibular longo','fibularis tertius':'Fibular terceiro','iliotibial tract':'Trato iliotibial','tibialis anterior':'Tibial anterior','tibialis posterior':'Tibial posterior',subscapularis:'Subescapular', 'levator scapulae':'Levantador da escápula'};
 const translated=fallback[v]??v.split(/\s+/).map(token=>words[token]??token).join(' '); return translated.charAt(0).toUpperCase()+translated.slice(1)+(side?' '+side:'');
}
function translateName(name:string,system:SystemId){
 if(system==='skeletal')return skeletalLabel(name);
 let value=name.toLowerCase();
 const side=/\bleft\b/.test(value)?'esquerdo':/\bright\b/.test(value)?'direito':'';
 value=value.replace(/\b(left|right)\b/g,'').replace(/\s+/g,' ').trim();
 Object.entries(phrases).sort((a,b)=>b[0].length-a[0].length).forEach(([from,to])=>{value=value.replace(new RegExp(`\\b${from}\\b`,'g'),to.toLowerCase());});
 value=value.split(/(\s+|[-,])/).map(token=>words[token]??token).join('').replace(/\s+/g,' ').trim();
 if(side)value=`${value} ${side}`;
 value=value.charAt(0).toUpperCase()+value.slice(1);
 if(system==='muscular'&&!/músculo|cabeça|porção|conjunto/i.test(value))value=`Músculo ${value}`;
 if(system==='muscular'&&/[a-z]{3,} of [a-z]{3,}/i.test(value))return `Estrutura muscular ${name.match(/left/i)?'esquerda':name.match(/right/i)?'direita':''}`.trim();
 return value;
}
function label(part:Part){return translateName(part.name,part.system);}

class Boundary extends Component<{children:ReactNode;retry:()=>void},{failed:boolean}>{
 state={failed:false};
 static getDerivedStateFromError(){return {failed:true};}
 render(){return this.state.failed?<div className="hbe-message" role="alert"><h3>A visualização foi interrompida.</h3><p>Você pode tentar abrir o corpo novamente.</p><button onClick={this.props.retry}>Tentar novamente</button></div>:this.props.children;}
}

function Explorer({assetBase,retry}:{assetBase:string;retry:()=>void}){
 const [atlas,setAtlas]=useState<Atlas|null>(null),[state,setState]=useState(initial),[progress,setProgress]=useState(0),[error,setError]=useState('');
 useEffect(()=>{const abort=new AbortController();fetch(new URL('atlas.json',assetBase),{signal:abort.signal}).then(r=>{if(!r.ok)throw Error();return r.json();}).then((data:Atlas)=>{if(!Array.isArray(data.parts)||!data.chunks?.length)throw Error();setAtlas({...data,chunks:data.chunks.map(chunk=>({...chunk,url:new URL(chunk.url.split('/').pop()!,assetBase).href,gzip:chunk.gzip?new URL(chunk.gzip.split('/').pop()!,assetBase).href:undefined}))});}).catch(e=>{if(e.name!=='AbortError')setError('Não foi possível carregar os dados do corpo. Confira sua conexão e tente novamente.');});return()=>abort.abort();},[assetBase]);
 const ready=progress===100&&!error;
 const selected=atlas?.parts.find(p=>p.id===state.selected[0]);
 function preset(visible:SystemId[]){setState(s=>({...s,visible,selected:[],isolate:false,reset:s.reset+1}));}
 function select(id:string){setState(s=>({...s,selected:[id]}));}
 const fail=()=>setError('Não foi possível manter a visualização 3D neste dispositivo. Confira sua conexão e tente novamente.');
 return <>
  <div className="hbe-toolbar"><div className="hbe-tabs" role="group" aria-label="Camadas do corpo"><button disabled={!ready} aria-pressed={state.visible.includes('muscular')} onClick={()=>preset(['skeletal','muscular','connective'])}>Músculos</button><button disabled={!ready} aria-pressed={!state.visible.includes('muscular')} onClick={()=>preset(['skeletal'])}>Ossos</button></div></div>
  <div className="hbe-layout">
   <div className="hbe-stage" aria-busy={!ready&&!error}>
    {atlas&&!error&&<AnatomyScene atlas={atlas} state={state} onSelect={select} onProgress={setProgress} onError={fail}/>}
    {!ready&&!error&&<div className="hbe-message" role="status"><span className="hbe-kicker">PREPARANDO SEU NOVO OLHAR</span><h3>O corpo, por inteiro.</h3><progress max="100" value={progress} aria-label="Carregamento dos modelos"/><p>{progress===0?'Carregando a anatomia…':`${progress}% carregado`}</p><p className="hbe-small">Na primeira visita, o carregamento pode levar alguns instantes.</p></div>}
    {error&&<div className="hbe-message" role="alert"><h3>Vamos tentar de novo?</h3><p>{error}</p><button onClick={retry}>Tentar novamente</button></div>}
    {ready&&<span className="hbe-stage-note">Arraste para girar · Toque para selecionar</span>}
   </div>
   <aside className="hbe-panel" aria-label="Controles e estrutura selecionada">
    <div className="hbe-explode"><label htmlFor="hbe-explode">Separar as estruturas <output>{Math.round(state.explode*100)}%</output></label><input id="hbe-explode" type="range" min="0" max="100" step="1" value={Math.round(state.explode*100)} disabled={!ready||state.isolate} onChange={e=>setState(s=>({...s,explode:Number(e.target.value)/100}))}/><div className="hbe-range-labels"><span>Corpo inteiro</span><span>Explodido</span></div></div>
    <div className="hbe-views" role="group" aria-label="Ponto de vista">{([['front','Frente'],['back','Costas'],['side','Lado']] as const).map(([view,title])=><button key={view} disabled={!ready||state.isolate} aria-pressed={state.view===view} onClick={()=>setState(s=>({...s,view,reset:s.reset+1}))}>{title}</button>)}</div>
    <div className="hbe-detail" aria-live="polite"><span className="hbe-kicker">{selected?'ESTRUTURA SELECIONADA':'CADA PARTE IMPORTA'}</span><h3>{selected?label(selected):'Toque em uma estrutura'}</h3><p>{selected?`${systemNames[selected.system]??'Estrutura anatômica'} · ${selected.id}`:'Gire o corpo e toque diretamente em um músculo ou osso para conhecer seu nome.'}</p><button disabled={!ready||!selected} onClick={()=>setState(s=>({...s,isolate:!s.isolate,explode:0,reset:s.reset+1}))}>{state.isolate?'Mostrar o corpo':'Isolar estrutura'}</button></div>
    <button className="hbe-reset" disabled={!ready} onClick={()=>setState(s=>({...initial(),reset:s.reset+1}))}>Voltar ao corpo inteiro</button>
    <p className="hbe-small">No modelo: setas giram; + e − aproximam e afastam. Toque diretamente na anatomia para selecionar.</p>
   </aside>
  </div>
 </>;
}

export function mount(container:HTMLElement,{assetBase}:{assetBase:string}){
 const root=createRoot(container);let version=0;
 const render=()=>root.render(<Boundary key={version++} retry={render}><Explorer assetBase={assetBase} retry={render}/></Boundary>);
 render();return {destroy(){root.unmount();}};
}
