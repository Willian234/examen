function guardar(){
    var Mesa = document.getElementById("mesa").value;
    var Cliente = document.getElementById("nombre").value;
    var DNI = document.getElementById("Dni").value;
    var plato = document.getElementById("d").value;
    var precio = document.getElementById("e").value;
    var cantidad = document.getElementById("f").value;
    var id = document.getElementById("a").value;
    var fila = "<tr><td>"+id+"</td><td>"+Mesa+"</td><td>"+Cliente+"</td><td>"+DNI+"</td></tr>";
    document.getElementById("h").insertRow(-1).innerHTML = fila;
    document.getElementById("i").insertRow(-1).innerHTML = "<tr><td>"+id+"</td><td>"+plato+"</td><td>"+precio+"</td><td>"+cantidad+"</td></tr>";
    
  }
  
  function myDeleteFunction()
  {
  document.getElementById("h").deleteRow(0);

}
function DeleteFunction(){
    document.getElementById("i").deleteRow(0);
}