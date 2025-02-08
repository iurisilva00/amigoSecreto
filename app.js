//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

lista_amigos = [];

function adicionarAmigo() {
    
        let campo = document.getElementById('amigo').value;

        if(campo == ''){
            alert('Digite por favor, o amigo!');
        }
        else{
  
            lista_amigos.push(campo.split());
        
            limpaCampo();

            exibirLista(lista_amigos)


        }
        
        return lista_amigos
}


function limpaCampo() {
    valor_digitado = document.getElementById('amigo');
    valor_digitado.value = "";

}

function exibirTexto(texto){
    let amigo = document.getElementById('resultado');
    amigo.innerHTML = texto;
    return amigo

}
function exibirLista(lista){
    let listaAmigo = document.getElementById('listaAmigos');
    listaAmigo.innerHTML = '';
    lista.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element;
        listaAmigo.appendChild(li);

    });
}

function sortearAmigo(){


    if (lista_amigos.length === 0){
        alert('Adicione pessoas a lista por favor!')
        return;
    }
     let indiceAleatorio = Math.floor(Math.random()*lista_amigos.length);
    
     let amigoSorteado = lista_amigos[indiceAleatorio];
        
     exibirTexto(`O amigo secreto é: ${amigoSorteado}`)



}