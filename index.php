<?php
// Start the session
  include ("../exercises/dbcon.php");
?> 
<!DOCTYPE html>
<html>
  <head>
    <title>Indice</title>
  </head>
  <body>
    <div>
      <?php 
        $query = 'Select * from regis001 where titular = 4 order by fechain desc, fechare desc ';
        if ( $regis001 = $enlace->query($query)) {
          if ($regis001->num_rows != 0){
            $fields = $regis001->fetch_fields();
            foreach ($fields as $info){
              echo "Nombre: ".$info->name." Tipo: ".$info->type."<br>";
            }
            
            while ($row = $regis001->fetch_row()){
              foreach ($row as $clave => $value) {
                echo $clave.": ".$value." ".gettype($value)."<br>";
              }
              break;
            }
          }
          $regis001->free();
        }
        $data = array(1, 1., NULL, new stdClass, 'foo');

        foreach ($data as $value) {
            echo gettype($value), "<br>";
        }        
      ?> 
    </div>
  </body>
</html>