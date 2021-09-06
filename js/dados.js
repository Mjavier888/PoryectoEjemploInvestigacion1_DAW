function lanzardados() {
    let dado1 =  getNumRand(1, 6);
    let dado2 =  getNumRand(1, 6);
    let suma = dado1 + dado2;

     document.getElementById("ImgDado1").src="dados/"+dado1+".png";
    document.getElementById("ImgDado2").src="dados/"+dado2+".png";    
    document.getElementById("SumaDados").innerHTML = suma;
}
function getNumRand(min, max) {       
    return Math.round(Math.random()*(max-min)+parseInt(min));
}