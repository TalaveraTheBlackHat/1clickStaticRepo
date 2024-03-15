// window.addEventListener("beforeunload", (evento) => {
//   if (true) {
//     evento.preventDefault();
//     evento.returnValue = "";
//     return "";
//   }
// });
$(document).ready(function(){ irArriba(); }); //Hacia arriba

function irArriba(){
  $('.irArriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.irArriba').slideDown(600); }else{ $('.irArriba').slideUp(600); }
  });
  
}

var allContainerCart = document.querySelector('.contenedorInterno');
var cardProduct = document.querySelector('.box-card');
var i=0;
var k=0;
var ciclo=0;
var Pagina1=0;
var Pagina2=0;
var Pagina3=0;
var Pagina4=0;
var Pagina5=0;
var cantProductos=0;
var botonAnadir="";
var botonComprar="";

$.ajax({
  type: 'GET',
  url: '../productos/belleza',
  success: function(productos) {

    // EXTRACCION DE ID DEL USUARIO DESDE LA URL (POR PARAMETROS)
    var URLactual = window.location;
    var URLstring = Object.values(URLactual);
    URLstring = URLstring[1];
    longString = URLstring.length - 1;
    var cont=0;
    var inicio = "";
    var idUser = "";
    var botonAnadir = "";
    var botonComprar = "";

    for (let i = longString; i > 0; i--) {
      if((URLstring[i] === "/") && (cont === 0)){
        cont=1;
        inicio=i;
      }
    }
    
    if(inicio){
      idUser = URLstring.slice(inicio+1,);
    }
    // END EXTRACCION DE ID DEL USUARIO

  var cant=productos[1];
  localStorage.setItem("cantProductos",cant);
  cantProductos=localStorage.getItem("cantProductos");

    if(cantProductos<23){ 
      for (i = 0; i < cantProductos; i++) {
        var valoracion1 = '';
        var valoracion2 = '';
        var valoracion3 = '';
        var valoracion4 = '';
        var valoracion5 = '';
        if(productos[0][i].valoracion === 1){
          valoracion1 = 'checked=""';
        }else if(productos[0][i].valoracion === 2){
          valoracion2 = 'checked=""';
        }else if(productos[0][i].valoracion === 3){
          valoracion3 = 'checked=""';
        }else if(productos[0][i].valoracion === 4){
          valoracion4 = 'checked=""';
        }else if(productos[0][i].valoracion === 5){
          valoracion5 = 'checked=""';
        }else{
          valoracion1 = '';
          valoracion2 = '';
          valoracion3 = '';
          valoracion4 = '';
          valoracion5 = '';
        }

        if(idUser){
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }else{
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }
        const enviar = productos[0][i].id;
        const row = document.createElement('div');
        row.classList.add('box-card');
        row.setAttribute("id", i);
        row.innerHTML = `<div class="card">
        <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[0][i].img_producto+`" alt=""></a></div>
        <div class="card__title">`+productos[0][i].descripcion+`</div>
        <div class="card__valoracion">
        <div class="rating">
        <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
        <label title="text" for="star5"></label>
        <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
        <label title="text" for="star4"></label>
        <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
        <label title="text" for="star3"></label>
        <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
        <label title="text" for="star2"></label>
        <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
        <label title="text" for="star1"></label>
      </div>
        </div>
        <div class="card__precio">`+productos[0][i].precio_unitario+"$"+`</div>
        
        `+botonAnadir+`
      `+botonComprar+`
        
    </div>
    </div>
          `;
    
        allContainerCart.appendChild(row);
        document.getElementById("cargarPagina1").className ="pagActiva";
      }
    }else{ 
      for (i = 0; i < 23; i++) {
        var valoracion1 = '';
        var valoracion2 = '';
        var valoracion3 = '';
        var valoracion4 = '';
        var valoracion5 = '';
        if(productos[0][i].valoracion === 1){
         valoracion1 = 'checked=""';
        }else if(productos[0][i].valoracion === 2){
         valoracion2 = 'checked=""';
        }else if(productos[0][i].valoracion === 3){
         valoracion3 = 'checked=""';
        }else if(productos[0][i].valoracion === 4){
         valoracion4 = 'checked=""';
        }else if(productos[0][i].valoracion === 5){
         valoracion5 = 'checked=""';
        }else{
          valoracion1 = '';
          valoracion2 = '';
          valoracion3 = '';
          valoracion4 = '';
          valoracion5 = '';
        }

        if(idUser){
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }else{
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }
        const enviar = productos[0][i].id;
        const row = document.createElement('div');
        row.classList.add('box-card');
        row.setAttribute("id", i);
        row.innerHTML = `<div class="card">
        <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[0][i].img_producto+`" alt=""></a></div>
        <div class="card__title">`+productos[0][i].descripcion+`</div>
        <div class="card__valoracion">
          <div class="rating">
            <input value="5" name="rate" id="star5" type="radio" checked="">
            <label title="text" for="star5"></label>
            <input value="4" name="rate" id="star4" type="radio" >
            <label title="text" for="star4"></label>
            <input value="3" name="rate" id="star3" type="radio" >
            <label title="text" for="star3"></label>
            <input value="2" name="rate" id="star2" type="radio">
            <label title="text" for="star2"></label>
            <input value="1" name="rate" id="star1" type="radio">
            <label title="text" for="star1"></label>
          </div>
        </div>
        <div class="card__precio">`+productos[0][i].precio_unitario+"$"+`</div>
        
        `+botonAnadir+`
      `+botonComprar+`
        
    </div>
    </div>
          `;
    
        allContainerCart.appendChild(row);
        document.getElementById("cargarPagina1").className ="pagActiva";
      }
      
    }
    localStorage.setItem("cantPagina1",k);
    Pagina1 = localStorage.getItem("cantPagina1");
}

});



function cargarPagina1(){
  $.ajax({
  type: 'GET',
  url: '../productos/belleza',
  success: function(productos) {

    // EXTRACCION DE ID DEL USUARIO DESDE LA URL (POR PARAMETROS)
    var URLactual = window.location;
    var URLstring = Object.values(URLactual);
    URLstring = URLstring[1];
    longString = URLstring.length - 1;
    var cont=0;
    var inicio = "";
    var idUser = "";
    var botonAnadir = "";
    var botonComprar = "";

    for (let i = longString; i > 0; i--) {
      if((URLstring[i] === "/") && (cont === 0)){
        cont=1;
        inicio=i;
      }
    }
    
    if(inicio){
      idUser = URLstring.slice(inicio+1,);
    }
    // END EXTRACCION DE ID DEL USUARIO
    var cant=productos[1];
    localStorage.setItem("cantProductos",cant);
    cantProductos=localStorage.getItem("cantProductos");

  for (k = 0; k < cantProductos; k++) {
    var ides=document.getElementById(k);
    if(ides){
      var parent = ides.parentElement;
      parent.removeChild(ides); 
    }
  }
  if(cantProductos<23){  
  for (i = 0; i < cantProductos; i++) {
    var valoracion1 = '';
        var valoracion2 = '';
        var valoracion3 = '';
        var valoracion4 = '';
        var valoracion5 = '';
        if(productos[0][i].valoracion === 1){
          valoracion1 = 'checked=""';
        }else if(productos[0][i].valoracion === 2){
          valoracion2 = 'checked=""';
        }else if(productos[0][i].valoracion === 3){
          valoracion3 = 'checked=""';
        }else if(productos[0][i].valoracion === 4){
          valoracion4 = 'checked=""';
        }else if(productos[0][i].valoracion === 5){
          valoracion5 = 'checked=""';
        }else{
          valoracion1 = '';
          valoracion2 = '';
          valoracion3 = '';
          valoracion4 = '';
          valoracion5 = '';
        }

        if(idUser){
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }else{
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }
        const enviar = productos[0][i].id;
    const row = document.createElement('div');
        row.classList.add('box-card');
        row.setAttribute("id", i);
        row.innerHTML = `<div class="card">
        <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[0][i].img_producto+`" alt=""></a></div>
        <div class="card__title">`+productos[0][i].descripcion+`</div>
        <div class="card__valoracion">
        <div class="rating">
        <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
        <label title="text" for="star5"></label>
        <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
        <label title="text" for="star4"></label>
        <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
        <label title="text" for="star3"></label>
        <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
        <label title="text" for="star2"></label>
        <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
        <label title="text" for="star1"></label>
      </div>
        </div>
        <div class="card__precio">`+productos[0][i].precio_unitario+"$"+`</div>
        
        `+botonAnadir+`
      `+botonComprar+`
        
    </div>
    </div>
    `;


    allContainerCart.appendChild(row);
    document.getElementById("cargarPagina1").className ="pagActiva";
    document.getElementById("cargarPagina2").className ="";
    document.getElementById("cargarPagina3").className ="";
    document.getElementById("cargarPagina4").className ="";
    document.getElementById("cargarPagina5").className ="";
  }
  }else{  
  for (i = 0; i < 23; i++) {
    var valoracion1 = '';
        var valoracion2 = '';
        var valoracion3 = '';
        var valoracion4 = '';
        var valoracion5 = '';
        if(productos[0][i].valoracion === 1){
          valoracion1 = 'checked=""';
        }else if(productos[0][i].valoracion === 2){
          valoracion2 = 'checked=""';
        }else if(productos[0][i].valoracion === 3){
          valoracion3 = 'checked=""';
        }else if(productos[0][i].valoracion === 4){
          valoracion4 = 'checked=""';
        }else if(productos[0][i].valoracion === 5){
          valoracion5 = 'checked=""';
        }else{
          valoracion1 = '';
          valoracion2 = '';
          valoracion3 = '';
          valoracion4 = '';
          valoracion5 = '';
        }

        if(idUser){
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }else{
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }
        const enviar = productos[0][i].id;    
        const row = document.createElement('div');
        row.classList.add('box-card');
        row.setAttribute("id", i);
        row.innerHTML = `<div class="card">
        <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[0][i].img_producto+`" alt=""></a></div>
        <div class="card__title">`+productos[0][i].descripcion+`</div>
        <div class="card__valoracion">
          <div class="rating">
            <input value="5" name="rate" id="star5" type="radio" checked="">
            <label title="text" for="star5"></label>
            <input value="4" name="rate" id="star4" type="radio" >
            <label title="text" for="star4"></label>
            <input value="3" name="rate" id="star3" type="radio" >
            <label title="text" for="star3"></label>
            <input value="2" name="rate" id="star2" type="radio">
            <label title="text" for="star2"></label>
            <input value="1" name="rate" id="star1" type="radio">
            <label title="text" for="star1"></label>
          </div>
        </div>
        <div class="card__precio">`+productos[0][i].precio_unitario+"$"+`</div>
        
        `+botonAnadir+`
      `+botonComprar+`
        
    </div>
    </div>
    `;


    allContainerCart.appendChild(row);
    document.getElementById("cargarPagina1").className ="pagActiva";
    document.getElementById("cargarPagina2").className ="";
    document.getElementById("cargarPagina3").className ="";
    document.getElementById("cargarPagina4").className ="";
    document.getElementById("cargarPagina5").className ="";
  }
  }
  }
});

};


