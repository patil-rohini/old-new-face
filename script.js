document.addEventListener('DOMContentLoaded', function(){ 

    var img = document.getElementById("image-area");
    const youngImage = document.getElementById("young");
    const oldImage = document.getElementById("old");

    youngImage.onclick = function () {
        img.src = "young.jpg";
    }

    oldImage.onclick = function () {
        img.src = "old.jpg";
    }

    // function young() {
    //     img.src = "./sujan-new.jpg";
        
    // }

    // function old() {
    //     img.src = "./sujan-old.jpg"
        
    // }

});