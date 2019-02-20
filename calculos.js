function calculate(){
   var amount = document.getElementById("amount").value;
   var tip = document.getElementById("tip").value;
   var nPeople = document.getElementById("people").value;

   // Si ningun campo está vacío y el monto no contiene letras
   if( amount != "" &&  tip != "" && nPeople !="" && parseFloat(tip)<=100 && !(/[a-zA-Z]/.exec(amount))){
    
      var sumaTotal = parseFloat(amount)*(parseFloat(tip)/100)+parseFloat(amount);
      var totalInd = sumaTotal/parseFloat(nPeople);

      
      document.getElementsByClassName("results")[0].style.visibility ="visible" ;
      document.getElementsByClassName("results")[1].style.visibility ="visible";
      document.getElementById("disp_total").innerHTML ="$ " + sumaTotal.toFixed(2);
      document.getElementById("disp_individual").innerHTML = "$ " + totalInd.toFixed(2);

      
   }
   else{
       swal({
          title: "Atención",
          text: "Debes completar correctamente todos los campos.",
          icon: "warning" 
       });
   }
   
    
}