function cargarPagina2(){
  $.ajax({
    type: 'GET',
    url: '../productos/belleza',
    success: function(productos) {

      // EXTRACCION DE ID DEL USUARIO DESDE LA URL (POR PARAMETROS)
    var URLactual = window.location;
    var URLstring = Object.values(URLactual);
    URLstring = URLstring[1];
    longString = URLstring.length - 1;
    var cont=0;
    var inicio = "";
    var idUser = "";
    var botonAnadir = "";
    var botonComprar = "";

    for (let i = longString; i > 0; i--) {
      if((URLstring[i] === "/") && (cont === 0)){
        cont=1;
        inicio=i;
      }
    }
    
    if(inicio){
      idUser = URLstring.slice(inicio+1,);
    }
    // END EXTRACCION DE ID DEL USUARIO
      var cant=productos[1];
      localStorage.setItem("cantProductos",cant);
      cantProductos=localStorage.getItem("cantProductos");

  if(cantProductos>23){
  for (k = 0; k < cantProductos; k++) {
    var ides=document.getElementById(k);
    if(ides){
    var parent = ides.parentElement;
    parent.removeChild(ides);
    }
  }
  if(cantProductos<46){
    for (i = 23; i < cantProductos; i++) {
      var valoracion1 = '';
        var valoracion2 = '';
        var valoracion3 = '';
        var valoracion4 = '';
        var valoracion5 = '';
        if(productos[0][i].valoracion === 1){
          valoracion1 = 'checked=""';
        }else if(productos[0][i].valoracion === 2){
          valoracion2 = 'checked=""';
        }else if(productos[0][i].valoracion === 3){
          valoracion3 = 'checked=""';
        }else if(productos[0][i].valoracion === 4){
          valoracion4 = 'checked=""';
        }else if(productos[0][i].valoracion === 5){
          valoracion5 = 'checked=""';
        }else{
          valoracion1 = '';
          valoracion2 = '';
          valoracion3 = '';
          valoracion4 = '';
          valoracion5 = '';
        }

        if(idUser){
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }else{
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }
        const enviar = productos[0][i].id;
      const row = document.createElement('div');
      row.classList.add('box-card');
      row.setAttribute("id", i);
      row.innerHTML = `<div class="card">
      <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[0][i].img_producto+`" alt=""></a></div>
      <div class="card__title">`+productos[0][i].descripcion+`</div>
      <div class="card__valoracion">
      <div class="rating">
      <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
      <label title="text" for="star5"></label>
      <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
      <label title="text" for="star4"></label>
      <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
      <label title="text" for="star3"></label>
      <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
      <label title="text" for="star2"></label>
      <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
      <label title="text" for="star1"></label>
      </div>
      </div>
      <div class="card__precio">`+productos[0][i].precio_unitario+"$"+`</div>
      
      `+botonAnadir+`
      `+botonComprar+`
      
      </div>
      </div>
      `;


         allContainerCart.appendChild(row);
         document.getElementById("cargarPagina1").className ="";
         document.getElementById("cargarPagina2").className ="pagActiva";
         document.getElementById("cargarPagina3").className ="";
         document.getElementById("cargarPagina4").className ="";
         document.getElementById("cargarPagina5").className ="";        
  }}
  else{
      for (i = 23; i < 46; i++) {
        var valoracion1 = '';
        var valoracion2 = '';
        var valoracion3 = '';
        var valoracion4 = '';
        var valoracion5 = '';
        if(productos[0][i].valoracion === 1){
          valoracion1 = 'checked=""';
        }else if(productos[0][i].valoracion === 2){
          valoracion2 = 'checked=""';
        }else if(productos[0][i].valoracion === 3){
          valoracion3 = 'checked=""';
        }else if(productos[0][i].valoracion === 4){
          valoracion4 = 'checked=""';
        }else if(productos[0][i].valoracion === 5){
          valoracion5 = 'checked=""';
        }else{
          valoracion1 = '';
          valoracion2 = '';
          valoracion3 = '';
          valoracion4 = '';
          valoracion5 = '';
        }

        if(idUser){
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }else{
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }
        const enviar = productos[0][i].id;
        const row = document.createElement('div');
        row.classList.add('box-card');
        row.setAttribute("id", i);
        row.innerHTML = `<div class="card">
        <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[0][i].img_producto+`" alt=""></a></div>
        <div class="card__title">`+productos[0][i].descripcion+`</div>
        <div class="card__valoracion">
        <div class="rating">
        <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
        <label title="text" for="star5"></label>
        <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
        <label title="text" for="star4"></label>
        <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
        <label title="text" for="star3"></label>
        <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
        <label title="text" for="star2"></label>
        <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
        <label title="text" for="star1"></label>
        </div>
        </div>
        <div class="card__precio">`+productos[0][i].precio_unitario+"$"+`</div>
        
        `+botonAnadir+`
      `+botonComprar+`
        
        </div>
        </div>
        `;

         allContainerCart.appendChild(row);
         document.getElementById("cargarPagina1").className ="";
         document.getElementById("cargarPagina2").className ="pagActiva";
         document.getElementById("cargarPagina3").className ="";
         document.getElementById("cargarPagina4").className ="";
         document.getElementById("cargarPagina5").className ="";        
  }
  }
    localStorage.setItem("cantPagina2",i);
    Pagina2 = localStorage.getItem("cantPagina2");
    event.preventDefault();
  }

  event.preventDefault();

}
});

};


function cargarPagina3(){
  $.ajax({
    type: 'GET',
    url: '../productos/belleza',
    success: function(productos) {

      // EXTRACCION DE ID DEL USUARIO DESDE LA URL (POR PARAMETROS)
    var URLactual = window.location;
    var URLstring = Object.values(URLactual);
    URLstring = URLstring[1];
    longString = URLstring.length - 1;
    var cont=0;
    var inicio = "";
    var idUser = "";
    var botonAnadir = "";
    var botonComprar = "";

    for (let i = longString; i > 0; i--) {
      if((URLstring[i] === "/") && (cont === 0)){
        cont=1;
        inicio=i;
      }
    }
    
    if(inicio){
      idUser = URLstring.slice(inicio+1,);
    }
    // END EXTRACCION DE ID DEL USUARIO
      var cant=productos[1];
      localStorage.setItem("cantProductos",cant);
      cantProductos=localStorage.getItem("cantProductos");

  if(cantProductos>46){
    for (k = 0; k < parseInt(cantProductos); k++) {
      var ides=document.getElementById(k);
      if(ides){
      var parent = ides.parentElement;
      parent.removeChild(ides);
    }
  }
  if(cantProductos<69){
    for (i = 46; i < cantProductos; i++) {
      var valoracion1 = '';
        var valoracion2 = '';
        var valoracion3 = '';
        var valoracion4 = '';
        var valoracion5 = '';
        if(productos[0][i].valoracion === 1){
          valoracion1 = 'checked=""';
        }else if(productos[0][i].valoracion === 2){
          valoracion2 = 'checked=""';
        }else if(productos[0][i].valoracion === 3){
          valoracion3 = 'checked=""';
        }else if(productos[0][i].valoracion === 4){
          valoracion4 = 'checked=""';
        }else if(productos[0][i].valoracion === 5){
          valoracion5 = 'checked=""';
        }else{
          valoracion1 = '';
          valoracion2 = '';
          valoracion3 = '';
          valoracion4 = '';
          valoracion5 = '';
        }

        if(idUser){
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }else{
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }
        const enviar = productos[0][i].id;  
      const row = document.createElement('div');
      row.classList.add('box-card');
      row.setAttribute("id", i);
      row.innerHTML = `<div class="card">
      <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[0][i].img_producto+`" alt=""></a></div>
      <div class="card__title">`+productos[0][i].descripcion+`</div>
      <div class="card__valoracion">
      <div class="rating">
      <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
      <label title="text" for="star5"></label>
      <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
      <label title="text" for="star4"></label>
      <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
      <label title="text" for="star3"></label>
      <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
      <label title="text" for="star2"></label>
      <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
      <label title="text" for="star1"></label>
      </div>
      </div>
      <div class="card__precio">`+productos[0][i].precio_unitario+"$"+`</div>
      
      `+botonAnadir+`
      `+botonComprar+`
      
      </div>
      </div>
      `;


         allContainerCart.appendChild(row);
         document.getElementById("cargarPagina1").className ="";
         document.getElementById("cargarPagina2").className ="";
         document.getElementById("cargarPagina3").className ="pagActiva";
         document.getElementById("cargarPagina4").className ="";
         document.getElementById("cargarPagina5").className ="";

    k=i;
    }
  }else{
    for (i = 46; i < 69; i++) {
      var valoracion1 = '';
        var valoracion2 = '';
        var valoracion3 = '';
        var valoracion4 = '';
        var valoracion5 = '';
        if(productos[0][i].valoracion === 1){
          valoracion1 = 'checked=""';
        }else if(productos[0][i].valoracion === 2){
          valoracion2 = 'checked=""';
        }else if(productos[0][i].valoracion === 3){
          valoracion3 = 'checked=""';
        }else if(productos[0][i].valoracion === 4){
          valoracion4 = 'checked=""';
        }else if(productos[0][i].valoracion === 5){
          valoracion5 = 'checked=""';
        }else{
          valoracion1 = '';
          valoracion2 = '';
          valoracion3 = '';
          valoracion4 = '';
          valoracion5 = '';
        }

        if(idUser){
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }else{
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }
        const enviar = productos[0][i].id;  
      const row = document.createElement('div');
      row.classList.add('box-card');
      row.setAttribute("id", i);
      row.innerHTML = `<div class="card">
      <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[0][i].img_producto+`" alt=""></a></div>
      <div class="card__title">`+productos[0][i].descripcion+`</div>
      <div class="card__valoracion">
      <div class="rating">
      <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
      <label title="text" for="star5"></label>
      <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
      <label title="text" for="star4"></label>
      <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
      <label title="text" for="star3"></label>
      <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
      <label title="text" for="star2"></label>
      <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
      <label title="text" for="star1"></label>
      </div>
      </div>
      <div class="card__precio">`+productos[0][i].precio_unitario+"$"+`</div>
      
      `+botonAnadir+`
      `+botonComprar+`
      
      </div>
      </div>
      `;


         allContainerCart.appendChild(row);
         document.getElementById("cargarPagina1").className ="";
         document.getElementById("cargarPagina2").className ="";
         document.getElementById("cargarPagina3").className ="pagActiva";
         document.getElementById("cargarPagina4").className ="";
         document.getElementById("cargarPagina5").className ="";

    k=i;
    }
    }
      localStorage.setItem("cantPagina3",k);
      Pagina3 = localStorage.getItem("cantPagina3");
  }
}
});

};


