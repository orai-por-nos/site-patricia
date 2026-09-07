import {build} from 'esbuild';
import {copyFile} from 'node:fs/promises';
await build({entryPoints:['src/index.tsx'],bundle:true,minify:true,format:'esm',target:'es2022',outfile:'../js/human-body/explorer.js',legalComments:'linked',define:{'process.env.NODE_ENV':'"production"'},jsx:'automatic'});
await copyFile('LICENSE-human-atlas.txt','../js/human-body/LICENSE-human-atlas.txt');
