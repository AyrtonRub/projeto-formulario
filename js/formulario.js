(function() {
    // Função para verificar se os campos esrtão vazios e mostrar um alert na tela, o metodo PREVENTDEFAULT serve para previnir o comportamento padrão, ou seja o envio do formulário 
    const textoInput = document.querySelector('#nome')
    const formulario = document.querySelector('.formulario')
    
    
    formulario.addEventListener('submit', function(e) {
        if(textoInput.value ===""){ 
            alert('digite um valor')
            textoInput.focus()
        }
        e.preventDefault() /*Previne o comportamento padrão*/
    })

    // Função para cálculo dos caracters digitados no textarea
    const contadorStrings = document.querySelector('.contadorStrings span')
    const contentContador = document.querySelector('.contadorStrings')
    const textArea = document.querySelector('textarea')
    let maxima = textArea.maxLength
    contadorStrings.textContent = maxima
  
    
    textArea.addEventListener('input', e => {
        let letrasDigitadas = textArea.value.length
        let caractersRestantes = parseInt(maxima) - parseFloat(letrasDigitadas)
        contadorStrings.textContent = caractersRestantes
    })

    // função para habilitar o botão se submit

    const botao = document.querySelector('#btn')
    const aceitarTermos = document.querySelector('#aceitarTermos')

    botao.disabled = true

    aceitarTermos.addEventListener('change', function() {
        // botao.disabled = !this.checked
        aceitarTermos.checked == true ? botao.disabled = false : botao.disabled = true
    })

    
})()