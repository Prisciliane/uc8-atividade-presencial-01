let listaPecas=[]
let nomePeca= 'Peça Teste'
let pesoPeca=300
let podeCadastrar=true

if (pesoPeca<100){
    console.log ('Não há possibilidade de cadastrar!')
    podeCadastrar=false
}

if (listaPecas.length>10){
    console.log('Limite de peças atingido!')
    podeCadastrar=false
}

if (nomePeca.length<3){
    console.log('Tamanho de letras inferior a permitido')
    podeCadastar=false
}

if (podeCadastrar){
    listaPecas.push(nomePeca)
    console.log('Cadastramento efetudado com sucesso')
} else {
    console.log('Houve problemas para cadastrar a peça')
}

console.log('listando as peças cadastradas.')
for (let i=0;i<listaPecas.length;i++){
    console.log(listaPecas[i])
}