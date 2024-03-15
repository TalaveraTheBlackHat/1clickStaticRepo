function filtadoElectrico(){
    if(document.getElementById("electrico").title === "off"){
      document.getElementById("electrico").title = "on";
      document.getElementById("electrico").style.background="#F26D43";

      document.getElementById("manual").title = "off";
      document.getElementById("manual").style.background="#fff";
      document.getElementById("iluminacion").title = "off";
      document.getElementById("iluminacion").style.background="#fff";
      document.getElementById("automotriz").title = "off";
      document.getElementById("automotriz").style.background="#fff";
    
    }
    else{
    document.getElementById("electrico").title = "off";
    document.getElementById("electrico").style.background="#fff";
    }
    
}

function filtadoManual(){
    if(document.getElementById("manual").title === "off"){
      document.getElementById("manual").title = "on";
      document.getElementById("manual").style.background="#F26D43";

      document.getElementById("electrico").title = "off";
      document.getElementById("electrico").style.background="#fff";
      document.getElementById("iluminacion").title = "off";
      document.getElementById("iluminacion").style.background="#fff";
      document.getElementById("automotriz").title = "off";
      document.getElementById("automotriz").style.background="#fff";
    }
    else{
      document.getElementById("manual").title = "off";
      document.getElementById("manual").style.background="#fff";
    }
}

function filtadoIluminacion(){
    if(document.getElementById("iluminacion").title === "off"){
      document.getElementById("iluminacion").title = "on";
      document.getElementById("iluminacion").style.background="#F26D43";

      document.getElementById("manual").title = "off";
      document.getElementById("manual").style.background="#fff";
      document.getElementById("electrico").title = "off";
      document.getElementById("electrico").style.background="#fff";
      document.getElementById("automotriz").title = "off";
      document.getElementById("automotriz").style.background="#fff";
    }
    else{
      document.getElementById("iluminacion").title = "off";
      document.getElementById("iluminacion").style.background="#fff";
    }
}

function filtadoAutomotriz(){
    if(document.getElementById("automotriz").title === "off"){
      document.getElementById("automotriz").title = "on";
      document.getElementById("automotriz").style.background="#F26D43";

      document.getElementById("manual").title = "off";
      document.getElementById("manual").style.background="#fff";
      document.getElementById("iluminacion").title = "off";
      document.getElementById("iluminacion").style.background="#fff";
      document.getElementById("electrico").title = "off";
      document.getElementById("electrico").style.background="#fff";
    }
    else{
      document.getElementById("automotriz").title = "off";
      document.getElementById("automotriz").style.background="#fff";
    }
}
 
function precioMayorMenor(){
    if(document.getElementById("mayorMenor").title === "off"){
      document.getElementById("mayorMenor").title = "on";
      document.getElementById("mayorMenor").style.background="#F26D43";

      document.getElementById("menorMayor").title = "off";
      document.getElementById("menorMayor").style.background="#fff";
    }
    else{
      document.getElementById("mayorMenor").title = "off";
      document.getElementById("mayorMenor").style.background="#fff";
    }
}

function precioMenorMayor(){
    if(document.getElementById("menorMayor").title === "off"){
      document.getElementById("menorMayor").title = "on";
      document.getElementById("menorMayor").style.background="#F26D43";

      document.getElementById("mayorMenor").title = "off";
      document.getElementById("mayorMenor").style.background="#fff";
    }
    else{
      document.getElementById("menorMayor").title = "off";
      document.getElementById("menorMayor").style.background="#fff";
    }
}

function precioMayor(){
    var precio = "";
    if(document.getElementById("minMayor").value > 0){
      precio = document.getElementById("minMayor").value;
      var precio =parseFloat(precio);
    }
}
  
function precioMenor(){
    if(document.getElementById("maxMenor").value > 0){
      var precio = document.getElementById("maxMenor").value;
      var precio =parseFloat(precio);
    }
}
