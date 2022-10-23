document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var div = document.createElement( 'div' );
var btnForm = document.createElement( 'form' );
var btn = document.createElement( 'input' );
const h1 = document.createElement("h3");
const textNode = document.createTextNode("¡Atención esta página presenta sesgos de género!");

//append all elements
document.body.appendChild( div );
div.appendChild( btnForm );
h1.appendChild(textNode);
div.appendChild( h1 );
// btnForm.appendChild( btn );


//set attributes for div
div.id = 'myDivId';
div.style.position = 'fixed';
div.style.top = '90%';
// div.style.left = '50%';
div.style.zIndex = "9999";
div.style.width = '100%';   
div.style.height = '100%';
div.style.backgroundColor = 'red';

//set attributes for btnForm
btnForm.action = '';

//set attributes for btn
//"btn.removeAttribute( 'style' );
h1.style.textAlign = 'center';
btn.type = 'button';
btn.value = 'hello';
btn.style.position = 'relative';
btn.style.top = '50%';
btn.style.left = '50%';