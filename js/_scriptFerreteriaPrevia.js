// window.addEventListener("beforeunload", (evento) => {
//   if (true) {
//     evento.preventDefault();
//     evento.returnValue = "";
//     return "";
//   }
// });


    
    var allContainerPrincipal = document.querySelector('.contenedorInterno');
    var cantProductos=40;

    if(cantProductos<10){ 
      for (let k = 0; k < cantProductos; k++) {
        const row = document.createElement('div');
        row.classList.add('box-card');
        row.setAttribute("id", k);
        row.innerHTML = `<div class="card">
        <div class="card__img"><img src="images/BOMBILLO.jpg" alt=""></div>
        <div class="card__title">Bombillo Led 9W Bulbo 6500K Rosca E27</div>
        <div class="card__valoracion">
          <div class="rating">
            <input value="5" name="rate" id="star5" type="radio">
            <label title="text" for="star5"></label>
            <input value="4" name="rate" id="star4" type="radio">
            <label title="text" for="star4"></label>
            <input value="3" name="rate" id="star3" type="radio" checked="">
            <label title="text" for="star3"></label>
            <input value="2" name="rate" id="star2" type="radio">
            <label title="text" for="star2"></label>
            <input value="1" name="rate" id="star1" type="radio">
            <label title="text" for="star1"></label>
          </div>
        </div>
        <div class="card__precio">20</div><div class="dollar">$</div>

        <button style="margin-left: -100px;" href="" class="card__btn btn-add-cart" data-id="`+k+`">Añadir <i style="font-size: 10px;" class="fa fa-shopping-cart"></i></button>
        <button style="margin-top: -36px; margin-left: 100px;" class="card__btn card__btn-solid">Comprar <i style="font-size: 10px;" class="fa fa-credit-card-alt"></i></button>

    </div>
    </div>
          `;
      
        allContainerPrincipal.appendChild(row);
      }
    }else{ 
      for (k = 0; k < 10; k++) {
        const row = document.createElement('div');
        row.classList.add('box-card');
        row.setAttribute("id", k);
        row.innerHTML = `<div class="card">
        <div class="card__img"><img src="images/BOMBILLO.jpg" alt=""></div>
        <div class="card__title">Bombillo Led 9W Bulbo 6500K Rosca E27</div>
        <div class="card__valoracion">
          <div class="rating">
            <input value="5" name="rate" id="star5" type="radio">
            <label title="text" for="star5"></label>
            <input value="4" name="rate" id="star4" type="radio">
            <label title="text" for="star4"></label>
            <input value="3" name="rate" id="star3" type="radio" checked="">
            <label title="text" for="star3"></label>
            <input value="2" name="rate" id="star2" type="radio">
            <label title="text" for="star2"></label>
            <input value="1" name="rate" id="star1" type="radio">
            <label title="text" for="star1"></label>
          </div>
        </div>
        <div class="card__precio">20</div><div class="dollar">$</div>

        <button style="margin-left: -100px;" href="" class="card__btn btn-add-cart" data-id="`+k+`">Añadir <i style="font-size: 10px;" class="fa fa-shopping-cart"></i></button>
        <button style="margin-top: -36px; margin-left: 100px;" class="card__btn card__btn-solid">Comprar <i style="font-size: 10px;" class="fa fa-credit-card-alt"></i></button>

    </div>
    </div>
          `;
      
        allContainerPrincipal.appendChild(row);
      }
    
    }
    row="";
        row = document.createElement('div');
        row.classList.add('container-pie');
        row.innerHTML = `<div data-text="Github" style="--r:-15;" class="glass">
        <img class="imagenFoot" src="images/5.jpg" alt="">
        </div>
        <div data-text="Code" style="--r:5;" class="glass">
        <img class="imagenFoot" src="images/5.jpg" alt="">
        </div>
        <div data-text="Earn" style="--r:25;" class="glass" >
          <img class="imagenFoot" src="images/5.jpg" alt="">
        </div>
      </div>
          `;
    allContainerPrincipal.appendChild(row);
    row="";
        row = document.createElement('div');
        row.classList.add('container-button');
        row.setAttribute("onClick", "ferreteriaRedirect()");
        row.innerHTML = `<div class="hover bt-1"></div>
        <div class="hover bt-2"></div>
        <div class="hover bt-3"></div>
        <div class="hover bt-4"></div>
        <div class="hover bt-5"></div>
        <div class="hover bt-6"></div>
        <button onClick="ferreteriaRedirect()" class="boton-vermas"></button>
      </div>
          `;
    allContainerPrincipal.appendChild(row);


    // HOGAR

    row="";
        row = document.createElement('div');
        row.setAttribute("style", "height: 80px; width: 1350px; margin-top: 70px; margin-left: -5px; background-image: url(images/a.jpg);");
        row.innerHTML = `<h1 style="margin-top: 0px; text-align: center;">HOGAR</h1>
        </div>
          `;
    allContainerPrincipal.appendChild(row);
    if(cantProductos<10){ 
      for (let k = 0; k < cantProductos; k++) {
        row = document.createElement('div');
        row.classList.add('box-card');
        row.setAttribute("id", k);
        row.innerHTML = `<div class="card">
        <div class="card__img"><img src="images/BOMBILLO.jpg" alt=""></div>
                <div class="card__title">Bombillo Led 9W Bulbo 6500K Rosca E27</div>
                <div class="card__valoracion">
                  <div class="rating">
                    <input value="5" name="rate" id="star5" type="radio">
                    <label title="text" for="star5"></label>
                    <input value="4" name="rate" id="star4" type="radio">
                    <label title="text" for="star4"></label>
                    <input value="3" name="rate" id="star3" type="radio" checked="">
                    <label title="text" for="star3"></label>
                    <input value="2" name="rate" id="star2" type="radio">
                    <label title="text" for="star2"></label>
                    <input value="1" name="rate" id="star1" type="radio">
                    <label title="text" for="star1"></label>
                  </div>
                </div>
                <div class="card__precio">20</div><div class="dollar">$</div>

                <button style="margin-left: -100px;" href="" class="card__btn btn-add-cart" data-id="`+k+`">Añadir <i style="font-size: 10px;" class="fa fa-shopping-cart"></i></button>
                <button style="margin-top: -36px; margin-left: 100px;" class="card__btn card__btn-solid">Comprar <i style="font-size: 10px;" class="fa fa-credit-card-alt"></i></button>

            </div>
            </div>
          `;
      
        allContainerPrincipal.appendChild(row);
      }
    }else{ 
      for (k = 0; k < 10; k++) {
        row = document.createElement('div');
        row.classList.add('box-card');
        row.setAttribute("id", k);
        row.innerHTML = `<div class="card">
        <div class="card__img"><img src="images/BOMBILLO.jpg" alt=""></div>
                <div class="card__title">Bombillo Led 9W Bulbo 6500K Rosca E27</div>
                <div class="card__valoracion">
                  <div class="rating">
                    <input value="5" name="rate" id="star5" type="radio">
                    <label title="text" for="star5"></label>
                    <input value="4" name="rate" id="star4" type="radio">
                    <label title="text" for="star4"></label>
                    <input value="3" name="rate" id="star3" type="radio" checked="">
                    <label title="text" for="star3"></label>
                    <input value="2" name="rate" id="star2" type="radio">
                    <label title="text" for="star2"></label>
                    <input value="1" name="rate" id="star1" type="radio">
                    <label title="text" for="star1"></label>
                  </div>
                </div>
                <div class="card__precio">20</div><div class="dollar">$</div>

                <button style="margin-left: -100px;" href="" class="card__btn btn-add-cart" data-id="`+k+`">Añadir <i style="font-size: 10px;" class="fa fa-shopping-cart"></i></button>
                <button style="margin-top: -36px; margin-left: 100px;" class="card__btn card__btn-solid">Comprar <i style="font-size: 10px;" class="fa fa-credit-card-alt"></i></button>

            </div>
            </div>
          `;
      
        allContainerPrincipal.appendChild(row);
      }
    
    }
    row="";
        row = document.createElement('div');
        row.classList.add('container-pie');
        row.innerHTML = `<div data-text="Github" style="--r:-15;" class="glass">
        <img class="imagenFoot" src="images/5.jpg" alt="">
        </div>
        <div data-text="Code" style="--r:5;" class="glass">
        <img class="imagenFoot" src="images/5.jpg" alt="">
        </div>
        <div data-text="Earn" style="--r:25;" class="glass" >
          <img class="imagenFoot" src="images/5.jpg" alt="">
        </div>
      </div>
          `;
    allContainerPrincipal.appendChild(row);
    row="";
        row = document.createElement('div');
        row.classList.add('container-button');
        row.setAttribute("onClick", "hogarRedirect()");
        row.innerHTML = `<div class="hover bt-1"></div>
        <div class="hover bt-2"></div>
        <div class="hover bt-3"></div>
        <div class="hover bt-4"></div>
        <div class="hover bt-5"></div>
        <div class="hover bt-6"></div>
        <button onClick="ferreteriaRedirect()" class="boton-vermas"></button>
      </div>
          `;
    allContainerPrincipal.appendChild(row);


    // BELLEZA

    row="";
        row = document.createElement('div');
        row.setAttribute("style", "height: 80px; width: 1350px; margin-top: 70px; margin-left: -5px; background-image: url(images/a.jpg);");
        row.innerHTML = `<h1 style="margin-top: 0px; text-align: center;">BELLEZA</h1>
        </div>
          `;
    allContainerPrincipal.appendChild(row);
    if(cantProductos<10){ 
      for (let k = 0; k < cantProductos; k++) {
        row = document.createElement('div');
        row.classList.add('box-card');
        row.setAttribute("id", k);
        row.innerHTML = `<div class="card">
        <div class="card__img"><img src="images/BOMBILLO.jpg" alt=""></div>
                <div class="card__title">Bombillo Led 9W Bulbo 6500K Rosca E27</div>
                <div class="card__valoracion">
                  <div class="rating">
                    <input value="5" name="rate" id="star5" type="radio">
                    <label title="text" for="star5"></label>
                    <input value="4" name="rate" id="star4" type="radio">
                    <label title="text" for="star4"></label>
                    <input value="3" name="rate" id="star3" type="radio" checked="">
                    <label title="text" for="star3"></label>
                    <input value="2" name="rate" id="star2" type="radio">
                    <label title="text" for="star2"></label>
                    <input value="1" name="rate" id="star1" type="radio">
                    <label title="text" for="star1"></label>
                  </div>
                </div>
                <div class="card__precio">20</div><div class="dollar">$</div>

                <button style="margin-left: -100px;" href="" class="card__btn btn-add-cart" data-id="`+k+`">Añadir <i style="font-size: 10px;" class="fa fa-shopping-cart"></i></button>
                <button style="margin-top: -36px; margin-left: 100px;" class="card__btn card__btn-solid">Comprar <i style="font-size: 10px;" class="fa fa-credit-card-alt"></i></button>

            </div>
            </div>
          `;
      
        allContainerPrincipal.appendChild(row);
      }
    }else{ 
      for (k = 0; k < 10; k++) {
        row = document.createElement('div');
        row.classList.add('box-card');
        row.setAttribute("id", k);
        row.innerHTML = `<div class="card">
        <div class="card__img"><img src="images/BOMBILLO.jpg" alt=""></div>
                <div class="card__title">Bombillo Led 9W Bulbo 6500K Rosca E27</div>
                <div class="card__valoracion">
                  <div class="rating">
                    <input value="5" name="rate" id="star5" type="radio">
                    <label title="text" for="star5"></label>
                    <input value="4" name="rate" id="star4" type="radio">
                    <label title="text" for="star4"></label>
                    <input value="3" name="rate" id="star3" type="radio" checked="">
                    <label title="text" for="star3"></label>
                    <input value="2" name="rate" id="star2" type="radio">
                    <label title="text" for="star2"></label>
                    <input value="1" name="rate" id="star1" type="radio">
                    <label title="text" for="star1"></label>
                  </div>
                </div>
                <div class="card__precio">20</div><div class="dollar">$</div>

                <button style="margin-left: -100px;" href="" class="card__btn btn-add-cart" data-id="`+k+`">Añadir <i style="font-size: 10px;" class="fa fa-shopping-cart"></i></button>
                <button style="margin-top: -36px; margin-left: 100px;" class="card__btn card__btn-solid">Comprar <i style="font-size: 10px;" class="fa fa-credit-card-alt"></i></button>

            </div>
            </div>
          `;
      
        allContainerPrincipal.appendChild(row);
      }
    
    }
    row="";
        row = document.createElement('div');
        row.classList.add('container-pie');
        row.innerHTML = `<div data-text="Github" style="--r:-15;" class="glass">
        <img class="imagenFoot" src="images/5.jpg" alt="">
        </div>
        <div data-text="Code" style="--r:5;" class="glass">
        <img class="imagenFoot" src="images/5.jpg" alt="">
        </div>
        <div data-text="Earn" style="--r:25;" class="glass" >
          <img class="imagenFoot" src="images/5.jpg" alt="">
        </div>
      </div>
          `;
    allContainerPrincipal.appendChild(row);
    row="";
        row = document.createElement('div');
        row.classList.add('container-button');
        row.setAttribute("onClick", "bellezaRedirect()");
        row.innerHTML = `<div class="hover bt-1"></div>
        <div class="hover bt-2"></div>
        <div class="hover bt-3"></div>
        <div class="hover bt-4"></div>
        <div class="hover bt-5"></div>
        <div class="hover bt-6"></div>
        <button onClick="ferreteriaRedirect()" class="boton-vermas"></button>
      </div>
          `;
    allContainerPrincipal.appendChild(row);



    // TECNOLOGIA

    row="";
        row = document.createElement('div');
        row.setAttribute("style", "height: 80px; width: 1350px; margin-top: 70px; margin-left: -5px; background-image: url(images/a.jpg);");
        row.innerHTML = `<h1 style="margin-top: 0px; text-align: center;">TECNOLOGIA</h1>
        </div>
          `;
    allContainerPrincipal.appendChild(row);
    if(cantProductos<10){ 
      for (let k = 0; k < cantProductos; k++) {
        row = document.createElement('div');
        row.classList.add('box-card');
        row.setAttribute("id", k);
        row.innerHTML = `<div class="card">
        <div class="card__img"><img src="images/BOMBILLO.jpg" alt=""></div>
                <div class="card__title">Bombillo Led 9W Bulbo 6500K Rosca E27</div>
                <div class="card__valoracion">
                  <div class="rating">
                    <input value="5" name="rate" id="star5" type="radio">
                    <label title="text" for="star5"></label>
                    <input value="4" name="rate" id="star4" type="radio">
                    <label title="text" for="star4"></label>
                    <input value="3" name="rate" id="star3" type="radio" checked="">
                    <label title="text" for="star3"></label>
                    <input value="2" name="rate" id="star2" type="radio">
                    <label title="text" for="star2"></label>
                    <input value="1" name="rate" id="star1" type="radio">
                    <label title="text" for="star1"></label>
                  </div>
                </div>
                <div class="card__precio">20</div><div class="dollar">$</div>

                <button style="margin-left: -100px;" href="" class="card__btn btn-add-cart" data-id="`+k+`">Añadir <i style="font-size: 10px;" class="fa fa-shopping-cart"></i></button>
                <button style="margin-top: -36px; margin-left: 100px;" class="card__btn card__btn-solid">Comprar <i style="font-size: 10px;" class="fa fa-credit-card-alt"></i></button>

            </div>
            </div>
          `;
      
        allContainerPrincipal.appendChild(row);
      }
    }else{ 
      for (k = 0; k < 10; k++) {
        row = document.createElement('div');
        row.classList.add('box-card');
        row.setAttribute("id", k);
        row.innerHTML = `<div class="card">
        <div class="card__img"><img src="images/BOMBILLO.jpg" alt=""></div>
                <div class="card__title">Bombillo Led 9W Bulbo 6500K Rosca E27</div>
                <div class="card__valoracion">
                  <div class="rating">
                    <input value="5" name="rate" id="star5" type="radio">
                    <label title="text" for="star5"></label>
                    <input value="4" name="rate" id="star4" type="radio">
                    <label title="text" for="star4"></label>
                    <input value="3" name="rate" id="star3" type="radio" checked="">
                    <label title="text" for="star3"></label>
                    <input value="2" name="rate" id="star2" type="radio">
                    <label title="text" for="star2"></label>
                    <input value="1" name="rate" id="star1" type="radio">
                    <label title="text" for="star1"></label>
                  </div>
                </div>
                <div class="card__precio">20</div><div class="dollar">$</div>

                <button style="margin-left: -100px;" href="" class="card__btn btn-add-cart" data-id="`+k+`">Añadir <i style="font-size: 10px;" class="fa fa-shopping-cart"></i></button>
                <button style="margin-top: -36px; margin-left: 100px;" class="card__btn card__btn-solid">Comprar <i style="font-size: 10px;" class="fa fa-credit-card-alt"></i></button>

            </div>
            </div>
          `;
      
        allContainerPrincipal.appendChild(row);
      }
    
    }
    row="";
        row = document.createElement('div');
        row.classList.add('container-pie');
        row.innerHTML = `<div data-text="Github" style="--r:-15;" class="glass">
        <img class="imagenFoot" src="images/5.jpg" alt="">
        </div>
        <div data-text="Code" style="--r:5;" class="glass">
        <img class="imagenFoot" src="images/5.jpg" alt="">
        </div>
        <div data-text="Earn" style="--r:25;" class="glass" >
          <img class="imagenFoot" src="images/5.jpg" alt="">
        </div>
      </div>
          `;
    allContainerPrincipal.appendChild(row);
    row="";
        row = document.createElement('div');
        row.classList.add('container-button');
        row.setAttribute("onClick", "tecnologiaRedirect()");
        row.innerHTML = `<div class="hover bt-1"></div>
        <div class="hover bt-2"></div>
        <div class="hover bt-3"></div>
        <div class="hover bt-4"></div>
        <div class="hover bt-5"></div>
        <div class="hover bt-6"></div>
        <button onClick="ferreteriaRedirect()" class="boton-vermas"></button>
      </div>
          `;
    allContainerPrincipal.appendChild(row);


    // FOOTER

    // row="";
    //     row = document.createElement('div');
    //     row.classList.add('pie-pagina');
    //     row.innerHTML = `<div class="grupo-1">
    //     <div class="box">
    //         <figure>
    //             <a href="#">
    //                 <img src="images/logo.png" alt="Logo de SLee Dw">
    //             </a>
    //         </figure>
    //     </div>
    //     <div class="box">
    //         <h2>SOBRE NOSOTROS:</h2>
    //         <p>Somos una tienda online enfocada en Innovar el ecommerce Venezolano, 
    //             ofreciendo una gran gamma de productos para satisfacer las necesidades de la 
    //             familia venezolana con servicio y productos de calidad garantizada.</p>
    //     </div>
    //     <div class="box">
    //         <h2>SIGUENOS</h2>
    //         <div class="red-social">
    //             <a href="#" class="fa fa-facebook"></a>
    //             <a href="#" class="fa fa-instagram"></a>
    //             <a href="#" class="fa fa-twitter"></a>
    //             <a href="#" class="fa fa-youtube"></a>
    //         </div>
    //     </div>
    // </div>
    // <div class="grupo-2">
    //     <small>&copy; 2024 <b>1Click</b> - Todos los Derechos Reservados.</small>
    // </div>
    //       `;
    // allContainerPrincipal.appendChild(row);