function cargarPagina4(){
  $.ajax({
    type: 'GET',
    url: '../productos/belleza',
    success: function(productos) {

      // EXTRACCION DE ID DEL USUARIO DESDE LA URL (POR PARAMETROS)
    var URLactual = window.location;
    var URLstring = Object.values(URLactual);
    URLstring = URLstring[1];
    longString = URLstring.length - 1;
    var cont=0;
    var inicio = "";
    var idUser = "";
    var botonAnadir = "";
    var botonComprar = "";

    for (let i = longString; i > 0; i--) {
      if((URLstring[i] === "/") && (cont === 0)){
        cont=1;
        inicio=i;
      }
    }
    
    if(inicio){
      idUser = URLstring.slice(inicio+1,);
    }
    // END EXTRACCION DE ID DEL USUARIO
      var cant=productos[1];
      localStorage.setItem("cantProductos",cant);
      cantProductos=localStorage.getItem("cantProductos");

  if(cantProductos>69){
    for (k = 0; k < parseInt(cantProductos); k++) {
      var ides=document.getElementById(k);
      if(ides){
      var parent = ides.parentElement;
      parent.removeChild(ides);
    }
    }
    if(cantProductos<92){
     for (i = 69; i < cantProductos; i++) {
      var valoracion1 = '';
        var valoracion2 = '';
        var valoracion3 = '';
        var valoracion4 = '';
        var valoracion5 = '';
        if(productos[0][i].valoracion === 1){
          valoracion1 = 'checked=""';
        }else if(productos[0][i].valoracion === 2){
          valoracion2 = 'checked=""';
        }else if(productos[0][i].valoracion === 3){
          valoracion3 = 'checked=""';
        }else if(productos[0][i].valoracion === 4){
          valoracion4 = 'checked=""';
        }else if(productos[0][i].valoracion === 5){
          valoracion5 = 'checked=""';
        }else{
          valoracion1 = '';
          valoracion2 = '';
          valoracion3 = '';
          valoracion4 = '';
          valoracion5 = '';
        }

        if(idUser){
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }else{
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }
        const enviar = productos[0][i].id;  
      const row = document.createElement('div');
      row.classList.add('box-card');
      row.setAttribute("id", i);
      row.innerHTML = `<div class="card">
      <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[0][i].img_producto+`" alt=""></a></div>
      <div class="card__title">`+productos[0][i].descripcion+`</div>
      <div class="card__valoracion">
      <div class="rating">
      <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
      <label title="text" for="star5"></label>
      <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
      <label title="text" for="star4"></label>
      <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
      <label title="text" for="star3"></label>
      <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
      <label title="text" for="star2"></label>
      <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
      <label title="text" for="star1"></label>
      </div>
      </div>
      <div class="card__precio">`+productos[0][i].precio_unitario+"$"+`</div>
      
      `+botonAnadir+`
      `+botonComprar+`
      
      </div>
      </div>
      `;


         allContainerCart.appendChild(row);
         document.getElementById("cargarPagina1").className ="";
         document.getElementById("cargarPagina2").className ="";
         document.getElementById("cargarPagina3").className ="";
         document.getElementById("cargarPagina4").className ="pagActiva";
         document.getElementById("cargarPagina5").className ="";
      k=i;
    }
    }else{
     for (i = 69; i < 92; i++) {
      var valoracion1 = '';
        var valoracion2 = '';
        var valoracion3 = '';
        var valoracion4 = '';
        var valoracion5 = '';
        if(productos[0][i].valoracion === 1){
          valoracion1 = 'checked=""';
        }else if(productos[0][i].valoracion === 2){
          valoracion2 = 'checked=""';
        }else if(productos[0][i].valoracion === 3){
          valoracion3 = 'checked=""';
        }else if(productos[0][i].valoracion === 4){
          valoracion4 = 'checked=""';
        }else if(productos[0][i].valoracion === 5){
          valoracion5 = 'checked=""';
        }else{
          valoracion1 = '';
          valoracion2 = '';
          valoracion3 = '';
          valoracion4 = '';
          valoracion5 = '';
        }

        if(idUser){
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }else{
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }
        const enviar = productos[0][i].id;  
      const row = document.createElement('div');
      row.classList.add('box-card');
      row.setAttribute("id", i);
      row.innerHTML = `<div class="card">
      <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[0][i].img_producto+`" alt=""></a></div>
      <div class="card__title">`+productos[0][i].descripcion+`</div>
      <div class="card__valoracion">
      <div class="rating">
      <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
      <label title="text" for="star5"></label>
      <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
      <label title="text" for="star4"></label>
      <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
      <label title="text" for="star3"></label>
      <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
      <label title="text" for="star2"></label>
      <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
      <label title="text" for="star1"></label>
      </div>
      </div>
      <div class="card__precio">`+productos[0][i].precio_unitario+"$"+`</div>
      
      `+botonAnadir+`
      `+botonComprar+`
      
      </div>
      </div>
      `;


         allContainerCart.appendChild(row);
         document.getElementById("cargarPagina1").className ="";
         document.getElementById("cargarPagina2").className ="";
         document.getElementById("cargarPagina3").className ="";
         document.getElementById("cargarPagina4").className ="pagActiva";
         document.getElementById("cargarPagina5").className ="";
      k=i;
    }
    }
      localStorage.setItem("cantPagina4",k);
      Pagina4 = localStorage.getItem("cantPagina4");
  }
}
});

};


function cargarPagina5(){
  $.ajax({
    type: 'GET',
    url: '../productos/belleza',
    success: function(productos) {

      // EXTRACCION DE ID DEL USUARIO DESDE LA URL (POR PARAMETROS)
    var URLactual = window.location;
    var URLstring = Object.values(URLactual);
    URLstring = URLstring[1];
    longString = URLstring.length - 1;
    var cont=0;
    var inicio = "";
    var idUser = "";
    var botonAnadir = "";
    var botonComprar = "";

    for (let i = longString; i > 0; i--) {
      if((URLstring[i] === "/") && (cont === 0)){
        cont=1;
        inicio=i;
      }
    }
    
    if(inicio){
      idUser = URLstring.slice(inicio+1,);
    }
    // END EXTRACCION DE ID DEL USUARIO
      var cant=productos[1];
      localStorage.setItem("cantProductos",cant);
      cantProductos=localStorage.getItem("cantProductos");

  if(cantProductos>92){
    for (k = 0; k < parseInt(cantProductos); k++) {
      var ides=document.getElementById(k);
      if(ides){
      var parent = ides.parentElement;
      parent.removeChild(ides);
    }
    }
    if(cantProductos<115){
     for (i = 92; i < cantProductos; i++) {
      var valoracion1 = '';
        var valoracion2 = '';
        var valoracion3 = '';
        var valoracion4 = '';
        var valoracion5 = '';
        if(productos[0][i].valoracion === 1){
          valoracion1 = 'checked=""';
        }else if(productos[0][i].valoracion === 2){
          valoracion2 = 'checked=""';
        }else if(productos[0][i].valoracion === 3){
          valoracion3 = 'checked=""';
        }else if(productos[0][i].valoracion === 4){
          valoracion4 = 'checked=""';
        }else if(productos[0][i].valoracion === 5){
          valoracion5 = 'checked=""';
        }else{
          valoracion1 = '';
          valoracion2 = '';
          valoracion3 = '';
          valoracion4 = '';
          valoracion5 = '';
        }

        if(idUser){
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }else{
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }
        const enviar = productos[0][i].id;
      const row = document.createElement('div');
      row.classList.add('box-card');
      row.setAttribute("id", i);
      row.innerHTML = `<div class="card">
      <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[0][i].img_producto+`" alt=""></a></div>
      <div class="card__title">`+productos[0][i].descripcion+`</div>
      <div class="card__valoracion">
      <div class="rating">
      <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
      <label title="text" for="star5"></label>
      <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
      <label title="text" for="star4"></label>
      <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
      <label title="text" for="star3"></label>
      <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
      <label title="text" for="star2"></label>
      <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
      <label title="text" for="star1"></label>
      </div>
      </div>
      <div class="card__precio">`+productos[0][i].precio_unitario+"$"+`</div>
      
      `+botonAnadir+`
      `+botonComprar+`
      
      </div>
      </div>
      `;


         allContainerCart.appendChild(row);
         document.getElementById("cargarPagina1").className ="";
         document.getElementById("cargarPagina2").className ="";
         document.getElementById("cargarPagina3").className ="";
         document.getElementById("cargarPagina4").className ="";
         document.getElementById("cargarPagina5").className ="pagActiva";
      k=i;
    }
    }else{
     for (i = 92; i < 115; i++) {
      var valoracion1 = '';
        var valoracion2 = '';
        var valoracion3 = '';
        var valoracion4 = '';
        var valoracion5 = '';
        if(productos[0][i].valoracion === 1){
          valoracion1 = 'checked=""';
        }else if(productos[0][i].valoracion === 2){
          valoracion2 = 'checked=""';
        }else if(productos[0][i].valoracion === 3){
          valoracion3 = 'checked=""';
        }else if(productos[0][i].valoracion === 4){
          valoracion4 = 'checked=""';
        }else if(productos[0][i].valoracion === 5){
          valoracion5 = 'checked=""';
        }else{
          valoracion1 = '';
          valoracion2 = '';
          valoracion3 = '';
          valoracion4 = '';
          valoracion5 = '';
        }

        if(idUser){
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }else{
          botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[0][i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
          botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
        }
        const enviar = productos[0][i].id;  
      const row = document.createElement('div');
      row.classList.add('box-card');
      row.setAttribute("id", i);
      row.innerHTML = `<div class="card">
      <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[0][i].img_producto+`" alt=""></a></div>
      <div class="card__title">`+productos[0][i].descripcion+`</div>
      <div class="card__valoracion">
      <div class="rating">
      <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
      <label title="text" for="star5"></label>
      <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
      <label title="text" for="star4"></label>
      <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
      <label title="text" for="star3"></label>
      <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
      <label title="text" for="star2"></label>
      <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
      <label title="text" for="star1"></label>
      </div>
      </div>
      <div class="card__precio">`+productos[0][i].precio_unitario+"$"+`</div>
      
      `+botonAnadir+`
      `+botonComprar+`
      
      </div>
      </div>
      `;


         allContainerCart.appendChild(row);
         document.getElementById("cargarPagina1").className ="";
         document.getElementById("cargarPagina2").className ="";
         document.getElementById("cargarPagina3").className ="";
         document.getElementById("cargarPagina4").className ="";
         document.getElementById("cargarPagina5").className ="pagActiva";
      k=i;
    }
    }
      localStorage.setItem("cantPagina5",k);
      Pagina5 = localStorage.getItem("cantPagina5");
  }
}
});

};




