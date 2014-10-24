var parejas =0;
var carta1 ;
var carta2 ;
var bandera =true;//verdadero paso 1 falso paso 2
//agregamos estas lineas aca######################################################################################
var lista = [1,2,3];//esta-- numero de cartas diferentes si lo cambias agrega sus respectivas imagenes en imagenes/
lista = lista.concat(lista);//duplica el arreglo para que aya 2 de cada carta
lista = lista.sort(function () { return Math.random() - 0.5; });//rebuelve el arreglo aleatoriamente
var tab = document.getElementById("tablero");//guarda el tablero para alterarlo mas facilmente
tab.innerHTML = "";//borra el tablero
for(var j=0;j<lista.length;j++){//crea un tablero nuevo ya rebuelto
  tab.innerHTML=tab.innerHTML +"<div class='carta'><img src='imagenes/"+lista[j]+".png'></img></div>\n";//crea las cajas y sus cartas
}//
//ya tablero aleatorio :)########################################################################################
var cartas = document.querySelectorAll(".carta");
function voltear (e) {
  if(e.target.parentNode.classList.length=1){
    if(bandera){
      if(carta1 && carta2){
        if(carta1.src != carta2.src){
          carta1.parentNode.classList.remove("visible");
          carta2.parentNode.classList.remove("visible");
        }
      }
    }
    if(bandera){
      e.target.parentNode.classList.add("visible");
      carta1=e.target;
      bandera=false;
    }else{
      e.target.parentNode.classList.add("visible");
      carta2=e.target;
      if(carta1.src == carta2.src){
        parejas++;
        bandera=true;
        if(parejas==3){
          alert("ganaste");//ganaste
        }
      }
      bandera=true;
    }
  }
}

for(var i=0;i<cartas.length;i++){
  cartas[i].addEventListener("click", voltear, false);
}
