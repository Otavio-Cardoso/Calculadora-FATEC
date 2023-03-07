//window.alert("JavaScript carregado corretamente")
let bt0;
let bt1;
let bt2;
let bt3;
let bt4;
let bt5;
let bt6;
let bt7
let bt8;
let bt9;

let btSoma;
let btSub;
let btMult;
let btDiv;
let btPonto;
let btIgual;
let btCe;

let txtauxiliar;
let txtdisplay;
let txtoperador;

txtdisplay = document.getElementById("display");
txtoperador = document.getElementById("operador");
txtauxiliar = document.getElementById("auxiliar");

bt0 = document.getElementById("b0");
bt0.onclick = function () { txtdisplay.value += bt0.value; }

bt1 = document.getElementById("b1");
bt1.addEventListener("click", function () { digito(bt1); });

bt2 = document.getElementById("b2");
bt2.onclick = function () { digito(bt2); }

bt3 = document.getElementById("b3");
bt3.onclick = function () { digito(this); }

bt4 = document.getElementById("b4");
bt4.addEventListener("click", function () { digito(this); });

bt5 = document.getElementById("b5");
bt5.onclick = function () { digito(this); }

bt6 = document.getElementById("b6");
bt6.onclick = function () { digito(this); }

bt7 = document.getElementById("b7");
bt7.onclick = function () { digito(this); }

bt8 = document.getElementById("b8");
bt8.onclick = function () { digito(this); }

bt9 = document.getElementById("b9");
bt9.onclick = function () { digito(this); }

btPonto = document.getElementById("bPonto");
btPonto.onclick = function () { digito(this); }

btCe = document.getElementById("bDel");
btCe.onclick = function () { txtdisplay.value = 0; txtoperador.value = null; txtauxiliar.value = 0}

function digito(botao) {
    if (botao.value == ".") {
        if (txtdisplay.value.indexOf(".") === -1) {
            txtdisplay.value += botao.value;
        }
    }
    else {
        if ((txtdisplay.value.indexOf(".") === -1) && (txtdisplay.value == "0")) {
            txtdisplay.value = botao.value;
        }
        else {
            txtdisplay.value += botao.value
        }
    }
}

txtoperador = document.getElementById("operador")
txtauxiliar = document.getElementById("auxiliar")

btSoma = document.getElementById("bSoma");
btSoma.addEventListener("click", function(){operador(this);});

btMult = document.getElementById("bMult");
btMult.addEventListener("click", function(){operador(this);});

btDiv = document.getElementById("bDiv");
btDiv.addEventListener("click", function(){operador(this);});

btSub = document.getElementById("bSub");
btSub.addEventListener("click", function(){operador(this);});

btIgual = document.getElementById("bIgual");
btIgual.addEventListener("click", function(){calculo();});

function operador(botao) {
    if (txtoperador.value != ""){
        calculo();
    }

    txtoperador.value = botao.value;
    txtauxiliar.value = txtdisplay.value;
    txtdisplay.value = 0;
}

function calculo(){

    switch (txtoperador.value) {

        case "+":
        txtdisplay.value =  parseFloat(txtauxiliar.value) + parseFloat(txtdisplay.value);
        txtauxiliar.value = "0";
        txtoperador.value = "";
        break;
        
        case "-":
        txtdisplay.value = txtauxiliar.value - txtdisplay.value;
        txtauxiliar.value = "0";
        txtoperador.value = "";
        break;

        case "/":
        txtdisplay.value = txtauxiliar.value / txtdisplay.value;
        txtauxiliar.value = "0";
        txtoperador.value = "";
        break;

        case "X":
        txtdisplay.value = txtauxiliar.value * txtdisplay.value;
        txtauxiliar.value = "0";
        txtoperador.value = "";
        break;
    }
}