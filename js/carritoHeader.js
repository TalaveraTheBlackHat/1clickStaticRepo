//variables
var allContainerCart = document.querySelector('.contenedorInterno');
var containerBuyCart = document.querySelector('.card-items');
var cardProduct = document.querySelector('.card');
var priceTotal = document.querySelector('.precioTotal')
var amountProduct = document.querySelector('.count-product');
var buyThings = [];
var totalCard = 0;
var countProduct = 0;
// Definir la lista de ganadores como variable global
var listaCarrito;
var i=0;
//CARGA O INICIALIZA LOCALSTORAGE

window.onload = function(){
listaCarrito = JSON.parse(localStorage.getItem("valores")) || [];

if(listaCarrito){
cargarCarrito();}
}


//FUNCIONES Y EVENTOS
function loadEventListenrs(){
    containerBuyCart = document.querySelector('.card-items');
    if(allContainerCart) allContainerCart.addEventListener('click', addProduct);
    if(containerBuyCart) containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement; 
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {  
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');
        value = listaCarrito.filter(listaCarrito => listaCarrito.identificador == deleteId);

            value.forEach(value => {
            if (value.identificador == deleteId) {
                var priceReduce = parseFloat(value.precio) * parseFloat(value.cantidad);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);        

                listaCarrito = listaCarrito.filter(listaCarrito => listaCarrito.identificador != value.identificador);
                localStorage.setItem("valores", JSON.stringify(listaCarrito));

            }
        });
        
        countProduct--;

        cargarCarrito();
        
            
    }
    //FIX: El contador se quedaba con "1" aunque no existiera (0) productos
    if ((buyThings.length === 0) && (value.length === 0)){
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    } 
   
}

function readTheContent(product){

    var precioA = product.querySelector('.card__precio').textContent;
    precioA = precioA.slice(0,precioA.length-1);

    var stock = product.querySelector('.stockDisponible').textContent;
    var idProducto = product.querySelector('button').getAttribute('data-id');

    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.card__title').textContent,
        price: precioA,
        id: product.querySelector('button').getAttribute('data-id'),
        amount: 1,
        stock: stock
    }
    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);
    
    listaContar = listaCarrito.filter(listaCarrito => listaCarrito.identificador == idProducto);
    
    if(listaContar.length+1 <= stock){
        //CARGAR DATOS A LOCALSTORAGE

        listaCarrito.push({
            identificador: infoProduct.id,
            imagen: infoProduct.image,
            descripcion: infoProduct.title,
            precio: infoProduct.price,
            cantidad: infoProduct.amount,
            stockProduct: infoProduct.stock
          });
          // Guarda los datos en localStorage
          localStorage.setItem("valores", JSON.stringify(listaCarrito));
          //FIN DE LA CARGAR DE DATOS
          Swal.fire('Carrito de Compras', 'Su Articulo se ha Agregado Exitosamente al Carrito!', 'success');
        cargarCarrito();
    }
    else{
        Swal.fire('Aviso de Stock', 'No hay más stock de este articulo, si pudo agregar alguno al carrito, lo puede comprar.', 'error');
        cargarCarrito();
    }


    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    
    
    //console.log(infoProduct);
}

// function loadHtml(){
    
//     buyThings.forEach(product => {
//         const {image, title, price, amount, id} = product;
//         const row = document.createElement('div');
//         row.classList.add('item-new');
//         row.innerHTML = `
//             <img src="${image}" alt="" style="width=80px; height: 80px; float: left;">
//             <div class="item-contenido">
//                 <h5>${title}</h5>
//                 <h5 class="cart-price">${price}$</h5>
//                 <h6>Cantidad: ${amount}</h6>
//             </div>
//             <span class="delete-product" data-id="${id}">X</span>
//         `;

//         containerBuyCart.appendChild(row);
//         priceTotal.innerHTML = totalCard;
//         amountProduct.innerHTML = countProduct;      
//     });
    
//     cargarCarrito();
// }

function clearHtml(){
    containerBuyCart.innerHTML='';
}

function cargarCarrito(){
    totalCard=0;
    countProduct=0;
    cantArticulos=listaCarrito.length;
    var precioGuardar=0;
    var acomudador=[];
    var acomudadorLista=[];
    let contando=0;
    let k=0;
    let i=0;
    //CICLO PARA EXTRAER LAS POSICIONES
    clearHtml();
    
    for (let i = 0; i < cantArticulos; i++) {
        acomudador.push(listaCarrito[i].identificador);
    }
    acomudador=acomudador.sort();
    let cicloAcomulador=acomudador.length;
    
    for (i = 0; i < cicloAcomulador; i++){
        for (k = i; k < cicloAcomulador; k++) {

            if ((acomudador[i]===acomudador[k+1])) {
                contando=contando+1;
            }else{
                acomudadorLista.push(acomudador[k]);
                i=k;
                k=cicloAcomulador;
                
            }

        } 
    }
    
    localStorage.setItem('idProductos', JSON.stringify(acomudadorLista));

    for(let i = 0; i < acomudadorLista.length; i++) { 
        listaGuardar = listaCarrito.filter(listaCarrito => listaCarrito.identificador == acomudadorLista[i]);
      
        if(listaGuardar){
            precioGuardar=parseFloat(listaGuardar[0].precio)*parseInt(listaGuardar.length);
            precioGuardar = precioGuardar.toFixed(2);
            const row = document.createElement('div');
                row.classList.add('item-new');
                row.innerHTML = `
                    <img src="${listaGuardar[0].imagen}" alt="" style="width=80px; height: 80px; float: left;">
                    <div class="item-contenido">
                    <h5 style="font-size: .8rem;">${listaGuardar[0].descripcion}</h5>
                    <h5 class="cart-price" style="font-size: .9rem">${precioGuardar}$</h5>
                    <h6>Cantidad: ${listaGuardar.length}</h6>
                    </div>
                    <span style="margin-left: 350px;" class="delete-product" data-id="${listaGuardar[0].identificador}">X</span>
                `; 
            totalCard=parseFloat(precioGuardar)+totalCard;
            countProduct=parseInt(listaGuardar[0].cantidad)+countProduct;
            containerBuyCart.appendChild(row);}
    }    
        
    priceTotal.innerHTML = totalCard.toFixed(2);
    amountProduct.innerHTML = countProduct;    
    
    loadEventListenrs();
    return listaCarrito;
}

function limpiarCarrito(){
    localStorage.clear();
    containerBuyCart.innerHTML = '';
    priceTotal.innerHTML = 0;
    amountProduct.innerHTML = 0;
}
