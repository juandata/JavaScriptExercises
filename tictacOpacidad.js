var combArr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]], player1 = [],  player2 = [], arrT = [2,4,8], arrT2 = [4,2,6], triqui = 0, triqui2 = 0,  player1M = 0, player2M = 0, empates = 0, toe = document.getElementsByClassName("toe"), toeArr = [], idArr = [], opc = "",turno = false, opcId = "", aleatorio, triquiId = [], huboTriqui = false, playerComenzo = false, seraTriqui = 0, triqui3 = 0, triquiId2 = [], aleatorio2, huboEmpate = false;

for(var i = 0; i < toe.length; i ++){
  toe[i].addEventListener("click", dibujar);
  var id = i.toString();
  toe[i].setAttribute("id", id);
  toeArr.push(i);
}
document.getElementById("opcion").addEventListener("click", eleccion);
document.getElementById("opcion2").addEventListener("click",eleccion);

function aleat(){
  aleatorio = Math.round(Math.random()  * (8 - 0) + 0);
  Math.round(aleatorio);
  return aleatorio;
}
  function opacidad() {
    setTimeout(function(){
       var mos = document.getElementsByClassName("noMostrar");
    for (var i = 0; i < mos.length; i ++){
      mos[i].style.transition = "1s"
      mos[i].style.opacity = "1";
    }
    
    }, 500);
    }
function eleccion(el) {
   opc = el.currentTarget.innerHTML;
   opcId = el.currentTarget.id;
    var quienComienza = aleat();
  if(quienComienza <= 4){
     playerComenzo = false; turnoComp();
     }
  else { playerComenzo = true;}
 }
