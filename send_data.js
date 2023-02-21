// base64 -w 0 prusa.jpg  > image.txt
// npm install buffer xhr2 fs whatwg-fetch

const atob = (base64) => {
    return Buffer.from(base64, 'base64').toString('binary');
};

const fs = require('fs');
require('whatwg-fetch');
var XMLHttpRequest = require('xhr2');
global.XMLHttpRequest = require('xhr2');

function read_data() {
	const data = fs.readFileSync('image.txt', 'utf8');
	return data;
}

const snapshot  = read_data();
//console.log(snapshot);
const binary = atob(snapshot);
//console.log(binary);
const output = Uint8Array.from(binary, (c2) => c2.charCodeAt(0));
//console.log("OUTPUT");
//console.log(output);

fetch("https://webcam.connect.prusa3d.com/c/snapshot", {
  method: "PUT",
  headers: new Headers({
    "content-type": "image/jpg",
    "fingerprint": "0eb33f10881c9c2ade0a8f2dffc3b4d24dfa738a",
    "token": "Lww9iJtw9g3UevGN4klq",
  }),
  body: output
});

