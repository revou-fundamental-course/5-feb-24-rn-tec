document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;
document.getElementById('reserve').onclick = reserveid;

function tempConvert() {

    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

    if (celsius != '') {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
        //document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
        document.getElementById("result").innerHTML = parseFloat(fahrenheit) + "&#176; F";
        document.getElementById("resul").innerHTML = celsius + "*(9/5)+32 = " + parseFloat(fahrenheit) + "&#176; F";
    } else {
        celsius = (parseFloat(fahrenheit) -32) /1.8;
        //document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
        document.getElementById("result").innerHTML = parseFloat(celsius) + "&#176; C";
        document.getElementById("resul").innerHTML = fahrenheit + "-32*(5/9) = " +parseFloat(celsius) + "&#176; C";
    }


}

function clearForm() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('resul').innerHTML = '';
}

function reserveid() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;
    
    temporary = celsius;
    celsius=fahrenheit;
    fahrenheit=temporary;
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);

}