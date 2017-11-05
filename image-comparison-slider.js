(function() {

    var elsH = document.querySelectorAll(".image-spliter .mover");
    var i = elsH.length;
    while (i--) {
        var moverWidth = elsH[i].getBoundingClientRect().width;
        var imgLeft = elsH[i].nextElementSibling;
        var width = imgLeft.getBoundingClientRect().width;
        var height = imgLeft.getBoundingClientRect().height;
        elsH[i].style.left = width / 2 - moverWidth / 2 + 'px';
        //imgLeft.style.clip = "rect(0px, " + width / 2 + "px, " + height + "px, 0px)";
        imgLeft.style.clip = "rect(0px, " + width / 2 + "px, 999px, 0px)";
        var mouseDownX = 0;
        var X;
        elsH[i].addEventListener("mousedown", function(e) {
            X = e.clientX;
            mouseDownX = 1;
        });
        elsH[i].addEventListener("mouseup", function(e) {
            mouseDownX = 0;
        });
        elsH[i].addEventListener("mouseout", function(e) {
            mouseDownX = 0;
        });

        elsH[i].addEventListener("touchstart", function(e) {
            X = e.touches[0].clientX;
            mouseDownX = 1;
        });
        elsH[i].addEventListener("touchend", function(e) {
            mouseDownX = 0;
        });

        elsH[i].addEventListener("mousemove", function(e) {
            if (mouseDownX) {
                this.style.left = parseInt(this.style.left) + (event.clientX - X) + "px";
                X = event.clientX;
                this.nextElementSibling.style.clip = "rect(0px, " + (this.getBoundingClientRect().width / 2 + parseInt(this.style.left)) + "px, " + this.getBoundingClientRect().height + "px, 0px)";
            }
        });

        elsH[i].addEventListener("touchmove", function(e) {
            if (mouseDownX) {
                this.style.left = parseInt(this.style.left) + (e.touches[0].clientX - X) + "px";
                X = e.touches[0].clientX;
                this.nextElementSibling.style.clip = "rect(0px, " + (this.getBoundingClientRect().width / 2 + parseInt(this.style.left)) + "px, " + this.getBoundingClientRect().height + "px, 0px)";
            }
        });

    }


    window.addEventListener("resize", function(f) {
        var elsHre = document.querySelectorAll(".image-spliter .mover");
        var ii = elsHre.length;
        while (ii--) {
            var moverWidth = elsHre[ii].getBoundingClientRect().width;
            var imgLeft = elsHre[ii].nextElementSibling;
            var width = imgLeft.getBoundingClientRect().width;
            var height = imgLeft.getBoundingClientRect().height;
            elsHre[ii].style.left = width / 2 - moverWidth / 2 + 'px';
            imgLeft.style.clip = "rect(0px, " + width / 2 + "px, " + height + "px, 0px)";
        }
    });

})();