function dibujar(eleccion){
 huboEmpate = false;
  if( idArr.indexOf(parseInt(eleccion.currentTarget.id))  == -1 )
     {
  if (turno == false) { 
    //DIBUJO
   
     eleccion.currentTarget.innerHTML = "<span class='noMostrar'>" + opc + "</span>";
    opacidad();
  
  var lastId = parseInt(eleccion.currentTarget.id);
  idArr.push(lastId); turno = true;  
    player1.push(lastId);
    
    //revisar triqui
    for( var i = 0; i < combArr.length; i ++) {
  triqui = 0; triquiId = [];
  for(var z = 0; z < player1.length; z ++) {
   if(combArr[i].includes(player1[z]) == true){
   triqui += 1;  triquiId.push(player1[z]);
  if (triqui == 3) {
     huboTriqui = true;
     triquiId.sort();
     document.getElementById(triquiId[0]).style.color = "red";
     document.getElementById(triquiId[1]).style.color = "red";
     document.getElementById(triquiId[2]).style.color = "red";
     
     setTimeout(function(){ 
    triqui = 0; triqui2 = 0;
    for (var i = 0; i < toe.length; i ++){
      player1 = []; player2 = [];  idArr = [];  turno = false; 
       toe[i].style.color = "inherit";
        toe[i].innerHTML = ""; 
    
    
    }
     player1M += 1; return;
     }, 2000);
     if(playerComenzo == true) {
       setTimeout(function(){
         playerComenzo = false; turnoComp(); 
       }, 2000);
     }
    else { playerComenzo = true;}
      
       } //hubo triqui 
     else if (idArr.length == 9 && triqui != 3) { //hubo empate 
       huboEmpate = true;
        
         setTimeout(function(){
          
            
        for (var i = 0; i < toe.length; i ++){
              toe[i].innerHTML = ""; //empates +=1; 
          turno = false;  player1 = []; player2 = [];  idArr = [];  
            }
            }, 2000);
         if(playerComenzo == true) {
       setTimeout(function(){
         playerComenzo = false; turnoComp(); 
       
         }, 2000);
     }
    else { playerComenzo = true;}
         
       } 
     // hubo empate
     }
   }
}
    if(huboEmpate == true) {
      empates += 1; marcadores();
    }
    
    if(idArr.length <= 8 && huboTriqui == false){
      turnoComp();
    }
    huboTriqui = false;
  }
  }
}
function turnoComp(){
  huboEmpate = false;
  aleatorio = aleat();
  aleatorio2 = undefined; 
  /*aleatorio = aleat();
  while(idArr.indexOf(aleatorio) != -1){
        aleatorio = aleat();
        }*/   
  //si el rival no ha jugado o ha jugado una vez y no escoge par
  /*if(player1.length <= 1 ) { 
 
    while(idArr.indexOf(aleatorio) != -1 || aleatorio == 1 || aleatorio == 3 || aleatorio == 5 || aleatorio == 7){
        aleatorio = aleat();
        }
  }  
  */
  // SI LAS CONDICIONES DE ABAJO NO SE CUMPLEN ENTONCES ES PRIMER TURNO DE LA COMPU Y GENERAR UNA ESQUINA
  /*
  if(player1.length <= 1 ) { 
 
    while(idArr.indexOf(aleatorio) != -1 || aleatorio == 1 || aleatorio == 3 || aleatorio == 5 || aleatorio == 7){
        aleatorio = aleat();
        }
  }  */
  // generar un par aleatorio si el player ha jugado y compu también
  if(player1.length <= 1 ) { 
 
    while(idArr.indexOf(aleatorio) != -1 || aleatorio == 1 || aleatorio == 3 || aleatorio == 5 || aleatorio == 7){
        aleatorio = aleat();
        }
  } 
  
  //so compu no ha jugado y player 1 escoge en primer turno un par que no es 4
  if( player2.length == 0 && player1.length == 1 && player1[0] % 2 == 0 && player1[0] != 4 && idArr.indexOf(4) == -1 ){ 
   aleatorio = 4; 
  }
  //si compu no ha jugado y player 1 escoge en primer turno el 4 entonces genera aleatorio hasta encontrar una esquina
  else if( player2.length == 0 && player1.length == 1 && player1[0] == 4 ){ 
   while(idArr.indexOf(aleatorio) != -1 || aleatorio == 1 || aleatorio == 3 || aleatorio == 5 || aleatorio == 7){
        aleatorio = aleat();
        }
  }  
  //entonces si compu no ha jugado y player 1 escoge en primer turno una casilla que no es par escoger una esquina
   else if( player2.length == 0 && player1.length == 1 && player1[0] % 2 != 0 ){ 
   while(idArr.indexOf(aleatorio) != -1 || aleatorio == 1 || aleatorio == 3 || aleatorio == 5 || aleatorio == 7){
        aleatorio = aleat();
        }
  }  
  //si las condiciones anteriores no se cumplen y ninguno ha jugado es el primer turno de la computadora
  else if ( player2.length == 0 && player1.length == 0) {
            while(idArr.indexOf(aleatorio) != -1 || aleatorio == 1 || aleatorio == 3 || aleatorio == 5 || aleatorio == 7){
        aleatorio = aleat();
        }
           }
  
 

  else if (player1.length >= 2) {
    //revisar que no vaya a hacer triqui
  
    
       for( var i = 0; i < combArr.length; i ++) {
  triqui2 = 0; triquiId = []; triqui3 = 0; triquiId2 = [];
          for(var z = 0; z < player1.length; z ++) {
           if(combArr[i].includes(player1[z]) == true){
             triqui2 += 1;  triquiId.push(player1[z]);
             if(triqui2 == 2) {
       combArr[i].forEach(function(cv, ind, arr){
          if(idArr.indexOf(cv) == -1 && triquiId.indexOf(cv) == -1){ //si no está
                  //es el que hace falta para que haga triqui
                    aleatorio = cv; 
                  }
                });
                
             }
           }
        }
         if(player2.length >=2){
          for(var h = 0; h < player2.length; h ++) {
           if(combArr[i].includes(player2[h]) == true){
           triqui3 += 1;  triquiId2.push(player2[h]);
              if(triqui3 == 2) {
                //reviso si puedo hacer triqui
                 combArr[i].forEach(function(cv, ind, arr){
          if(idArr.indexOf(cv) == -1 && triquiId2.indexOf(cv) == -1){ //si no está
                  //es el que hace falta para que haga triqui
           aleatorio = cv; 
            aleatorio2 = cv;
            
                  } 
                   
                });
              }
           }
         }  
       }
   }
    
      if( idArr.indexOf(aleatorio) != -1){
         while(idArr.indexOf(aleatorio) != -1){
        aleatorio = aleat();
        }
          }
  }
    if (aleatorio2 != undefined && idArr.indexOf(aleatorio2) == -1){
      aleatorio = aleatorio2; 
      }
  
  if(opcId == "opcion"){
    
  toe[aleatorio].innerHTML = "<span class='noMostrar'>"  + '<img src="https://raw.githubusercontent.com/juandata/medios/master/fireCircle.gif" alt="circle" class="img">' + "</span>";
    opacidad();
    
  idArr.push(aleatorio); turno = false; 
    player2.push(aleatorio);
      for( var i = 0; i < combArr.length; i ++) {
  triqui2 = 0; triquiId = []; 
  for(var z = 0; z < player2.length; z ++) {
   if(combArr[i].includes(player2[z]) == true){
   triqui2 += 1;  triquiId.push(player2[z]);
  if (triqui2 == 3) {
     triquiId.sort();
    document.getElementById(triquiId[0]).style.border = "solid red 3px";
     document.getElementById(triquiId[1]).style.border = "solid red 3px";
     document.getElementById(triquiId[2]).style.border = "solid red 3px";
    setTimeout(function(){ 
    triqui = 0; triqui2 = 0;
    for (var i = 0; i < toe.length; i ++){
       player1 = []; player2 = [];  idArr = []; turno = false;  //cambiar turno a true
      toe[i].style.border = "solid white"; toe[i].innerHTML = "";
    }
    player2M += 1; marcadores();}, 2000);
    
    } 
     //ojo
     else if (idArr.length == 9 && triqui != 3) { //empate
       huboEmpate = true;
         setTimeout(function(){
        for (var i = 0; i < toe.length; i ++){
              toe[i].innerHTML = ""; turno = false;  player1 = []; player2 = [];  idArr = [];  
            }
            }, 2000);
      
       }
     }
   }
}
      if (huboEmpate == true){
        empates += 1; marcadores();
      }
       }
    else {
      
        toe[aleatorio].innerHTML = "<span class='noMostrar'>"  +  '<img src="https://raw.githubusercontent.com/juandata/medios/master/ocean.gif" alt="cross" class="img">' + "</span>";
      opacidad();
        idArr.push(aleatorio); turno = false; 
        player2.push(aleatorio);
         for( var i = 0; i < combArr.length; i ++) {
  triqui2 = 0; triquiId = []; 
  for(var z = 0; z < player2.length; z ++) {
   if(combArr[i].includes(player2[z]) == true){
   triqui2 += 1; triquiId.push(player2[z]);
  if (triqui2 == 3) {
      triquiId.sort();
    document.getElementById(triquiId[0]).style.border = "solid red 3px";
     document.getElementById(triquiId[1]).style.border = "solid red 3px";
     document.getElementById(triquiId[2]).style.border = "solid red 3px";
    setTimeout(function(){
    triqui = 0; triqui2 = 0;
    for (var i = 0; i < toe.length; i ++){
     player1 = []; player2 = [];  idArr = [];  turno = false;//cambiar turno a true
       toe[i].style.border = "solid white"; toe[i].innerHTML = "";
    }
       player2M += 1; marcadores();
    }, 3000);
    
  } 
     //ojo
        else if (idArr.length == 9 && triqui != 3) { //empate
          huboEmpate = true;
          setTimeout(function(){
        for (var i = 0; i < toe.length; i ++){
              toe[i].innerHTML = "";   turno = false;  player1 = []; player2 = [];  idArr = [];  
            }
            }, 2000);
        
         
       }
     
     }
   }
}
      if (huboEmpate == true){
        empates += 1; marcadores();
      }
      
    }
  }
function marcadores(){
  document.getElementById("player1M").innerHTML = "P1: " + player1M;
  document.getElementById("player2M").innerHTML = "P2: " + player2M;
  document.getElementById("empates").innerHTML = "Draws: " + empates;
}
//navegación

var x = document.getElementsByClassName("tab");
for(var i = 0; i < x.length; i ++){
  x[i].style.display = "none";
}
x[0].style.display = "block"; 
document.getElementById("prev").style.display = "none";
document.getElementById("restart").style.display = "none";
var show = 0;
function next(n){
  var x = document.getElementsByClassName("tab");
 show += n; 
  if(show < 0){
     show = x.length - 1;
     }
  else if (show > x.length - 1) {
           show = 0;
           }
  for(var i = 0; i < x.length; i ++){
  x[i].style.display = "none";
}
    x[show].style.display = "block";
  if(show == 1 ){
     document.getElementById("prev").style.display = "block";
     }
  else if (show == 0){
       document.getElementById("next").style.display = "block";
    document.getElementById("prev").style.display = "none";
    document.getElementById("restart").style.display = "none";
           }
  else if (show == 2) {
     document.getElementById("prev").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("restart").style.display = "block";
           }  
}


