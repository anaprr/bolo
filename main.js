document.addEventListener("click" , showcolor );

document.getElementById("botao").addEventListener("click", exibenome);

document.getElementById("btn-soma").addEventListener("click", exiberesultado);

function showcolor()
{
    document.body.style.backgroundColor = "pink";
}
function exibenome()
{
    let usuario= document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML="Meu nome é" + usuario;
    document.getElementById("nome").value="";
}
function exiberesultado()
{
    let numero1= document.getElementById("num1").value;
    let numero2= document.getElementById("num2").value;
    document.getElementById("resultado1").innerHTML=parseFloat( numero1) + parseFloat(numero2);
}
