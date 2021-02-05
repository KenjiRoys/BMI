function calculate() {
    let name = document.getElementById('name');
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let result = document.getElementById('result')
    
    let value1 = Number(num1.value);
    let value2 = Number(num2.value);
    result.innerHTML = name.value + " your BMI is " + value1 / (value2 * value2);
}