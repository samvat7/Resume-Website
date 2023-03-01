var navMenuAnchorTags = document.querySelectorAll('#body-header a');

for(var i=0; i<navMenuAnchorTags.length;i++){

    navMenuAnchorTags[i].addEventListener('click', function(event){

        event.preventDefault();

        var targetSectionID = this.textContent.trim().toLowerCase();

        var targetSection = document.getElementById(targetSectionID);

        var interval = setInterval(function(){

            var targetSectionCoordinates = targetSection.getBoundingClientRect();

            if(targetSectionCoordinates.top <=0){

                clearInterval(interval);
                return;
            }

            window.scrollBy(0,50);

        },50);


    });
}



// var expBtn = document.getElementById('nav-exp-btn');

// expBtn.addEventListener('click', function(){
    
//     window.scrollTo(0, 800);

//     var curPos = 0;

//     var targetPos = 18000;

//     var scrollInterval = setInterval(function(){

//         if(curPos>=targetPos){
    
//             clearInterval(scrollInterval);
//             return;
//         }
    
//         curPos += 50;
    
//         window.scrollBy(0, 50);
//     }, 35);

// });



