/* ----- 
Programmieren einer Webapp
JavaScript Einstiegsbeispiele B1 bis B3
----- */

//B1 Inhalt ändern
function loadChangeContent() {
    document.getElementById('button').addEventListener("touchstart", changeContent);
    document.getElementById('button').addEventListener("click", changeContent);
}
function changeContent(){
    document.getElementById('textBox').innerHTML = "Blablabla";
}

//B2 CSS ändern 1
function loadChangeCSS1() {
    document.getElementById('button').addEventListener("touchstart", changeCSS1);
    document.getElementById('button').addEventListener("click", changeCSS1);
}
function changeCSS1(){
    document.getElementById('textBox').setAttribute('style', 'background-color: #333333;');
}

//B3 CSS ändern 2
function loadChangeCSS2() {
    document.getElementById('button').addEventListener("touchstart", changeCSS2_show);
    document.getElementById('button').addEventListener("click", changeCSS2_show);
    document.getElementById('button2').addEventListener("touchstart", changeCSS2_hide);
    document.getElementById('button2').addEventListener("click", changeCSS2_hide);
}
function changeCSS2_show() {
    document.getElementById('textBox2').setAttribute('style', 'visibility: visible');
    document.getElementById('button').setAttribute('style', 'display: none;');
    document.getElementById('button2').setAttribute('style', 'display: block;');
}
function changeCSS2_hide() {
    document.getElementById('textBox2').setAttribute('style', 'visibility: hidden;');
    document.getElementById('button').setAttribute('style', 'display: block;');
    document.getElementById('button2').setAttribute('style', 'display: none;');
}