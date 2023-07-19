"use strict";
// TS transpila y genera JS
// El navegador o node.JS NO RECONOCEN TS, sino que se debe traducir a js
// el archivo demo.ts arroja un error en la primera compilacion, este se debe a que no hemos indicado la version de JS a compilar
// Para compilar...
//npx tsc .\05\demo.ts --target es6
// Los archivos compilados no quedan en SRC, sino que se deberian mover a otra carpeta llamada 'dist' (distribution)
// Para hacer eso:
// npx tsc .\05\demo.ts --target es6 --outDir dist
// podemos hacer que compile tooodos los archivos TS:
// npx tsc .\05\*.ts --target es6 --outDir dist
