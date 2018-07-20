document.addEventListener("DOMContentLoaded", function(){
    var imgEl = document.querySelectorAll('#gallery img');
    var images = [];
    for(var i=0; i<imgEl.length; i++){
        images[i] = imgEl[i];
    }
    var hideBtn = document.querySelector('#hideButton');
    var showBtn = document.querySelector('#showButton');
    var tagInput = document.querySelector('#tagInput');

    hideBtn.addEventListener("click", function(){
        var inputVal = tagInput.value;
        tagInput.value = '';

        for(var i=0; i<images.length; i++){
            var tagsList = images[i].dataset.tag.split(',');
            // console.log(tagsList);
            for(var j=0; j<tagsList.length; j++){
                if(tagsList[j] === inputVal){
                    images[i].classList.add('invisible');
                }    
            }
        }
    });


    showBtn.addEventListener("click", function(){
        var inputVal = tagInput.value;
        tagInput.value = '';

        for(var i=0; i<images.length; i++){
            var tagsList = images[i].dataset.tag.split(',');
            // console.log(tagsList);
            for(var j=0; j<tagsList.length; j++){
                if(tagsList[j] === inputVal){
                    images[i].classList.remove('invisible');
                }    
            }
        }
    });
});