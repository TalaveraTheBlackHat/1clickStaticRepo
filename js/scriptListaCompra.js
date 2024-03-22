// window.addEventListener("beforeunload", (evento) => {
//   if (true) {
//     evento.preventDefault();
//     evento.returnValue = "";
//     return "";
//   }
// });
var allContainerPrincipal = document.querySelector('.bodyListaCompra');
var cantProductos=40;
 
  for (let k = 1; k < cantProductos; k++) {
    const row = document.createElement('tr');
    row.classList.add('separadorTablas');
    row.setAttribute("id", "f"+k);
    row.innerHTML = `<td><img style="width: 100px; height: 80px; margin-right: 20px;" src="images/ferreteria.jpg"> BOMBILLO LED 12W BULBO</td>
    <td><a onclick="restarArt(`+k+`)" style="font-weight: bold; cursor: pointer;"><</a>&nbsp;&nbsp;&nbsp;&nbsp;<a id="cantArt`+k+`">1</a>&nbsp;&nbsp;&nbsp;&nbsp;<a onclick="sumarArt(`+k+`)" style="font-weight: bold; cursor: pointer;">></a></td>
    <td id="monto`+k+`">123$</td>
    <td><a class="botonNotiPedi">Ver</a></td>
      `;

    allContainerPrincipal.appendChild(row);
  }
