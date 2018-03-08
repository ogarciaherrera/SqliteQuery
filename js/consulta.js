var db;
// var base = "ejercicios";
// var ver = "1.0";
// var desc = "bd para practicas";
// var size = 2 * 1024 *1024;

var base = "puntoventa";
var ver = "1.0";
var desc = "Control de puntoventa";
var size = 2 * 1024 *1024;


window.onload = function(){
  if (!window.openDatabase) {
    alert('Este navegador NO soporta el API WebSQL');
    return;
  } 
  //Abrimos o creamos una base de datos
  db = openDatabase(base, ver, desc, size);
}

$(document).ready(function() {
  $("#eject").click(function(){
    var q = $("#query").val();
    db.transaction(function(tx){
      tx.executeSql(q,[],function (tx, data) {
        var regs = data.rows.length;
        var cadena = "";
        if(regs != 0){
          var icampos = Object.keys(data.rows.item(0)).length;
          cadena += "<table>";          
          for (var i = 0; i < icampos; i++) {
            cadena += "<th>"+Object.keys(data.rows.item(0))[i]+"</th>";
          }
          for (var i = 0; i < regs; i++) {
            cadena += "<tr>";
            for (var j = 0; j < icampos; j++) {
              cadena += "<td>"+Object.values(data.rows.item(i))[j]+"</td>";
            }
            cadena += "</tr>";
          }
          cadena += "</table>";
        }
        else { cadena += "<p>Consulta finalizada sin resultados</p>" }
        document.getElementById('resultado').innerHTML = cadena;
      });
    },errorHandler, exito);    
  })
})

function errorHandler(e) {
  console.log("error: "+e.message);
  var error = "<p>error: "+e.message+"</p>";
  document.getElementById('resultado').innerHTML = error;
}

function exito() {
  console.log("Correcto");
  //selectCategorias();
}
