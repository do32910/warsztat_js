document.addEventListener("DOMContentLoaded", function(){
  var lisEl = document.querySelectorAll('.gallery li');
  var lis = [];
  for(var i=0; i<lisEl.length; i++){
    lis.push(lisEl[i]);
  }
  var body = document.querySelector('body');

  var images = [];
  for(var i=0; i<lis.length; i++){
    images[i] = lis[i].querySelector('img');
    images[i].addEventListener('click', function(){
      var imgSrc = this.getAttribute('src');
      var fullScreenDiv = document.createElement("div");
      fullScreenDiv.classList.add('fullScreen');
      var fullScreenImg = document.createElement("img");
      fullScreenImg.setAttribute('src', imgSrc);
      var fullScreenBtn = document.createElement("button");
      fullScreenBtn.classList.add('close');
      fullScreenBtn.innerHTML = "Close";

      fullScreenDiv.appendChild(fullScreenImg);
      fullScreenDiv.appendChild(fullScreenBtn);

      body.appendChild(fullScreenDiv);

      fullScreenBtn.addEventListener('click', function(){
        body.removeChild(fullScreenDiv);
      });

    });

  }


  
});

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
