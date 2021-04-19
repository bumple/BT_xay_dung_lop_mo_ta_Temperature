function Temperature(c) {
    this.c = c;

    this.convertCtoF = function () {
        F = c * 1.8 + 32;
        return F;
    }

    this.convertCtoK = function () {
        K = c + 273.15;
        return K;
    }
}

let temperature = new Temperature(25);

let doF = temperature.convertCtoF();
document.getElementById("demo").innerHTML = 25 + " độ C = " + doF + " độ F <br>"
let doK = temperature.convertCtoK();
document.getElementById("demo1").innerHTML = 25 + " độ C = " + doK + " độ K"