function seleccionCategoria() {

  $.ajax({
    type: 'GET',
    url: '../productos/categorias',
    success: function(response) {
      
      var productos = response;
      var nombres=[];
      var cdg_idem=[];
      var img=[];
      
      var datos={};
      for (let i = 0; i < response.length; i++) {
        var nombresAux = productos[i].descripcion
        var cont=0;
        var fin="";
        for (let k=0; k < nombresAux.length; k++) {
          if((nombresAux[k] === " ") && (cont < 4)){
            cont++;
            fin=k;
          }
        }
        if(fin){
          nombres[i] = nombresAux.slice(0,fin);
        }
        cdg_idem[i]=productos[i].codigo_idempiere;
        img[i]=productos[i].img_producto;

        datos[nombres[i]]=img[i];
      }
      var options = {
        data: datos
      }


  var elems = document.querySelectorAll('.autocomplete');
  var instances = M.Autocomplete.init(elems, options);

  }
  });
  
};
document.addEventListener('DOMContentLoaded', seleccionCategoria);