document.addEventListener("click" , showcolor );

document.getElementById("botao").addEventListener("click", exibenome);

document.getElementById("btn-soma").addEventListener("click", exiberesultado);

document.getElementById("btn-dividir").addEventListener("click", exibedivisao);

document.getElementById("btn-multiplica").addEventListener("click", exibemultiplicar);

document.getElementById("btn-subtrair").addEventListener("click", exibesubtrair);


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
function exibedivisao()
{
    let numero3= document.getElementById("num3").value;
    let numero4= document.getElementById("num4").value;
    document.getElementById("resultado2").innerHTML=parseFloat( numero3) / parseFloat(numero4);
}
function exibemultiplica()
{
    let numero5= document.getElementById("num5").value;
    let numero6= document.getElementById("num6").value;
    document.getElementById("resultado3").innerHTML=parseFloat( numero5) * parseFloat(numero);
}
function exibesubtrair()
{
    let numero7= document.getElementById("num7").value;
    let numero8= document.getElementById("num8").value;
    document.getElementById("resultado4").innerHTML=parseFloat( numero7) - parseFloat(numero8);
}