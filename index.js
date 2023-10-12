let result = 0; //variable inicializada en 0
console.log("Calculadora")
let number1 = parseFloat(prompt("Ingrese el primer número:"));
let number2 = parseFloat(prompt("Ingrese el segundo número:"));

console.log("1. Sumar");
console.log("2. Restar");
console.log("3. Multiplicar");
console.log("4. Dividir");


let operacion = parseInt(prompt("Seleccione una operación (1/2/3/4):"));

switch (operacion) {
  case 1:  //sum
    result = number1 + number2;
    break;
  case 2:  //rest
    result = number1 - number2;
    break;
  case 3:  //mult
    result = number1 * number2;
    break;
  case 4:  //div
    if (number2 !== 0) {
      result = number1 / number2;
    } else {
      console.log("No se puede dividir por 0.");
      return;
    }
    break;
  default:
    console.log("Operación no válida.");
    return;
}

console.log("Resultado actual:", result);
//aca le hacemos un while para hacer un loop hasta que el usuario desee salir 
while (true) {
  let continuar = prompt("¿Desea operar con un número adicional? (sí/no)");

  if (continuar.toLowerCase() !== "sí" && continuar.toLowerCase() !== "si") {
    console.log("El resultado final es:", result);
    break;
  }

  let number3 = parseFloat(prompt("Ingrese el siguiente número:"));//numero 3, para que despues operemos los resultados con la variable resultado inicializada en 0 al principio, la cual tendria le resultado de la operacion anterior

  console.log("1. Sumar");
  console.log("2. Restar");
  console.log("3. Multiplicar");
  console.log("4. Dividir");


  let nextOperacion = parseInt(prompt("Seleccione una operación (1/2/3/4):"));

  switch (nextOperacion) {
    case 1:  //sum
      result += number3;
      break;
    case 2:  //rest
      result -= number3;
      break;
    case 3:  //mult
      result *= number3;
      break;
    case 4:  //div
      if (number3 !== 0) {
        result /= number3;
      } else {
        console.log("No se puede dividir por 0.");
        return;
      }
      break;
    default:
      console.log("Operación no válida.");
      return;
  }

  console.log("Resultado actual:", result);
}