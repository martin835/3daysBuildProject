
const showInput = function () {
        let mq = window.matchMedia( "(max-width: 904px)" );
        if (mq.matches) {
                // window width is at less than 904px
                let inputContainer = document.getElementById("container-input-mobile")
                inputContainer.classList.toggle('show-mobile-search')
                document.getElementById('main-container').classList.toggle('hide-main-container')
                
        }
        else {
                // window width is greater than 904px
                let inputFieldDiv = document.querySelector('.input-div')
                let inputField = document.querySelector('.input-div input')         
                inputFieldDiv.classList.toggle('slideleft')
                inputField.classList.toggle('hidden-input')        
                inputField.focus()
        }        
}

