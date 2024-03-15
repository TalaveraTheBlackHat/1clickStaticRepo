// console.log(image)
var index=0;
var name="prueba";
var image="1.jpg";
productElement = `
    <div id="product-container-`+index+`" class="product-container col-xs-6 col-sm-4 col-md-4 col-lg-2">
        <img src="images/ICONOS_V2/`+image+`" class="products-click hover" data-pdf=`+name+`>
        <div class="light-i text-uppercase">`+name+`</div>
    </div>
`;

$(productsWrapper).append(productElement);

// responsive carousel
productElementResp = `
    <div class="product-wrapper col-xs-6 col-sm-4 centered-content">
        <img src="images/ICONOS_V2/`+image+`" class="products-click hover" data-pdf=`+name+`>
        <div class="light-i text-uppercase">`+name+`</div>
    </div>
`;

if (index % 6 == 0) {
    if (index == 0) {
        carouselItemWrapper = `
            <div id="product-container-`+index+`" class="item active">
                <div class="container">
                    <div class="row">
                        <!-- filled in main.js products -->
                    </div>
                </div>
            </div>
        `    
    } else {
        carouselItemWrapper = `
            <div id="product-container-`+index+`" class="item">
                <div class="container">
                    <div class="row">
                        <!-- filled in main.js products -->
                    </div>
                </div>
            </div>
        `                                
    }
    carouselWrapper.append(carouselItemWrapper);
    productsWrapperResp = $('#product-container-'+index+' .row');
} 

$(productsWrapperResp).append(productElementResp);



    

    

    // $("#product0").mouseover(function(){
    //     $("#product0").attr('src', 'images/ICONOS_BLANCOS/ICONO-1.png');
    // });

    // $(".hover").hover(function(){
    //     var current_src = $(this).attr('src');
    //     var img_name = current_src.split("/");
    //     var new_src = 'images/';
    //     var MouseIn = current_src.indexOf('BLANCOS') > -1;
    //     if ($(this).hasClass("products-click")) {
    //         new_src += MouseIn ? 'ICONOS/' : 'ICONOS_BLANCOS/';
    //     }
    //     else {
    //         new_src += MouseIn ? 'NUESTROS_PRODUCTOS/' : 'NUESTROS_PRODUCTOS_BLANCOS/';    
    //     }
    //     new_src += img_name[img_name.length-1];
    //     $(this).attr('src', new_src);
    // });

    // $("#chestertips").on("click", function(){
    //     var windowWidth = $(window).width();
    //     console.log(windowWidth);
    //     if(windowWidth <= 784){
    //         $(this).css({width:windowWidth});
    //     }
    //     else{
    //         $(this).css({width:windowWidth/2});
    //     }
    // });

    var imgResize = function(imgClass){
        var images = document.querySelectorAll(imgClass);
        var screenwidth = $(window).width();
        var screenheight = $(window).height();
        if ((screenheight) < 600){
            screenheight = 600
        }
        else{
            screenheight = $(window).height()
        }


        images.forEach(function(image){
            var imgwidth = $(image).width();
            var imgheight = $(image).height();
            var ratio = (imgwidth / imgheight);
            var newCSS = {}
            if (screenwidth >= (screenheight)*ratio ){
                newCSS = {
                    width: "100%",
                    height: "auto"
                };
            }
            else{
                newCSS = {
                    width: "auto",
                    height: "100%"
                };
            }
            $(image).css(newCSS);
        });
    };

    imgResize(".resize");

    $(window).resize(function(){
        imgResize(".resize");      
    });

    setTimeout(imgResize(".resize"), 1000);
    setTimeout(imgResize(".resize"), 2000);
    setTimeout(imgResize(".resize"), 3000);
    setTimeout(imgResize(".resize"), 4000);
    setTimeout(imgResize(".resize"), 5000);
    setTimeout(imgResize(".resize"), 6000);
    setTimeout(imgResize(".resize"), 7000);
    setTimeout(imgResize(".resize"), 8000);
    setTimeout(imgResize(".resize"), 9000);
    setTimeout(imgResize(".resize"), 10000);
    setTimeout(imgResize(".resize"), 11000);
    setTimeout(imgResize(".resize"), 12000);
    setTimeout(imgResize(".resize"), 13000);
    setTimeout(imgResize(".resize"), 14000);
    setTimeout(imgResize(".resize"), 15000);

	/*const mq = window.matchMedia( "(min-width: 768px)" );

	if (mq.matches) {
		console.log('whut');
  		$("#mobile-nav .navbar-nav").css('display', 'none !important');
  	}*/

