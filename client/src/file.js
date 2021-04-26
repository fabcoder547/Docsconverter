

const buffer=new ArrayBuffer(5);
console.log(buffer)

const view=new Uint8Array([5,0,0,0,0]);
console.log(view)



console.log( new TextDecoder().decode(view) ); // Hello


const blob=new Blob([view]);
console.log(blob)


