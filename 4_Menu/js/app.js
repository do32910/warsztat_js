document.addEventListener("DOMContentLoaded", function(){
    var listEl = document.querySelectorAll(".nav li");

    for(var i=0; i<listEl.length; i++){
        listEl[i].addEventListener('mouseover', function(){
            if(this.querySelector('ul')){
                this.querySelector('ul').style.display = "block";
            }

        });

        listEl[i].addEventListener('mouseout', function(){
            if(this.querySelector('ul')){
                this.querySelector('ul').style.display = "none";
            }
        });
    }
});