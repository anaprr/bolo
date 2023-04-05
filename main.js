document.addEventListener("click" , showcolor );

document.getElementById("botao").addEventListener("click", showname);

function showcolor()
{
    document.body.style.backgroundColor = "pink";
}
function showname()
{
    let usuario= document.getElementById("nome").value;
    document.getElementById("mensagem").innerText="Meu nome é" + usuario;
    document.getElementById("nome").value="";
}