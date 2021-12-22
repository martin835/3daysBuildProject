
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

const getContent = function () {
        let parent = document.getElementById('mcard-parent')
        let imgUrl = 'assets\\image1.png'
        let avatarUrl = 'assets\\avatar.png'
        let card = `
        <div class="row  mcard mb-5"> 
        <div class="mcard-content col-8">
            <div class="author">
              <a href="">
                  <img src="${avatarUrl}" alt="author" class="author-avatar">
                  <span class="author-text ml-1">Astroport</span>
                </a>
                <a href="">
                  <h2 class="mt-2">Olympus DAO and other Rebase Tokens. Failed experiment or opportunity of a lifetime?</h2>
                  <p>A good API architecture is important in effectively handling the communication between microservices. Don\'t be afraid to create new microservices, and try to decouple functionality as much as possible. </p>
                </a>
              </div>
              <div class="mcard-tags d-flex justify-content-between  ">
                <div class="mcard-tags-left align-self-center">
                  <span>Aug 28</span>
                  <i class="bi bi-dot"></i>
                  <span>6 min read</span>
                  <i class="bi bi-dot d552"></i>
                  <span class="mtag d552">Telegram Bot</span>
                  <i class="bi bi-dot d552"></i>
                  <span class="d552">Popular on Medium</span>
                  <i class="bi bi-star-fill d552"></i>
                </div>
                <div class="mcard-tags-right">
                  <i class="bi bi-bookmark-plus"></i>
                  <i class="bi bi-three-dots"></i>
                </div>
              </div>
         </div>
        <div class="mcard-img col-4">
          <img src="${imgUrl}" class="" alt=""card image>
        </div>
  </div>
        `;

        for (let i = 0; i < 10; i++) {
                parent.innerHTML += card
                
        }
}

window.onload = function () {
        getContent()
}

