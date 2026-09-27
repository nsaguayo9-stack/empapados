import {cpSync,mkdirSync,readFileSync,writeFileSync,rmSync} from 'node:fs';
import {join} from 'node:path';
const root=process.cwd(),out=join(root,'dist');
rmSync(out,{recursive:true,force:true});mkdirSync(out,{recursive:true});
cpSync(join(root,'assets'),join(out,'assets'),{recursive:true});
cpSync(join(root,'src'),join(out,'src'),{recursive:true});
writeFileSync(join(out,'index.html'),readFileSync(join(root,'index.html')));
console.log('Build terminado: dist/');
