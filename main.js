document.addEventListener("click" , showcolor );

document.getElementById("botao").addEventListener("click", showname);

document.getElementById("btn-soma").addEventListener("click", somar);

function showcolor()
{
    document.body.style.backgroundColor = "pink";
}
function showname()
{
    let usuario= document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML="Meu nome é" + usuario;
    document.getElementById("nome").value="";
}
function somar()
{
    let soma=document.getElementById("num1").value;
    let soma=document.getElementById("num2").value;
    document.getElementById("resultado1").innerHTML="num1+num2";
}