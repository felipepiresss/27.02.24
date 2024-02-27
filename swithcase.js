// A linha const sortear = () => { define uma constante chamada sortear, que é uma função de seta em muitas linguagens de programação, como JavaScript
const sortear = () => {

    // A linha var nomes = [ "Pires", "Gabriel", "Chevro", "Meca"]; declara uma variável chamada nomes e a inicializa com uma lista (array) contendo quatro elementos de texto: "Pires", "Gabriel", "Chevro" e "Meca". 
        var nomes = [ "Pires", "Gabriel", "Chevro", "Meca"];
    
    // Essa linha de código em JavaScript está atribuindo o elemento HTML cujo ID é "nome" à variável h1Nome.
        let h1Nome = document.getElementById("nome");
    
    // Essa linha de código em JavaScript está inicializando uma variável chamada achouNúmero com o valor booleano false
        let achouNumero = false;
    
    // A linha de código let númeroSorteado; em JavaScript está declarando uma variável chamada númeroSorteado sem atribuir um valor inicial a ela.
        let numeroSorteado;
    
    // Essas linhas de código estão usando uma estrutura de repetição while para gerar um número aleatório e atribuí-lo à variável numeroSorteado. O loop continua executando enquanto a condição achouNumero == false for verdadeira
        while (achouNumero == false) {
    
    // A função Math.random() retorna um número decimal entre 0 (inclusive) e 1 (exclusive). Multiplicando esse valor por 100 e aplicando Math.floor() arredonda para o número inteiro mais próximo, resultando em um número inteiro entre 0 e 99.
            numeroSorteado = Math.floor(Math.random() * 100);
    
    // Esta linha de código contém uma estrutura condicional if. Ela verifica se o valor armazenado na variável numeroSorteado é menor que o comprimento (número de elementos) do array nomes. Se esta condição for verdadeira, o bloco de código dentro do if será executado.
            if (numeroSorteado < nomes.length) {
                achouNumero = true;
            } 
        }
    
    // A linha "switch (numeroSorteado)" em linguagens de programação como Java, C++ e outras, indica o início de uma estrutura de controle de fluxo chamada "switch statement".
        switch (numeroSorteado) {
    
    // se numeroSorteado for 0, o texto do elemento <h1> especificado será atualizado com o valor correspondente no array nomes.
            case 0:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
    
            case 1:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
    
            case 2:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
    
            case 3:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
    
            case 4:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
    
    // O "default" é opcional e é executado se nenhum dos casos corresponder ao valor de "numeroSorteado". O "break" é utilizado para sair do switch após a execução do bloco de código correspondente ao caso
                default:
                    h1Nome.innerText = "Ops! Nome não consta na lista";
                    break;
        }
        h1Nome.innerText += "o numero sorteado foi: " + numeroSorteado;
    }
    