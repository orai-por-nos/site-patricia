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
const boneBase:Record<string,string>={femur:'Fêmur',tibia:'Tíbia',fibula:'Fíbula',patella:'Patela',humerus:'Úmero',radius:'Rádio',ulna:'Ulna',scapula:'Escápula',clavicle:'Clavícula',sternum:'Esterno',sacrum:'Sacro',coccyx:'Cóccix',mandible:'Mandíbula',maxilla:'Maxila','hyoid bone':'Osso hioide','hip bone':'Osso do quadril','frontal bone':'Osso frontal','parietal bone':'Osso parietal','temporal bone':'Osso temporal','occipital bone':'Osso occipital','sphenoid bone':'Osso esfenoide','nasal bone':'Osso nasal','lacrimal bone':'Osso lacrimal','zygomatic bone':'Osso zigomático','palatine bone':'Osso palatino',vomer:'Vômer',calcaneus:'Calcâneo',capitate:'Capitato',hamate:'Hamato',lunate:'Semilunar',pisiform:'Pisiforme',scaphoid:'Escafoide',talus:'Tálus',trapezium:'Trapézio',trapezoid:'Trapezoide',triquetral:'Piramidal','cuboid bone':'Cuboide','intermediate cuneiform bone':'Cuneiforme intermédio','lateral cuneiform bone':'Cuneiforme lateral','medial cuneiform bone':'Cuneiforme medial','navicular bone':'Navicular','sesamoid bone':'Sesamoide'};
const feminineBones=new Set(['tibia','fibula','patella','ulna','scapula','clavicle','mandible','maxilla']);
const ordinals:Record<string,string>={first:'primeira',second:'segunda',third:'terceira',fourth:'quarta',fifth:'quinta',sixth:'sexta',seventh:'sétima',eighth:'oitava',ninth:'nona',tenth:'décima',eleventh:'décima primeira',twelfth:'décima segunda'};
const ordinalsMasc:Record<string,string>={first:'primeiro',second:'segundo',third:'terceiro',fourth:'quarto',fifth:'quinto'};
const muscleBase:Record<string,string>={
 'adductor hallucis':'adutor do hálux','adductor pollicis':'adutor do polegar','biceps brachii':'bíceps braquial','biceps femoris':'bíceps femoral','cricothyroid':'cricotireóideo','deltoid':'deltoide','flexor carpi ulnaris':'flexor ulnar do carpo','gastrocnemius':'gastrocnêmio','trapezius':'trapézio','triceps brachii':'tríceps braquial',
 'abductor digiti minimi of foot':'abdutor do dedo mínimo do pé','abductor digiti minimi of hand':'abdutor do dedo mínimo da mão','abductor hallucis':'abdutor do hálux','abductor pollicis brevis':'abdutor curto do polegar','abductor pollicis longus':'abdutor longo do polegar',
 'adductor brevis':'adutor curto','adductor longus':'adutor longo','adductor magnus':'adutor magno','adductor minimus':'adutor mínimo','anconeus':'ancôneo','aryepiglotticus':'aritenoepiglótico','brachialis':'braquial','brachioradialis':'braquiorradial','cervical rotator':'rotador cervical','coccygeus':'coccígeo','coracobrachialis':'coracobraquial','digastric':'digástrico',
 'extensor carpi radialis brevis':'extensor radial curto do carpo','extensor carpi radialis longus':'extensor radial longo do carpo','extensor carpi ulnaris':'extensor ulnar do carpo','extensor digiti minimi':'extensor do dedo mínimo','extensor digitorum':'extensor dos dedos','extensor digitorum longus':'extensor longo dos dedos','extensor hallucis brevis':'extensor curto do hálux','extensor hallucis longus':'extensor longo do hálux','extensor indicis':'extensor do indicador','extensor pollicis brevis':'extensor curto do polegar','extensor pollicis longus':'extensor longo do polegar',
 'external anal sphincter':'esfíncter externo do ânus','external intercostal muscle':'intercostal externo','external oblique':'oblíquo externo','flexor accessorius':'quadrado plantar','flexor carpi radialis':'flexor radial do carpo','flexor digiti minimi brevis of foot':'flexor curto do dedo mínimo do pé','flexor digiti minimi brevis of hand':'flexor curto do dedo mínimo da mão','flexor digitorum brevis':'flexor curto dos dedos','flexor digitorum longus':'flexor longo dos dedos','flexor digitorum profundus':'flexor profundo dos dedos','flexor digitorum superficialis':'flexor superficial dos dedos','flexor hallucis brevis':'flexor curto do hálux','flexor hallucis longus':'flexor longo do hálux','flexor pollicis brevis':'flexor curto do polegar','flexor pollicis longus':'flexor longo do polegar',
 'gemellus inferior':'gêmeo inferior','gemellus superior':'gêmeo superior','genioglossus':'genioglosso','geniohyoid':'gênio-hióideo','gluteus maximus':'glúteo máximo','gluteus medius':'glúteo médio','gluteus minimus':'glúteo mínimo','gracilis':'grácil','hyoglossus':'hioglosso','iliacus':'ilíaco','iliococcygeus':'iliococcígeo','iliocostalis cervicis':'iliocostal do pescoço','iliocostalis lumborum':'iliocostal do lombo','iliocostalis thoracis':'iliocostal do tórax',
 'inferior oblique':'oblíquo inferior do olho','inferior rectus':'reto inferior do olho','infraspinatus muscle':'infraespinal','innermost intercostal muscle':'intercostal íntimo','internal intercostal muscle':'intercostal interno','interspinalis thoracis':'interespinal do tórax','lateral crico-arytenoid':'cricoaritenóideo lateral','lateral lumbar intertransversarius':'intertransversário lateral do lombo','lateral rectus':'reto lateral do olho','levator palpebrae superioris':'levantador da pálpebra superior','levator veli palatini':'levantador do véu palatino',
 'longissimus capitis':'longuíssimo da cabeça','longissimus cervicis':'longuíssimo do pescoço','longissimus thoracis':'longuíssimo do tórax','longus capitis':'longo da cabeça','longus colli':'longo do pescoço','lumbar rotator':'rotador lombar','medial lumbar intertransversarius':'intertransversário medial do lombo','medial rectus':'reto medial do olho','mylohyoid':'milo-hióideo','oblique arytenoid':'aritenóideo oblíquo','obliquus capitis inferior':'oblíquo inferior da cabeça','obliquus capitis superior':'oblíquo superior da cabeça','obturator externus':'obturador externo','obturator internus':'obturador interno','omohyoid':'omo-hióideo','opponens digiti minimi of foot':'oponente do dedo mínimo do pé','opponens digiti minimi of hand':'oponente do dedo mínimo da mão','opponens pollicis':'oponente do polegar',
 'palmaris longus':'palmar longo','pectineus':'pectíneo','pectoralis major':'peitoral maior','pectoralis minor':'peitoral menor','piriformis':'piriforme','plantaris':'plantar','platysma':'platisma','popliteus':'poplíteo','posterior crico-arytenoid':'cricoaritenóideo posterior','pronator quadratus':'pronador quadrado','pronator teres':'pronador redondo','psoas major':'psoas maior','pubococcygeus':'pubococcígeo','puborectalis':'puborretal','quadratus femoris':'quadrado femoral','rectus capitis anterior':'reto anterior da cabeça','rectus capitis lateralis':'reto lateral da cabeça','rectus capitis posterior major':'reto posterior maior da cabeça','rectus capitis posterior minor':'reto posterior menor da cabeça','rectus femoris':'reto femoral',
 'rhomboid major':'romboide maior','rhomboid minor':'romboide menor','sartorius':'sartório','scalenus anterior':'escaleno anterior','scalenus medius':'escaleno médio','scalenus posterior':'escaleno posterior','semimembranosus':'semimembranáceo','semispinalis capitis':'semiespinal da cabeça','semispinalis cervicis':'semiespinal do pescoço','semispinalis thoracis':'semiespinal do tórax','semitendinosus':'semitendíneo','serratus anterior':'serrátil anterior','serratus posterior inferior':'serrátil posterior inferior','serratus posterior superior':'serrátil posterior superior','soleus':'sóleo','spinalis':'espinal','spinalis thoracis':'espinal do tórax','splenius capitis':'esplênio da cabeça','splenius cervicis':'esplênio do pescoço',
 'sternocleidomastoid':'esternocleidomastóideo','sternohyoid':'esterno-hióideo','sternothyroid':'esternotireóideo','stylohyoid':'estilo-hióideo','subclavius':'subclávio','superficial perineal muscle':'transverso superficial do períneo','superior oblique':'oblíquo superior do olho','superior rectus':'reto superior do olho','supinator':'supinador','supraspinatus':'supraespinal','tensor veli palatini':'tensor do véu palatino','teres major':'redondo maior','teres minor':'redondo menor','thoracic rotator':'rotador torácico','thyro-arytenoid':'tireoaritenóideo','thyrohyoid':'tireo-hióideo','transverse arytenoid':'aritenóideo transverso','transversus thoracis':'transverso do tórax','uvular muscle':'músculo da úvula','vastus intermedius':'vasto intermédio','vastus lateralis':'vasto lateral','vastus medialis':'vasto medial','vocalis':'vocal'
};
const partTerms:Record<string,string>={abdominal:'abdominal',acromial:'acromial',ascending:'ascendente',clavicular:'clavicular',descending:'descendente','inferior oblique':'oblíqua inferior',oblique:'oblíqua',spinal:'espinal',sternocostal:'esternocostal',straight:'reta','superior oblique':'oblíqua superior',transverse:'transversa','vertical intermediate':'intermédia vertical'};
const headTerms:Record<string,string>={anterolateral:'anterolateral',humeral:'umeral',lateral:'lateral',long:'longa',medial:'medial',oblique:'oblíqua',short:'curta',superficial:'superficial',transverse:'transversa',ulnar:'ulnar'};
function skeletalLabel(name:string):string{
 const raw=name.toLowerCase(),side=/\bleft\b/.test(raw)?'esquerda':/\bright\b/.test(raw)?'direita':'',sideMasc=side==='esquerda'?'esquerdo':side==='direita'?'direito':''; let v=raw.replace(/\b(left|right)\b/g,'').replace(/\s+/g,' ').trim();
 if(skeletalExact[raw])return skeletalExact[raw];
 let m=v.match(/^(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth) (cervical|thoracic|lumbar) vertebra$/); if(m)return `${ordinals[m[1]]} vértebra ${m[2]==='thoracic'?'torácica':m[2]==='lumbar'?'lombar':'cervical'}`;
 m=v.match(/^intervertebral disk(?: of (.+))?$/); if(m){if(!m[1])return 'Disco intervertebral';const target=skeletalLabel(m[1]);return `Disco intervertebral ${m[1]==='axis'?'do':'da'} ${target}`;}
 m=v.match(/^(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth) rib$/); if(m)return `${ordinals[m[1]]} costela${side?' '+side:''}`;
 m=v.match(/^(first|second|third|fourth|fifth) (metacarpal|metatarsal) bone$/); if(m)return `${ordinalsMasc[m[1]]} ${m[2]==='metacarpal'?'metacarpo':'metatarso'}${sideMasc?' '+sideMasc:''}`.replace(/^./,c=>c.toUpperCase());
 m=v.match(/^(first|second|third|fourth|fifth|sixth|seventh) costal cartilage$/); if(m)return `Cartilagem costal ${ordinals[m[1]]}${side?' '+side:''}`;
 m=v.match(/^(upper|lower) (first|second) secondary (molar|premolar) tooth$/); if(m){const dent=m[3]==='molar'?'molar':'pré-molar';return `${m[2]==='first'?'Primeiro':'Segundo'} ${dent} permanente ${m[1]==='upper'?'superior':'inferior'}${sideMasc?' '+sideMasc:''}`;}
 m=v.match(/^(upper|lower) (central|lateral) secondary incisor tooth$/); if(m)return `Dente incisivo ${m[2]==='central'?'central':'lateral'} permanente ${m[1]==='upper'?'superior':'inferior'}${sideMasc?' '+sideMasc:''}`;
 m=v.match(/^(upper|lower) secondary canine tooth$/); if(m)return `Dente canino permanente ${m[1]==='upper'?'superior':'inferior'}${sideMasc?' '+sideMasc:''}`;
 m=v.match(/^(distal|middle|proximal) phalanx of (.+)$/); if(m){let f=m[2].replace(/\b(big|second|third|fourth|little) toe\b/,(_,x)=>x==='big'?'hálux':`${words[x]??x} dedo do pé`).replace(/\b(index|middle|ring|little) finger\b/,(_,x)=>`${x==='middle'?'médio':words[x]} dedo`).replace(/\bthumb\b/,'polegar');const limbSide=side==='esquerda'?'esquerdo':side==='direita'?'direito':'';return `${m[1]==='middle'?'Falange média':m[1]==='distal'?'Falange distal':'Falange proximal'} do ${f}${limbSide?' '+limbSide:''}`;}
 if(v==='gingiva of upper jaw')return 'Gengiva da maxila'; if(v==='gingiva of lower jaw')return 'Gengiva da mandíbula';
 if(v==='navicular bone of foot')return `Osso navicular do pé${sideMasc?' '+sideMasc:''}`;
 if(v==='sesamoid bone of foot')return `Osso sesamoide do pé${sideMasc?' '+sideMasc:''}`;
 const exact=boneBase[v]; if(exact){const adjustedSide=side?(feminineBones.has(v)?side:(side==='esquerda'?'esquerdo':'direito')):'';return exact+(adjustedSide?' '+adjustedSide:'');}
 const fallback:Record<string,string>={'fibularis brevis':'Fibular curto','fibularis longus':'Fibular longo','fibularis tertius':'Fibular terceiro','iliotibial tract':'Trato iliotibial','tibialis anterior':'Tibial anterior','tibialis posterior':'Tibial posterior',subscapularis:'Subescapular', 'levator scapulae':'Levantador da escápula'};
 const translated=fallback[v]??v.split(/\s+/).map(token=>words[token]??token).join(' '); return translated.charAt(0).toUpperCase()+translated.slice(1)+(sideMasc?' '+sideMasc:'');
}
function translateName(name:string,system:SystemId){
 if(system==='skeletal')return skeletalLabel(name);
 let value=name.toLowerCase();
 const side=/\bleft\b/.test(value)?'esquerdo':/\bright\b/.test(value)?'direito':'';
 value=value.replace(/\b(left|right)\b/g,'').replace(/\s+/g,' ').trim();
 if(system==='muscular'){
  let m=value.match(/^(.+) part of (.+)$/);
  if(m&&partTerms[m[1]]&&muscleBase[m[2]])return `Porção ${partTerms[m[1]]} do músculo ${muscleBase[m[2]]}${side?' '+side:''}`;
  m=value.match(/^(.+) head of (.+)$/);
  if(m&&headTerms[m[1]]&&muscleBase[m[2]])return `Cabeça ${headTerms[m[1]]} do músculo ${muscleBase[m[2]]}${side?' '+side:''}`;
  m=value.match(/^(first|second|third|fourth) lumbrical of foot$/);
  if(m)return `Músculo ${ordinalsMasc[m[1]]} lumbrical do pé${side?' '+side:''}`;
  m=value.match(/^(first|second|third) plantar interosseous of foot$/);
  if(m)return `Músculo ${ordinalsMasc[m[1]]} interósseo plantar do pé${side?' '+side:''}`;
  m=value.match(/^(anterior|lateral|posterior|septal) papillary muscle of ventricle$/);
  if(m)return `Músculo papilar ${m[1]} do ventrículo${side?' '+side:''}`;
  if(value==='anterolateral head of lateral papillary muscle of ventricle')return `Cabeça anterolateral do músculo papilar lateral do ventrículo${side?' '+side:''}`;
  const sets:Record<string,string>={'set of anterior cervical intertransversarii':'Conjunto dos músculos intertransversários cervicais anteriores','set of posterior cervical intertransversarii':'Conjunto dos músculos intertransversários cervicais posteriores','set of interspinales cervicis':'Conjunto dos músculos interespinais do pescoço','set of interspinales lumborum':'Conjunto dos músculos interespinais do lombo','set of levatores costarum breves':'Conjunto dos músculos levantadores curtos das costelas','set of levatores costarum longi':'Conjunto dos músculos levantadores longos das costelas','set of dorsal interossei of hand':'Conjunto dos músculos interósseos dorsais da mão','set of palmar interossei of hand':'Conjunto dos músculos interósseos palmares da mão','set of lumbricals of hand':'Conjunto dos músculos lumbricais da mão'};
  if(sets[value])return `${sets[value]}${side?' '+(side==='esquerdo'?'esquerdos':'direitos'):''}`;
  if(value==='diaphragm')return 'Diafragma';
  if(muscleBase[value])return `Músculo ${muscleBase[value]}${side?' '+side:''}`;
 }
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