// BUSQUEDA FILTRADA


function limpiarVentana(){
  var limpiar=document.getElementsByClassName("box-card");
  if (document.getElementById("paginacion")) {
    document.getElementById("paginacion").remove();
  }
  if (document.getElementById("piedepagina")) {
    document.getElementById("piedepagina").remove();
  }
  
  var cantidadLimpiar = parseInt(limpiar.length);
  for (let i = 0; i < cantidadLimpiar; i++) {
    document.getElementById(i).remove();
  }
}



function filtadoElectrico(dato){
  limpiarVentana();

  if(dato === "electrico"){
    document.getElementById("electrico").title = "on";
    document.getElementById("electrico").style.background="#F26D43";

    document.getElementById("manual").title = "off";
    document.getElementById("manual").style.background="#fff";
    document.getElementById("iluminacion").title = "off";
    document.getElementById("iluminacion").style.background="#fff";
    document.getElementById("automotriz").title = "off";
    document.getElementById("automotriz").style.background="#fff";
    document.getElementById("general").title = "off";
    document.getElementById("general").style.background="#fff";



    
        // window.addEventListener("beforeunload", (evento) => {
        //   if (true) {
        //     evento.preventDefault();
        //     evento.returnValue = "";
        //     return "";
        //   }
        // });
        $(document).ready(function(){ irArriba(); }); //Hacia arriba

        function irArriba(){
        $('.irArriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
        $(window).scroll(function(){
            if($(this).scrollTop() > 0){ $('.irArriba').slideDown(600); }else{ $('.irArriba').slideUp(600); }
        });
        
        }

        
        var allContainerCart = document.querySelector('.contenedorInterno');
       
        var i=0;
        var k=0;
        var cantProductos=0;

        $.ajax({
        type: 'GET',
        url: '/productos/busquedafiltrada/electrico',
        success: function(productos) {

          if (!productos[0]) {
            location.reload();
          }

            // EXTRACCION DE ID DEL USUARIO DESDE LA URL (POR PARAMETROS)
            var URLactual = window.location;
            var URLstring = Object.values(URLactual);
            URLstring = URLstring[1];
            longString = URLstring.length - 1;
            var cont=0;
            var inicio = "";
            var idUser = "";
            var botonAnadir = "";
            var botonComprar = "";

            for (let i = longString; i > 0; i--) {
            if((URLstring[i] === "/") && (cont === 0)){
                cont=1;
                inicio=i;
            }
            }
            
            if(inicio){
            idUser = URLstring.slice(inicio+1,);
            }
            // END EXTRACCION DE ID DEL USUARIO

            var cant=productos.length;
            localStorage.setItem("cantProductos",cant);
            cantProductos=localStorage.getItem("cantProductos");

            
              for (i = 0; i < cantProductos; i++) {
                var valoracion1 = '';
                var valoracion2 = '';
                var valoracion3 = '';
                var valoracion4 = '';
                var valoracion5 = '';
                if(productos[i].valoracion === 1){
                valoracion1 = 'checked=""';
                }else if(productos[i].valoracion === 2){
                valoracion2 = 'checked=""';
                }else if(productos[i].valoracion === 3){
                valoracion3 = 'checked=""';
                }else if(productos[i].valoracion === 4){
                valoracion4 = 'checked=""';
                }else if(productos[i].valoracion === 5){
                valoracion5 = 'checked=""';
                }else{
                valoracion1 = '';
                valoracion2 = '';
                valoracion3 = '';
                valoracion4 = '';
                valoracion5 = '';
                }

                if(idUser){
                botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                }else{
                botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                }
                const enviar = productos[i].id;
                const row = document.createElement('div');
                row.classList.add('box-card');
                row.setAttribute("id", i);
                row.innerHTML = `<div class="card">
                <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[i].img_producto+`" alt=""></a></div>
                <div class="card__title">`+productos[i].descripcion+`</div>
                <div class="card__valoracion">
                <div class="rating">
                <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
                <label title="text" for="star5"></label>
                <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
                <label title="text" for="star4"></label>
                <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
                <label title="text" for="star3"></label>
                <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
                <label title="text" for="star2"></label>
                <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
                <label title="text" for="star1"></label>
            </div>
                </div>
                <div class="card__precio">`+productos[i].precio_unitario+"$"+`</div>
                
                `+botonAnadir+`
                `+botonComprar+`
                
            </div>
            </div>
                `;
            
                allContainerCart.appendChild(row);
                
              }

              //  CREANDO PIE DE PAGINA
            
                              // CREANTO PIE DE PAGINA
                              row = document.createElement('footer');
                              row.classList.add('pie-pagina');
                              row.setAttribute("id", "piedepagina");
                              row.setAttribute("style", "display: grid; width: 1360px; margin-left: -10px; margin-right:0px");
                              row.innerHTML = `<div class="grupo-1">
                              <div class="box">
                                  <figure>
                                      <a href="/">
                                          <img src="images/logo.png" alt="Logo de SLee Dw">
                                      </a>
                                  </figure>
                              </div>
                              <div class="box">
                                  <h2>SOBRE NOSOTROS:</h2>
                                  <p>Somos una tienda online enfocada en Innovar el ecommerce Venezolano, 
                                      ofreciendo una gran gamma de productos para satisfacer las necesidades de la 
                                      familia venezolana con servicio y productos de calidad garantizada.</p>
                              </div>
                              <div class="box">
                                  <h2>SIGUENOS</h2>
                                  <div class="red-social">
                                      <a href="#" class="fa fa-facebook"></a>
                                      <a href="#" class="fa fa-instagram"></a>
                                      <a href="#" class="fa fa-twitter"></a>
                                      <a href="#" class="fa fa-youtube"></a>
                                  </div>
                              </div>
                          </div>
                          <div class="grupo-2">
                              <small>&copy; 2024 <b>1Click</b> - Todos los Derechos Reservados.</small>
                              </div>`;
                              
                              if (cantProductos<23) {
                                document.body.appendChild(row);
                              }else{
                                allContainerCart.appendChild(row);  
                              }
                                            
            localStorage.setItem("cantPagina1",k);
            Pagina1 = localStorage.getItem("cantPagina1");
        }
        });




  }else if(dato === "manual"){
    document.getElementById("manual").title = "on";
    document.getElementById("manual").style.background="#F26D43";

    document.getElementById("electrico").title = "off";
    document.getElementById("electrico").style.background="#fff";
    document.getElementById("iluminacion").title = "off";
    document.getElementById("iluminacion").style.background="#fff";
    document.getElementById("automotriz").title = "off";
    document.getElementById("automotriz").style.background="#fff";
    document.getElementById("general").title = "off";
      document.getElementById("general").style.background="#fff";
    



        
          // window.addEventListener("beforeunload", (evento) => {
        //   if (true) {
        //     evento.preventDefault();
        //     evento.returnValue = "";
        //     return "";
        //   }
        // });
        $(document).ready(function(){ irArriba(); }); //Hacia arriba

        function irArriba(){
        $('.irArriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
        $(window).scroll(function(){
            if($(this).scrollTop() > 0){ $('.irArriba').slideDown(600); }else{ $('.irArriba').slideUp(600); }
        });
        
        }

        
        var allContainerCart = document.querySelector('.contenedorInterno');
        var i=0;
        var k=0;
        var cantProductos=0;

        $.ajax({
        type: 'GET',
        url: '/productos/busquedafiltrada/manual',
        success: function(productos) {
          if (!productos[0]) {
            location.reload();
          }
            // EXTRACCION DE ID DEL USUARIO DESDE LA URL (POR PARAMETROS)
            var URLactual = window.location;
            var URLstring = Object.values(URLactual);
            URLstring = URLstring[1];
            longString = URLstring.length - 1;
            var cont=0;
            var inicio = "";
            var idUser = "";
            var botonAnadir = "";
            var botonComprar = "";

            for (let i = longString; i > 0; i--) {
            if((URLstring[i] === "/") && (cont === 0)){
                cont=1;
                inicio=i;
            }
            }
            
            if(inicio){
            idUser = URLstring.slice(inicio+1,);
            }
            // END EXTRACCION DE ID DEL USUARIO

            var cant=productos.length;
            localStorage.setItem("cantProductos",cant);
            cantProductos=localStorage.getItem("cantProductos");

            
              for (i = 0; i < cantProductos; i++) {
                var valoracion1 = '';
                var valoracion2 = '';
                var valoracion3 = '';
                var valoracion4 = '';
                var valoracion5 = '';
                if(productos[i].valoracion === 1){
                valoracion1 = 'checked=""';
                }else if(productos[i].valoracion === 2){
                valoracion2 = 'checked=""';
                }else if(productos[i].valoracion === 3){
                valoracion3 = 'checked=""';
                }else if(productos[i].valoracion === 4){
                valoracion4 = 'checked=""';
                }else if(productos[i].valoracion === 5){
                valoracion5 = 'checked=""';
                }else{
                valoracion1 = '';
                valoracion2 = '';
                valoracion3 = '';
                valoracion4 = '';
                valoracion5 = '';
                }

                if(idUser){
                botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                }else{
                botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                }
                const enviar = productos[i].id;
                const row = document.createElement('div');
                row.classList.add('box-card');
                row.setAttribute("id", i);
                row.innerHTML = `<div class="card">
                <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[i].img_producto+`" alt=""></a></div>
                <div class="card__title">`+productos[i].descripcion+`</div>
                <div class="card__valoracion">
                <div class="rating">
                <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
                <label title="text" for="star5"></label>
                <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
                <label title="text" for="star4"></label>
                <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
                <label title="text" for="star3"></label>
                <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
                <label title="text" for="star2"></label>
                <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
                <label title="text" for="star1"></label>
            </div>
                </div>
                <div class="card__precio">`+productos[i].precio_unitario+"$"+`</div>
                
                `+botonAnadir+`
                `+botonComprar+`
                
            </div>
            </div>
                `;
            
                allContainerCart.appendChild(row);
                
              }

              //  CREANDO PIE DE PAGINA
            
                              // CREANTO PIE DE PAGINA
                              row = document.createElement('footer');
                              row.classList.add('pie-pagina');
                              row.setAttribute("id", "piedepagina");
                              row.setAttribute("style", "display: grid; width: 1360px; margin-left: -10px; margin-right:0px");
                              row.innerHTML = `<div class="grupo-1">
                              <div class="box">
                                  <figure>
                                      <a href="/">
                                          <img src="images/logo.png" alt="Logo de SLee Dw">
                                      </a>
                                  </figure>
                              </div>
                              <div class="box">
                                  <h2>SOBRE NOSOTROS:</h2>
                                  <p>Somos una tienda online enfocada en Innovar el ecommerce Venezolano, 
                                      ofreciendo una gran gamma de productos para satisfacer las necesidades de la 
                                      familia venezolana con servicio y productos de calidad garantizada.</p>
                              </div>
                              <div class="box">
                                  <h2>SIGUENOS</h2>
                                  <div class="red-social">
                                      <a href="#" class="fa fa-facebook"></a>
                                      <a href="#" class="fa fa-instagram"></a>
                                      <a href="#" class="fa fa-twitter"></a>
                                      <a href="#" class="fa fa-youtube"></a>
                                  </div>
                              </div>
                          </div>
                          <div class="grupo-2">
                              <small>&copy; 2024 <b>1Click</b> - Todos los Derechos Reservados.</small>
                              </div>`;
                              
                              if (cantProductos<23) {
                                document.body.appendChild(row);
                              }else{
                                allContainerCart.appendChild(row);  
                              }
                              
                                              
            localStorage.setItem("cantPagina1",k);
            Pagina1 = localStorage.getItem("cantPagina1");
        }
        });
  }else if(dato === "iluminacion"){
    document.getElementById("iluminacion").title = "on";
    document.getElementById("iluminacion").style.background="#F26D43";

    document.getElementById("manual").title = "off";
    document.getElementById("manual").style.background="#fff";
    document.getElementById("electrico").title = "off";
    document.getElementById("electrico").style.background="#fff";
    document.getElementById("automotriz").title = "off";
    document.getElementById("automotriz").style.background="#fff";
    document.getElementById("general").title = "off";
      document.getElementById("general").style.background="#fff";
    



        // window.addEventListener("beforeunload", (evento) => {
        //   if (true) {
        //     evento.preventDefault();
        //     evento.returnValue = "";
        //     return "";
        //   }
        // });
        $(document).ready(function(){ irArriba(); }); //Hacia arriba

        function irArriba(){
        $('.irArriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
        $(window).scroll(function(){
            if($(this).scrollTop() > 0){ $('.irArriba').slideDown(600); }else{ $('.irArriba').slideUp(600); }
        });
        
        }

        
        var allContainerCart = document.querySelector('.contenedorInterno');
        var i=0;
        var k=0;
        var cantProductos=0;

        $.ajax({
        type: 'GET',
        url: '/productos/busquedafiltrada/iluminacion',
        success: function(productos) {
          if (!productos[0]) {
            location.reload();
          }
            // EXTRACCION DE ID DEL USUARIO DESDE LA URL (POR PARAMETROS)
            var URLactual = window.location;
            var URLstring = Object.values(URLactual);
            URLstring = URLstring[1];
            longString = URLstring.length - 1;
            var cont=0;
            var inicio = "";
            var idUser = "";
            var botonAnadir = "";
            var botonComprar = "";

            for (let i = longString; i > 0; i--) {
            if((URLstring[i] === "/") && (cont === 0)){
                cont=1;
                inicio=i;
            }
            }
            
            if(inicio){
            idUser = URLstring.slice(inicio+1,);
            }
            // END EXTRACCION DE ID DEL USUARIO

            var cant=productos.length;
            localStorage.setItem("cantProductos",cant);
            cantProductos=localStorage.getItem("cantProductos");

            
              for (i = 0; i < cantProductos; i++) {
                var valoracion1 = '';
                var valoracion2 = '';
                var valoracion3 = '';
                var valoracion4 = '';
                var valoracion5 = '';
                if(productos[i].valoracion === 1){
                valoracion1 = 'checked=""';
                }else if(productos[i].valoracion === 2){
                valoracion2 = 'checked=""';
                }else if(productos[i].valoracion === 3){
                valoracion3 = 'checked=""';
                }else if(productos[i].valoracion === 4){
                valoracion4 = 'checked=""';
                }else if(productos[i].valoracion === 5){
                valoracion5 = 'checked=""';
                }else{
                valoracion1 = '';
                valoracion2 = '';
                valoracion3 = '';
                valoracion4 = '';
                valoracion5 = '';
                }

                if(idUser){
                botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                }else{
                botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                }
                const enviar = productos[i].id;
                const row = document.createElement('div');
                row.classList.add('box-card');
                row.setAttribute("id", i);
                row.innerHTML = `<div class="card">
                <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[i].img_producto+`" alt=""></a></div>
                <div class="card__title">`+productos[i].descripcion+`</div>
                <div class="card__valoracion">
                <div class="rating">
                <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
                <label title="text" for="star5"></label>
                <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
                <label title="text" for="star4"></label>
                <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
                <label title="text" for="star3"></label>
                <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
                <label title="text" for="star2"></label>
                <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
                <label title="text" for="star1"></label>
            </div>
                </div>
                <div class="card__precio">`+productos[i].precio_unitario+"$"+`</div>
                
                `+botonAnadir+`
                `+botonComprar+`
                
            </div>
            </div>
                `;
            
                allContainerCart.appendChild(row);
                
              }

              //  CREANDO PIE DE PAGINA
            
                              // CREANTO PIE DE PAGINA
                              row = document.createElement('footer');
                              row.classList.add('pie-pagina');
                              row.setAttribute("id", "piedepagina");
                              row.setAttribute("style", "display: grid; width: 1360px; margin-left: -10px; margin-right:0px");
                              row.innerHTML = `<div class="grupo-1">
                              <div class="box">
                                  <figure>
                                      <a href="/">
                                          <img src="images/logo.png" alt="Logo de SLee Dw">
                                      </a>
                                  </figure>
                              </div>
                              <div class="box">
                                  <h2>SOBRE NOSOTROS:</h2>
                                  <p>Somos una tienda online enfocada en Innovar el ecommerce Venezolano, 
                                      ofreciendo una gran gamma de productos para satisfacer las necesidades de la 
                                      familia venezolana con servicio y productos de calidad garantizada.</p>
                              </div>
                              <div class="box">
                                  <h2>SIGUENOS</h2>
                                  <div class="red-social">
                                      <a href="#" class="fa fa-facebook"></a>
                                      <a href="#" class="fa fa-instagram"></a>
                                      <a href="#" class="fa fa-twitter"></a>
                                      <a href="#" class="fa fa-youtube"></a>
                                  </div>
                              </div>
                          </div>
                          <div class="grupo-2">
                              <small>&copy; 2024 <b>1Click</b> - Todos los Derechos Reservados.</small>
                              </div>`;
                              
                              if (cantProductos<23) {
                                document.body.appendChild(row);
                              }else{
                                allContainerCart.appendChild(row);  
                              }
                              
                                              
            localStorage.setItem("cantPagina1",k);
            Pagina1 = localStorage.getItem("cantPagina1");
        }
        });
  }else if(dato === "automotriz"){
      document.getElementById("automotriz").title = "on";
      document.getElementById("automotriz").style.background="#F26D43";
  
      document.getElementById("manual").title = "off";
      document.getElementById("manual").style.background="#fff";
      document.getElementById("iluminacion").title = "off";
      document.getElementById("iluminacion").style.background="#fff";
      document.getElementById("electrico").title = "off";
      document.getElementById("electrico").style.background="#fff";
      document.getElementById("general").title = "off";
      document.getElementById("general").style.background="#fff";
  
    



        // window.addEventListener("beforeunload", (evento) => {
        //   if (true) {
        //     evento.preventDefault();
        //     evento.returnValue = "";
        //     return "";
        //   }
        // });
        $(document).ready(function(){ irArriba(); }); //Hacia arriba

        function irArriba(){
        $('.irArriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
        $(window).scroll(function(){
            if($(this).scrollTop() > 0){ $('.irArriba').slideDown(600); }else{ $('.irArriba').slideUp(600); }
        });
        
        }

        
        var allContainerCart = document.querySelector('.contenedorInterno');
        var i=0;
        var k=0;
        var cantProductos=0;

        $.ajax({
        type: 'GET',
        url: '/productos/busquedafiltrada/automotriz',
        success: function(productos) {
          if (!productos[0]) {
            location.reload();
          }
            // EXTRACCION DE ID DEL USUARIO DESDE LA URL (POR PARAMETROS)
            var URLactual = window.location;
            var URLstring = Object.values(URLactual);
            URLstring = URLstring[1];
            longString = URLstring.length - 1;
            var cont=0;
            var inicio = "";
            var idUser = "";
            var botonAnadir = "";
            var botonComprar = "";

            for (let i = longString; i > 0; i--) {
            if((URLstring[i] === "/") && (cont === 0)){
                cont=1;
                inicio=i;
            }
            }
            
            if(inicio){
            idUser = URLstring.slice(inicio+1,);
            }
            // END EXTRACCION DE ID DEL USUARIO

            var cant=productos.length;
            localStorage.setItem("cantProductos",cant);
            cantProductos=localStorage.getItem("cantProductos");

            
              for (i = 0; i < cantProductos; i++) {
                var valoracion1 = '';
                var valoracion2 = '';
                var valoracion3 = '';
                var valoracion4 = '';
                var valoracion5 = '';
                if(productos[i].valoracion === 1){
                valoracion1 = 'checked=""';
                }else if(productos[i].valoracion === 2){
                valoracion2 = 'checked=""';
                }else if(productos[i].valoracion === 3){
                valoracion3 = 'checked=""';
                }else if(productos[i].valoracion === 4){
                valoracion4 = 'checked=""';
                }else if(productos[i].valoracion === 5){
                valoracion5 = 'checked=""';
                }else{
                valoracion1 = '';
                valoracion2 = '';
                valoracion3 = '';
                valoracion4 = '';
                valoracion5 = '';
                }

                if(idUser){
                botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                }else{
                botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                }
                const enviar = productos[i].id;
                const row = document.createElement('div');
                row.classList.add('box-card');
                row.setAttribute("id", i);
                row.innerHTML = `<div class="card">
                <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[i].img_producto+`" alt=""></a></div>
                <div class="card__title">`+productos[i].descripcion+`</div>
                <div class="card__valoracion">
                <div class="rating">
                <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
                <label title="text" for="star5"></label>
                <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
                <label title="text" for="star4"></label>
                <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
                <label title="text" for="star3"></label>
                <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
                <label title="text" for="star2"></label>
                <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
                <label title="text" for="star1"></label>
            </div>
                </div>
                <div class="card__precio">`+productos[i].precio_unitario+"$"+`</div>
                
                `+botonAnadir+`
                `+botonComprar+`
                
            </div>
            </div>
                `;
            
                allContainerCart.appendChild(row);
                
              }

              //  CREANDO PIE DE PAGINA
            
                              // CREANTO PIE DE PAGINA
                              row = document.createElement('footer');
                              row.classList.add('pie-pagina');
                              row.setAttribute("id", "piedepagina");
                              row.setAttribute("style", "display: grid; width: 1360px; margin-left: -10px; margin-right:0px");
                              row.innerHTML = `<div class="grupo-1">
                              <div class="box">
                                  <figure>
                                      <a href="/">
                                          <img src="images/logo.png" alt="Logo de SLee Dw">
                                      </a>
                                  </figure>
                              </div>
                              <div class="box">
                                  <h2>SOBRE NOSOTROS:</h2>
                                  <p>Somos una tienda online enfocada en Innovar el ecommerce Venezolano, 
                                      ofreciendo una gran gamma de productos para satisfacer las necesidades de la 
                                      familia venezolana con servicio y productos de calidad garantizada.</p>
                              </div>
                              <div class="box">
                                  <h2>SIGUENOS</h2>
                                  <div class="red-social">
                                      <a href="#" class="fa fa-facebook"></a>
                                      <a href="#" class="fa fa-instagram"></a>
                                      <a href="#" class="fa fa-twitter"></a>
                                      <a href="#" class="fa fa-youtube"></a>
                                  </div>
                              </div>
                          </div>
                          <div class="grupo-2">
                              <small>&copy; 2024 <b>1Click</b> - Todos los Derechos Reservados.</small>
                              </div>`;
                              
                              if (cantProductos<23) {
                                document.body.appendChild(row);
                              }else{
                                allContainerCart.appendChild(row);  
                              }
                              
                                              
            localStorage.setItem("cantPagina1",k);
            Pagina1 = localStorage.getItem("cantPagina1");
        }
        });
  }else{ 
    location.reload();
  } 
}


function precioFiltro(dato){
  limpiarVentana();

  if(dato === "mayorMenor"){
    document.getElementById("mayorMenor").title = "on";
    document.getElementById("mayorMenor").style.background="#F26D43";

    document.getElementById("menorMayor").title = "off";
    document.getElementById("menorMayor").style.background="#fff";
    document.getElementById("general").title = "on";
    document.getElementById("general").style.background="#F26D43";
  
    document.getElementById("manual").title = "off";
    document.getElementById("manual").style.background="#fff";
    document.getElementById("iluminacion").title = "off";
    document.getElementById("iluminacion").style.background="#fff";
    document.getElementById("electrico").title = "off";
    document.getElementById("electrico").style.background="#fff";
    document.getElementById("automotriz").title = "off";
    document.getElementById("automotriz").style.background="#fff";




            // window.addEventListener("beforeunload", (evento) => {
        //   if (true) {
        //     evento.preventDefault();
        //     evento.returnValue = "";
        //     return "";
        //   }
        // });
        $(document).ready(function(){ irArriba(); }); //Hacia arriba

        function irArriba(){
        $('.irArriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
        $(window).scroll(function(){
            if($(this).scrollTop() > 0){ $('.irArriba').slideDown(600); }else{ $('.irArriba').slideUp(600); }
        });
        
        }

        
        var allContainerCart = document.querySelector('.contenedorInterno');
       
        var i=0;
        var k=0;
        var cantProductos=0;

        $.ajax({
        type: 'GET',
        url: '/productos/busquedafiltrada/mayorMenor',
        success: function(productos) {
          if (!productos[0]) {
            location.reload();
          }
          

            // EXTRACCION DE ID DEL USUARIO DESDE LA URL (POR PARAMETROS)
            var URLactual = window.location;
            var URLstring = Object.values(URLactual);
            URLstring = URLstring[1];
            longString = URLstring.length - 1;
            var cont=0;
            var inicio = "";
            var idUser = "";
            var botonAnadir = "";
            var botonComprar = "";

            for (let i = longString; i > 0; i--) {
            if((URLstring[i] === "/") && (cont === 0)){
                cont=1;
                inicio=i;
            }
            }
            
            if(inicio){
            idUser = URLstring.slice(inicio+1,);
            }
            // END EXTRACCION DE ID DEL USUARIO

            var cant=productos.length;
            localStorage.setItem("cantProductos",cant);
            cantProductos=localStorage.getItem("cantProductos");

            
              for (i = 0; i < cantProductos; i++) {
                var valoracion1 = '';
                var valoracion2 = '';
                var valoracion3 = '';
                var valoracion4 = '';
                var valoracion5 = '';
                if(productos[i].valoracion === 1){
                valoracion1 = 'checked=""';
                }else if(productos[i].valoracion === 2){
                valoracion2 = 'checked=""';
                }else if(productos[i].valoracion === 3){
                valoracion3 = 'checked=""';
                }else if(productos[i].valoracion === 4){
                valoracion4 = 'checked=""';
                }else if(productos[i].valoracion === 5){
                valoracion5 = 'checked=""';
                }else{
                valoracion1 = '';
                valoracion2 = '';
                valoracion3 = '';
                valoracion4 = '';
                valoracion5 = '';
                }

                if(idUser){
                botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                }else{
                botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                }
                const enviar = productos[i].id;
                const row = document.createElement('div');
                row.classList.add('box-card');
                row.setAttribute("id", i);
                row.innerHTML = `<div class="card">
                <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[i].img_producto+`" alt=""></a></div>
                <div class="card__title">`+productos[i].descripcion+`</div>
                <div class="card__valoracion">
                <div class="rating">
                <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
                <label title="text" for="star5"></label>
                <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
                <label title="text" for="star4"></label>
                <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
                <label title="text" for="star3"></label>
                <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
                <label title="text" for="star2"></label>
                <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
                <label title="text" for="star1"></label>
            </div>
                </div>
                <div class="card__precio">`+productos[i].precio_unitario+"$"+`</div>
                
                `+botonAnadir+`
                `+botonComprar+`
                
            </div>
            </div>
                `;
            
                allContainerCart.appendChild(row);
                
              }

              //  CREANDO PIE DE PAGINA
            
                              // CREANTO PIE DE PAGINA
                              row = document.createElement('footer');
                              row.classList.add('pie-pagina');
                              row.setAttribute("id", "piedepagina");
                              row.setAttribute("style", "display: grid; width: 1360px; margin-left: -10px; margin-right:0px");
                              row.innerHTML = `<div class="grupo-1">
                              <div class="box">
                                  <figure>
                                      <a href="/">
                                          <img src="images/logo.png" alt="Logo de SLee Dw">
                                      </a>
                                  </figure>
                              </div>
                              <div class="box">
                                  <h2>SOBRE NOSOTROS:</h2>
                                  <p>Somos una tienda online enfocada en Innovar el ecommerce Venezolano, 
                                      ofreciendo una gran gamma de productos para satisfacer las necesidades de la 
                                      familia venezolana con servicio y productos de calidad garantizada.</p>
                              </div>
                              <div class="box">
                                  <h2>SIGUENOS</h2>
                                  <div class="red-social">
                                      <a href="#" class="fa fa-facebook"></a>
                                      <a href="#" class="fa fa-instagram"></a>
                                      <a href="#" class="fa fa-twitter"></a>
                                      <a href="#" class="fa fa-youtube"></a>
                                  </div>
                              </div>
                          </div>
                          <div class="grupo-2">
                              <small>&copy; 2024 <b>1Click</b> - Todos los Derechos Reservados.</small>
                              </div>`;
                              
                              if (cantProductos<23) {
                                document.body.appendChild(row);
                              }else{
                                allContainerCart.appendChild(row);  
                              }
                                            
            localStorage.setItem("cantPagina1",k);
            Pagina1 = localStorage.getItem("cantPagina1");
        }
        });

  }
  if (dato === "menorMayor") {
    document.getElementById("menorMayor").title = "on";
    document.getElementById("menorMayor").style.background="#F26D43";

    document.getElementById("mayorMenor").title = "off";
    document.getElementById("mayorMenor").style.background="#fff";

    document.getElementById("general").title = "on";
    document.getElementById("general").style.background="#F26D43";
  
    document.getElementById("manual").title = "off";
    document.getElementById("manual").style.background="#fff";
    document.getElementById("iluminacion").title = "off";
    document.getElementById("iluminacion").style.background="#fff";
    document.getElementById("electrico").title = "off";
    document.getElementById("electrico").style.background="#fff";
    document.getElementById("automotriz").title = "off";
    document.getElementById("automotriz").style.background="#fff";



            // window.addEventListener("beforeunload", (evento) => {
        //   if (true) {
        //     evento.preventDefault();
        //     evento.returnValue = "";
        //     return "";
        //   }
        // });
        $(document).ready(function(){ irArriba(); }); //Hacia arriba

        function irArriba(){
        $('.irArriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
        $(window).scroll(function(){
            if($(this).scrollTop() > 0){ $('.irArriba').slideDown(600); }else{ $('.irArriba').slideUp(600); }
        });
        
        }

        
        var allContainerCart = document.querySelector('.contenedorInterno');
       
        var i=0;
        var k=0;
        var cantProductos=0;

        $.ajax({
        type: 'GET',
        url: '/productos/busquedafiltrada/menorMayor',
        success: function(productos) {
          if (!productos[0]) {
            location.reload();
          }
          

            // EXTRACCION DE ID DEL USUARIO DESDE LA URL (POR PARAMETROS)
            var URLactual = window.location;
            var URLstring = Object.values(URLactual);
            URLstring = URLstring[1];
            longString = URLstring.length - 1;
            var cont=0;
            var inicio = "";
            var idUser = "";
            var botonAnadir = "";
            var botonComprar = "";

            for (let i = longString; i > 0; i--) {
            if((URLstring[i] === "/") && (cont === 0)){
                cont=1;
                inicio=i;
            }
            }
            
            if(inicio){
            idUser = URLstring.slice(inicio+1,);
            }
            // END EXTRACCION DE ID DEL USUARIO

            var cant=productos.length;
            localStorage.setItem("cantProductos",cant);
            cantProductos=localStorage.getItem("cantProductos");

            
              for (i = 0; i < cantProductos; i++) {
                var valoracion1 = '';
                var valoracion2 = '';
                var valoracion3 = '';
                var valoracion4 = '';
                var valoracion5 = '';
                if(productos[i].valoracion === 1){
                valoracion1 = 'checked=""';
                }else if(productos[i].valoracion === 2){
                valoracion2 = 'checked=""';
                }else if(productos[i].valoracion === 3){
                valoracion3 = 'checked=""';
                }else if(productos[i].valoracion === 4){
                valoracion4 = 'checked=""';
                }else if(productos[i].valoracion === 5){
                valoracion5 = 'checked=""';
                }else{
                valoracion1 = '';
                valoracion2 = '';
                valoracion3 = '';
                valoracion4 = '';
                valoracion5 = '';
                }

                if(idUser){
                botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                }else{
                botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                }
                const enviar = productos[i].id;
                const row = document.createElement('div');
                row.classList.add('box-card');
                row.setAttribute("id", i);
                row.innerHTML = `<div class="card">
                <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[i].img_producto+`" alt=""></a></div>
                <div class="card__title">`+productos[i].descripcion+`</div>
                <div class="card__valoracion">
                <div class="rating">
                <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
                <label title="text" for="star5"></label>
                <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
                <label title="text" for="star4"></label>
                <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
                <label title="text" for="star3"></label>
                <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
                <label title="text" for="star2"></label>
                <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
                <label title="text" for="star1"></label>
            </div>
                </div>
                <div class="card__precio">`+productos[i].precio_unitario+"$"+`</div>
                
                `+botonAnadir+`
                `+botonComprar+`
                
            </div>
            </div>
                `;
            
                allContainerCart.appendChild(row);
                
              }

              //  CREANDO PIE DE PAGINA
            
                              // CREANTO PIE DE PAGINA
                              row = document.createElement('footer');
                              row.classList.add('pie-pagina');
                              row.setAttribute("id", "piedepagina");
                              row.setAttribute("style", "display: grid; width: 1360px; margin-left: -10px; margin-right:0px");
                              row.innerHTML = `<div class="grupo-1">
                              <div class="box">
                                  <figure>
                                      <a href="/">
                                          <img src="images/logo.png" alt="Logo de SLee Dw">
                                      </a>
                                  </figure>
                              </div>
                              <div class="box">
                                  <h2>SOBRE NOSOTROS:</h2>
                                  <p>Somos una tienda online enfocada en Innovar el ecommerce Venezolano, 
                                      ofreciendo una gran gamma de productos para satisfacer las necesidades de la 
                                      familia venezolana con servicio y productos de calidad garantizada.</p>
                              </div>
                              <div class="box">
                                  <h2>SIGUENOS</h2>
                                  <div class="red-social">
                                      <a href="#" class="fa fa-facebook"></a>
                                      <a href="#" class="fa fa-instagram"></a>
                                      <a href="#" class="fa fa-twitter"></a>
                                      <a href="#" class="fa fa-youtube"></a>
                                  </div>
                              </div>
                          </div>
                          <div class="grupo-2">
                              <small>&copy; 2024 <b>1Click</b> - Todos los Derechos Reservados.</small>
                              </div>`;
                              
                              if (cantProductos<23) {
                                document.body.appendChild(row);
                              }else{
                                allContainerCart.appendChild(row);  
                              }
                                            
            localStorage.setItem("cantPagina1",k);
            Pagina1 = localStorage.getItem("cantPagina1");
        }
        });

  }

}


function precioLimite(info){
  if (info === "limiteMenor") {
  var dato = "";
  if(document.getElementById("minMayor").value > 0){
    dato = document.getElementById("minMayor").value;
    var dato =parseFloat(dato);

    document.getElementById("maxMenor").value="";
  }
  else{
      location.reload();
  }

  limpiarVentana();

    document.getElementById("general").title = "on";
    document.getElementById("general").style.background="#F26D43";
  
    document.getElementById("manual").title = "off";
    document.getElementById("manual").style.background="#fff";
    document.getElementById("iluminacion").title = "off";
    document.getElementById("iluminacion").style.background="#fff";
    document.getElementById("electrico").title = "off";
    document.getElementById("electrico").style.background="#fff";
    document.getElementById("automotriz").title = "off";
    document.getElementById("automotriz").style.background="#fff";
    document.getElementById("mayorMenor").title = "off";
    document.getElementById("mayorMenor").style.background="#fff";
    document.getElementById("menorMayor").title = "on";
    document.getElementById("menorMayor").style.background="#fff";




            // window.addEventListener("beforeunload", (evento) => {
        //   if (true) {
        //     evento.preventDefault();
        //     evento.returnValue = "";
        //     return "";
        //   }
        // });
        $(document).ready(function(){ irArriba(); }); //Hacia arriba

        function irArriba(){
        $('.irArriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
        $(window).scroll(function(){
            if($(this).scrollTop() > 0){ $('.irArriba').slideDown(600); }else{ $('.irArriba').slideUp(600); }
        });
        
        }

        
        var allContainerCart = document.querySelector('.contenedorInterno');
       
        var i=0;
        var k=0;
        var cantProductos=0;

        $.ajax({
        type: 'GET',
        url: '/productos/busquedafiltrada/mayorA'+dato+'',
        success: function(productos) {
          if (!productos[0]) {
            location.reload();
          }
          

            // EXTRACCION DE ID DEL USUARIO DESDE LA URL (POR PARAMETROS)
            var URLactual = window.location;
            var URLstring = Object.values(URLactual);
            URLstring = URLstring[1];
            longString = URLstring.length - 1;
            var cont=0;
            var inicio = "";
            var idUser = "";
            var botonAnadir = "";
            var botonComprar = "";

            for (let i = longString; i > 0; i--) {
            if((URLstring[i] === "/") && (cont === 0)){
                cont=1;
                inicio=i;
            }
            }
            
            if(inicio){
            idUser = URLstring.slice(inicio+1,);
            }
            // END EXTRACCION DE ID DEL USUARIO

            var cant=productos.length;
            localStorage.setItem("cantProductos",cant);
            cantProductos=localStorage.getItem("cantProductos");

            
              for (i = 0; i < cantProductos; i++) {
                var valoracion1 = '';
                var valoracion2 = '';
                var valoracion3 = '';
                var valoracion4 = '';
                var valoracion5 = '';
                if(productos[i].valoracion === 1){
                valoracion1 = 'checked=""';
                }else if(productos[i].valoracion === 2){
                valoracion2 = 'checked=""';
                }else if(productos[i].valoracion === 3){
                valoracion3 = 'checked=""';
                }else if(productos[i].valoracion === 4){
                valoracion4 = 'checked=""';
                }else if(productos[i].valoracion === 5){
                valoracion5 = 'checked=""';
                }else{
                valoracion1 = '';
                valoracion2 = '';
                valoracion3 = '';
                valoracion4 = '';
                valoracion5 = '';
                }

                if(idUser){
                botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                }else{
                botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                }
                const enviar = productos[i].id;
                const row = document.createElement('div');
                row.classList.add('box-card');
                row.setAttribute("id", i);
                row.innerHTML = `<div class="card">
                <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[i].img_producto+`" alt=""></a></div>
                <div class="card__title">`+productos[i].descripcion+`</div>
                <div class="card__valoracion">
                <div class="rating">
                <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
                <label title="text" for="star5"></label>
                <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
                <label title="text" for="star4"></label>
                <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
                <label title="text" for="star3"></label>
                <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
                <label title="text" for="star2"></label>
                <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
                <label title="text" for="star1"></label>
            </div>
                </div>
                <div class="card__precio">`+productos[i].precio_unitario+"$"+`</div>
                
                `+botonAnadir+`
                `+botonComprar+`
                
            </div>
            </div>
                `;
            
                allContainerCart.appendChild(row);
                
              }

              //  CREANDO PIE DE PAGINA
            
                              // CREANTO PIE DE PAGINA
                              row = document.createElement('footer');
                              row.classList.add('pie-pagina');
                              row.setAttribute("id", "piedepagina");
                              row.setAttribute("style", "display: grid; width: 1360px; margin-left: -10px; margin-right:0px");
                              row.innerHTML = `<div class="grupo-1">
                              <div class="box">
                                  <figure>
                                      <a href="/">
                                          <img src="images/logo.png" alt="Logo de SLee Dw">
                                      </a>
                                  </figure>
                              </div>
                              <div class="box">
                                  <h2>SOBRE NOSOTROS:</h2>
                                  <p>Somos una tienda online enfocada en Innovar el ecommerce Venezolano, 
                                      ofreciendo una gran gamma de productos para satisfacer las necesidades de la 
                                      familia venezolana con servicio y productos de calidad garantizada.</p>
                              </div>
                              <div class="box">
                                  <h2>SIGUENOS</h2>
                                  <div class="red-social">
                                      <a href="#" class="fa fa-facebook"></a>
                                      <a href="#" class="fa fa-instagram"></a>
                                      <a href="#" class="fa fa-twitter"></a>
                                      <a href="#" class="fa fa-youtube"></a>
                                  </div>
                              </div>
                          </div>
                          <div class="grupo-2">
                              <small>&copy; 2024 <b>1Click</b> - Todos los Derechos Reservados.</small>
                              </div>`;
                              
                              if (cantProductos<23) {
                                document.body.appendChild(row);
                              }else{
                                allContainerCart.appendChild(row);  
                              }
                                            
            localStorage.setItem("cantPagina1",k);
            Pagina1 = localStorage.getItem("cantPagina1");
        }
        });

  }

  if (info === "limiteMayor") {
    
    var dato = "";
    if(document.getElementById("maxMenor").value > 0){
      dato = document.getElementById("maxMenor").value;
      var dato =parseFloat(dato);

      document.getElementById("minMayor").value="";

    }
    else{
        location.reload();
    }
  
    limpiarVentana();
  
      document.getElementById("general").title = "on";
      document.getElementById("general").style.background="#F26D43";
    
      document.getElementById("manual").title = "off";
      document.getElementById("manual").style.background="#fff";
      document.getElementById("iluminacion").title = "off";
      document.getElementById("iluminacion").style.background="#fff";
      document.getElementById("electrico").title = "off";
      document.getElementById("electrico").style.background="#fff";
      document.getElementById("automotriz").title = "off";
      document.getElementById("automotriz").style.background="#fff";
      document.getElementById("mayorMenor").title = "off";
      document.getElementById("mayorMenor").style.background="#fff";
      document.getElementById("menorMayor").title = "on";
      document.getElementById("menorMayor").style.background="#fff";
  
  
  
  
              // window.addEventListener("beforeunload", (evento) => {
          //   if (true) {
          //     evento.preventDefault();
          //     evento.returnValue = "";
          //     return "";
          //   }
          // });
          $(document).ready(function(){ irArriba(); }); //Hacia arriba
  
          function irArriba(){
          $('.irArriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
          $(window).scroll(function(){
              if($(this).scrollTop() > 0){ $('.irArriba').slideDown(600); }else{ $('.irArriba').slideUp(600); }
          });
          
          }
  
          
          var allContainerCart = document.querySelector('.contenedorInterno');
         
          var i=0;
          var k=0;
          var cantProductos=0;
  
          $.ajax({
          type: 'GET',
          url: '/productos/busquedafiltrada/menorA'+dato+'',
          success: function(productos) {
            if (!productos[0]) {
              location.reload();
            }
            
  
              // EXTRACCION DE ID DEL USUARIO DESDE LA URL (POR PARAMETROS)
              var URLactual = window.location;
              var URLstring = Object.values(URLactual);
              URLstring = URLstring[1];
              longString = URLstring.length - 1;
              var cont=0;
              var inicio = "";
              var idUser = "";
              var botonAnadir = "";
              var botonComprar = "";
  
              for (let i = longString; i > 0; i--) {
              if((URLstring[i] === "/") && (cont === 0)){
                  cont=1;
                  inicio=i;
              }
              }
              
              if(inicio){
              idUser = URLstring.slice(inicio+1,);
              }
              // END EXTRACCION DE ID DEL USUARIO
  
              var cant=productos.length;
              localStorage.setItem("cantProductos",cant);
              cantProductos=localStorage.getItem("cantProductos");
  
              
                for (i = 0; i < cantProductos; i++) {
                  var valoracion1 = '';
                  var valoracion2 = '';
                  var valoracion3 = '';
                  var valoracion4 = '';
                  var valoracion5 = '';
                  if(productos[i].valoracion === 1){
                  valoracion1 = 'checked=""';
                  }else if(productos[i].valoracion === 2){
                  valoracion2 = 'checked=""';
                  }else if(productos[i].valoracion === 3){
                  valoracion3 = 'checked=""';
                  }else if(productos[i].valoracion === 4){
                  valoracion4 = 'checked=""';
                  }else if(productos[i].valoracion === 5){
                  valoracion5 = 'checked=""';
                  }else{
                  valoracion1 = '';
                  valoracion2 = '';
                  valoracion3 = '';
                  valoracion4 = '';
                  valoracion5 = '';
                  }
  
                  if(idUser){
                  botonAnadir = "<button style='margin-left: -100px;' class='card__btn btn-add-cart' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                  botonComprar = "<button onclick='verCarrito("+idUser+")' style='margin-top: -36px; margin-left: 100px;' class='card__btn btn-add-cart card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                  }else{
                  botonAnadir = "<button style='margin-left: -100px;' class='card__btn' data-id="+productos[i].codigo_profit+">Añadir <i style='font-size: 10px;' class='fa fa-shopping-cart'></i></button>";
                  botonComprar = "<button style='margin-top: -36px; margin-left: 100px;' class='card__btn card__btn-solid'>Comprar <i style='font-size: 10px;' class='fa fa-credit-card-alt'></i></button>";
                  }
                  const enviar = productos[i].id;
                  const row = document.createElement('div');
                  row.classList.add('box-card');
                  row.setAttribute("id", i);
                  row.innerHTML = `<div class="card">
                  <div class="card__img"><a onclick="ficha('`+enviar+`')"><img src="`+productos[i].img_producto+`" alt=""></a></div>
                  <div class="card__title">`+productos[i].descripcion+`</div>
                  <div class="card__valoracion">
                  <div class="rating">
                  <input value="5" name="rate" id="star5" type="radio" `+valoracion5+`>
                  <label title="text" for="star5"></label>
                  <input value="4" name="rate" id="star4" type="radio" `+valoracion4+`>
                  <label title="text" for="star4"></label>
                  <input value="3" name="rate" id="star3" type="radio" `+valoracion3+`>
                  <label title="text" for="star3"></label>
                  <input value="2" name="rate" id="star2" type="radio" `+valoracion2+`>
                  <label title="text" for="star2"></label>
                  <input value="1" name="rate" id="star1" type="radio" `+valoracion1+`>
                  <label title="text" for="star1"></label>
              </div>
                  </div>
                  <div class="card__precio">`+productos[i].precio_unitario+"$"+`</div>
                  
                  `+botonAnadir+`
                  `+botonComprar+`
                  
              </div>
              </div>
                  `;
              
                  allContainerCart.appendChild(row);
                  
                }
  
                //  CREANDO PIE DE PAGINA
              
                                // CREANTO PIE DE PAGINA
                                row = document.createElement('footer');
                                row.classList.add('pie-pagina');
                                row.setAttribute("id", "piedepagina");
                                row.setAttribute("style", "display: grid; width: 1360px; margin-left: -10px; margin-right:0px");
                                row.innerHTML = `<div class="grupo-1">
                                <div class="box">
                                    <figure>
                                        <a href="/">
                                            <img src="images/logo.png" alt="Logo de SLee Dw">
                                        </a>
                                    </figure>
                                </div>
                                <div class="box">
                                    <h2>SOBRE NOSOTROS:</h2>
                                    <p>Somos una tienda online enfocada en Innovar el ecommerce Venezolano, 
                                        ofreciendo una gran gamma de productos para satisfacer las necesidades de la 
                                        familia venezolana con servicio y productos de calidad garantizada.</p>
                                </div>
                                <div class="box">
                                    <h2>SIGUENOS</h2>
                                    <div class="red-social">
                                        <a href="#" class="fa fa-facebook"></a>
                                        <a href="#" class="fa fa-instagram"></a>
                                        <a href="#" class="fa fa-twitter"></a>
                                        <a href="#" class="fa fa-youtube"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="grupo-2">
                                <small>&copy; 2024 <b>1Click</b> - Todos los Derechos Reservados.</small>
                                </div>`;
                                
                                if (cantProductos<23) {
                                  document.body.appendChild(row);
                                }else{
                                  allContainerCart.appendChild(row);  
                                }
                                              
              localStorage.setItem("cantPagina1",k);
              Pagina1 = localStorage.getItem("cantPagina1");
          }
          });
  
    }
}