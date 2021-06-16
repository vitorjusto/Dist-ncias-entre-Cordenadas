function conta()
{
      var a = [0,0];
      var b = [0,0];
      
      a[0] = Number(document.getElementById("Ax").value);
      a[1] = Number(document.getElementById("Ay").value);
      
      b[0] = Number(document.getElementById("Bx").value);
      b[1] = Number(document.getElementById("By").value);


      var resultado;
      resultado = Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
      document.getElementById("resultado").innerHTML= resultado;
}
