$('#adicionar').on('click', function(){
    let tarefa = $('#tarefa').val();
    if (tarefa.length == 0){
        return;
    }

    salvar(tarefa);
    mostrar();
});

function salvar(tarefa) {
    let listaDeTarefas = buscar();
    listaDeTarefas.push(tarefa);
    
    let listaConvertida = JSON.stringify(listaDeTarefas);
    localStorage.setItem('lista_tarefa', listaConvertida);

}

function buscar() {
    let listaDeTarefas = [];
    if (localStorage.getItem('lista_tarefa')) {
    return JSON.parse(localStorage.getItem('lista_tarefa'));} 
    else {
        return listaDeTarefas;
    }
}

function mostrar (){
    let lista = buscar();
    ul.empty();
    lista.forEach(function(item, chave){
        let ul = $('#lista_atividades');
        ul.append(`<li>${item}<li>`);
    })
}