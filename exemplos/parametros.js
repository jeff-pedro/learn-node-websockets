/**
 * Criando instância
 */
// string como parâmetro
const stringParams = new URLSearchParams('?nome=skooby&sobrenome=doo');
console.log('com string: ', stringParams);

// array de arrays como parâmetro
const arrayParams = new URLSearchParams([
    ['nome', 'skooby'],
    ['sobrenome', 'doo']
]);
console.log('com array: ', arrayParams);

// objeto como parâmetro
const objetoParams = new URLSearchParams({
    nome: 'skooby',
    sobrenome: 'doo' 
});
console.log('com objeto: ', objetoParams);


/**
 * Acessando valores
 */
const nome = stringParams.get('nome');
const temNome = stringParams.has('nome');
const parametros = stringParams.entries();

if (temNome) {
    console.log('Nome: ' + nome);
}

for (let parametro of parametros) {
    const propriedade = parametro[0];
    const valor = parametro[1];

    console.log(`Meu ${propriedade} é ${valor}`);
}
