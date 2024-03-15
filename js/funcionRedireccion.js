function ferreteriaRedirect()
{
  window.location.href="ferreteria";
}
function hogarRedirect()
{
  cation.href="hogar";
}
function bellezaRedirect()
{
  window.location.href="belleza";
}
function tecnologiaRedirect()
{
  window.location.href="tecnologia";
}
function promocionRedirect()
{
  // EXTRACCION DE ID DEL USUARIO DESDE LA URL (POR PARAMETROS)
  var URLactual = window.location;
  var URLstring = Object.values(URLactual);
  URLstring = URLstring[1];
  longString = URLstring.length - 1;
  var cont=0;
  var inicio = "";
  var idUser = "";

  for (let i = longString; i > 0; i--) {
    if((URLstring[i] === "/") && (cont === 0)){
      cont=1;
      inicio=i;
    }
  }
  
  if(inicio){
    idUser = URLstring.slice(inicio+1,);

    window.location.href="../promo1click/"+idUser+"";
  }
  else{
    window.location.href="../promo1click";
  }
  // END EXTRACCION DE ID DEL USUARIO
  
}
