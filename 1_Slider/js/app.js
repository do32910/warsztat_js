document.addEventListener("DOMContentLoaded", function(){
    var index = 0;
    var nextBtn = document.getElementById('nextPicture');
    var prevBtn = document.getElementById('prevPicture');
    var imagesEl = document.querySelectorAll('.slider li');
    var images = [];
    
    for(var i=0; i<imagesEl.length; i++){
        images[i] = imagesEl[i]; 
    }
    images[0].classList.add('visible');
    
    nextBtn.addEventListener('click', function(){
        
        images[index].classList.remove('visible');
        index++;
        if(index >= images.length){
                index=0;
        }
        images[index].classList.add('visible');
        
    });
    
    prevBtn.addEventListener('click', function(){
        images[index].classList.remove('visible');
        index--;
        if(index === -1){
            index = images.length-1;
        }
        images[index].classList.add('visible');
        
    });
});