(function() {
    // Função para verificar se os campos esrtão vazios e mostrar um alert na tela, o metodo PREVENTDEFAULT serve para previnir o comportamento padrão, ou seja o envio do formulário 
    const textoInput = document.querySelector('#nome')
    const formulario = document.querySelector('.formulario')
    
    
    formulario.addEventListener('submit', function(e) {
        if(textoInput.value ===""){ 
            showErrorMessage('Prencha todos os campos')
            textoInput.focus()
        }
        e.preventDefault() /*Previne o comportamento padrão*/
    })

    // Função para mostrar a mensagem na tela

    const feedbackMessage = document.querySelector('#feedbackMessage')
    const mensageErro = document.getElementsByTagName('p')[0]
    const closeBtn = document.querySelector('#close')
    console.log(closeBtn)

    function showErrorMessage(msg) {
        feedbackMessage.classList.add('show')
        mensageErro.textContent = msg

        // Função para fechar a mensagem de erro
        function hideErrorMessage() {
            feedbackMessage.classList.remove('show')
            closeBtn.removeEventListener('click', hideErrorMessage)
            closeBtn.removeEventListener('keyup', fecharComEsc)
        }

        function fecharComEsc(e) {
            if(e.keyCode === 27) {
                hideErrorMessage()
            }
        }

        closeBtn.addEventListener('click', hideErrorMessage)
        closeBtn.addEventListener('keyup', fecharComEsc)
    }

    

    

    // Função para cálculo dos caracters digitados no textarea
    const contadorStrings = document.querySelector('.contadorStrings span')
    const contentContador = document.querySelector('.contadorStrings')
    const textArea = document.querySelector('textarea')
    let maxima = textArea.maxLength
    mostrarValor(maxima)
  
    
    textArea.addEventListener('input', e => {
        let letrasDigitadas = textArea.value.length
        let caractersRestantes = parseInt(maxima) - parseFloat(letrasDigitadas)
        mostrarValor(caractersRestantes)
    })

    function mostrarValor(n) {
        contadorStrings.textContent = n
    }

    // função para habilitar o botão se submit

    const botao = document.querySelector('#btn')
    const aceitarTermos = document.querySelector('#aceitarTermos')

    botao.disabled = true

    aceitarTermos.addEventListener('change', function() {
        // botao.disabled = !this.checked
        aceitarTermos.checked == true ? botao.disabled = false : botao.disabled = true
    })

    
})()