/*
 <span class="tooltipText">Text tooltipa</span>
 */


document.addEventListener("DOMContentLoaded", function(){
    var tooltips = document.querySelectorAll('.tooltip');
    for(var i=0; i<tooltips.length; i++){
        tooltips[i].addEventListener('mouseover', function(){
            var newSpan = document.createElement('span');
            newSpan.classList.add('tooltipText');
            newSpan.innerText = this.dataset.text;
            this.appendChild(newSpan);
        });
        tooltips[i].addEventListener('mouseout', function(){
            var toRemove = this.querySelector('.tooltipText');
            this.removeChild(toRemove);
        });
    }
});