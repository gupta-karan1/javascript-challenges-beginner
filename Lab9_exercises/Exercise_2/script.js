function btnPress() {
  buttonCount++;
  document.getElementById("btnClicks").innerHTML = buttonCount;

  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);

  document.getElementById("number1").innerHTML = num1;
  document.getElementById("number2").innerHTML = num2;

  let sum = num1 + num2;
  let multiply = num1 * num2;

  document.getElementById("sumNum").innerHTML = sum;
  document.getElementById("multiplyNum").innerHTML = multiply;
}
