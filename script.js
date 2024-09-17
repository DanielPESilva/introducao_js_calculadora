let nota = document.querySelector('#nota');
let btnCadastrar = document.querySelector('#botao');

btnCadastrar.addEventListener('click',(e) => {
    e.preventDefault();
    alert(verificarMedia (nota.value));
})

function verificarMedia(nota){
    if(nota >= 60){
        return "estudante aprovado"
    }else{
        return "estudante reprovado"
    }
}

//<script>
// document.querySelector
// addEventListener
// Arrow Function
// Template String
// preventDefaut
// alert, console.log