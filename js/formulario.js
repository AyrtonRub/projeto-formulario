(function() {
    const textoInput = document.querySelector('#nome')
    const formulario = document.querySelector('.formulario')
    
    formulario.addEventListener('submit', function(e) {
        if(!textoInput.value){ 
            alert('digite um valor')
            textoInput.focus()
        }
        
        e.preventDefault()
    })
})()