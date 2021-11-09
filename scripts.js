function colocarbordabebida(bebida){
const comborda = document.querySelector(".selecao-bebida .selecionado");
console.log(bebida)

    if( comborda !== null){
        comborda.classList.remove("selecionado");
    }
    console.log(comborda);
        bebida.classList.add("selecionado");
        mudarbotao();
}
function colocarbordaprato(prato){
    const comborda = document.querySelector(".selecao-pratos .selecionado");
    console.log(prato)
    
        if( comborda !== null){
            comborda.classList.remove("selecionado");
        }
        console.log(comborda);
            prato.classList.add("selecionado");    
            mudarbotao();
    }
function colocarbordasobremesa(sobremesa){
    const comborda = document.querySelector(".selecao-sobremesa .selecionado");

    console.log(sobremesa)
        
        if( comborda !== null){
            comborda.classList.remove("selecionado");
            
        }
            console.log(comborda);
            sobremesa.classList.add("selecionado");  
            
        mudarbotao();
        }

function mudarbotao() {
    const combordapratos = document.querySelector(".selecao-pratos .selecionado");
    const combordabebida = document.querySelector(".selecao-bebida .selecionado");
    const combordasobremesa = document.querySelector(".selecao-sobremesa .selecionado");
    const textoconfirma = document.querySelector(".conteudobotao");
    const botaoconfirma = document.querySelector(".botao-baixo")

    if(combordapratos!== null && (combordabebida !== null) && combordasobremesa !== null){
        botaoconfirma.classList.add("botao-baixo-selecionado");
        textoconfirma.innerHTML = "Fechar pedido!"
    }   
}

function calcular() {
    


}

function confirmapedido() {
    const nomeprato = document.querySelector(".selecao-pratos .selecionado .nome-prato");
    const nomebebida = document.querySelector(".selecao-bebida .selecionado .nome-bebida");
    const nomesobremesa = document.querySelector(".selecao-sobremesa .selecionado .nome-sobremesa");

    const valorprato = document.querySelector(".selecao-pratos .selecionado .valor-prato");
    const valorbebida = document.querySelector(".selecao-bebida .selecionado .valor-bebida");
    const valorsobremesa = document.querySelector(".selecao-sobremesa .selecionado .valor-sobremesa");

    const value1 = valorprato.innerHTML;
    const value2 = valorbebida.innerHTML;
    const value3 = valorsobremesa.innerHTML;

    const cleanvalorprato = parseFloat(value1.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2);
    const cleanvalorbebida = parseFloat(value2.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2);
    const cleanvalorsobremesa = parseFloat(value3.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2);

    const total = parseFloat(cleanvalorbebida) + parseFloat(cleanvalorprato) + parseFloat(cleanvalorsobremesa);
   
    const totalclean = total.toFixed(2);

    let mensagem = `Olá, gostaria de fazer o pedido: \n- Prato:${nomeprato.innerHTML} \n- Bebida: ${nomebebida.innerHTML} \n- Sobremesa: ${nomesobremesa.innerHTML} \n Total: R$ ${totalclean}`;
    window.location.href = `https://wa.me/5547991329945?text=${encodeURIComponent(mensagem)}`
    
}


