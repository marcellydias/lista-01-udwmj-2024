<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculo IMC</title>
    <script>
 var nome = prompt("Digite seu nome: ")
 var altura = prompt("Digite sua altura em centímetros: ")
 var peso = prompt("Digite seu peso: ")

  altura = parseFloat(altura)
  peso = parseFloat(peso)
  altura = altura/100

 var imc = peso / (altura * altura)
  imc = imc.toFixed(2)
 
 var classificacao=""

 if (imc<16) {
  classificacao = "Baixo peso muito grave" 
 }

 else if (imc>=16 && imc<=16.99){
  classificacao = "Baixo peso grave"
 }

 else if(imc>=17 && imc<=18.49) {
  classificacao = "Baixo peso"
 }

 else if(imc>=18.50 && imc<=24.99){
  classificacao = "Peso normal"
 }

 else if(imc>=25 && imc<=29.99){
  classificacao = "Sobrepeso"
 }

 else if(imc>=30 && imc<=34.99){
  classificacao = "Obesidade grau I"
 }

 else if(imc>=35 && imc<=39.99){
  classificacao = "Obesidade grau II"
 }

 else {
  classificacao = "Obesidade grau III"
 }

 document.write(nome + " possui indíce de massa corporal igual a " + imc+ " sendo classificado como " + classificacao)

    </script>
</head>
<body>
    
</body>
</html>
