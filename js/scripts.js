//Ejercicios Lineales
function ejercicio1(evt) {
  evt.preventDefault();
  var alt = parseFloat(document.getElementById("altura").value);
  var lar = parseFloat(document.getElementById("largo").value);
  if (alt < 0 || lar<0)  {
    alert("No se permiten números negativos")
    return;
  }
  var grHexa = Math.atan(alt / lar);

  grHexa = (grHexa * 360) / (2 * Math.PI); /*Trasformar grados Hexadecimales*/

  var grInt = parseInt(grHexa); /*Mostar grados*/

  var grDec = parseFloat(+grHexa.toString().replace(/^[^\.]+/, "0"));

  var min = grDec * 60;

  var minInt = parseInt(min); /*Mostrar minutos*/
  var minDec = parseFloat(+min.toString().replace(/^[^\.]+/, "0"));

  var segundos = minDec * 60;

  segundosInt = parseInt(segundos); /*Mostrar Segundos*/

  document.getElementById("result-lineal-1").textContent =
    grInt + "⁰ " + minInt + "' " + segundosInt + "''";
}

function ejercicio2(evt) {
  evt.preventDefault();
  var seg = document.getElementById("tiempo").value;
  if (seg < 0) {
    alert("No se permiten números negativos")
    return;
  }
  altura = ((9.8 * Math.pow(seg, 2)) / 2).toFixed(2);

  document.getElementById("result-lineal-2").textContent =
    "El cuerpo cayo de una altura de: " + altura + " m";
}

function ejercicio3(evt) {
  evt.preventDefault();
  var n1 = document.getElementById("num1").value;
  var n2 = document.getElementById("num2").value;
  var n3 = document.getElementById("num3").value;
  var n4 = document.getElementById("num4").value;
  var n5 = document.getElementById("num5").value;

  var resultado = 0;

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (i == 0 && j == 0) {
        resultado += parseInt(n1[j]) * 10000;
      }

      if (i == 1 && j == 1) {
        resultado += parseInt(n2[j]) * 1000;
      }

      if (i == 2 && j == 2) {
        resultado += parseInt(n3[j]) * 100;
      }

      if (i == 3 && j == 3) {
        resultado += parseInt(n4[j]) * 10;
      }

      if (i == 4 && j == 4) {
        resultado += parseInt(n5[j]);
      }
    }
  }

  document.getElementById("result-lineal-3").textContent =
    "El numero generado es: " + resultado;
}

//Ejercicios Alternativos
function ejercicio4(evt) {
  evt.preventDefault();
  var cant = parseInt(document.getElementById("cantidad").value);
  var docenas = Math.trunc(cant / 12);
  var residuo = cant % 12;
  var obsequio = 0;
  var subtotal = 0;
  var total = 0;
  var desc = 0;
  var des = 0;

  if (cant < 0) {
    alert("No se permiten números negativos")
    return;
  }

  if (docenas > 3) {
    obsequio++;
    desc = 0.15;
    des = 15;
    obsequio = docenas - 3;
  } else {
    desc = 0.10;
    des = 10;
  }
  if (docenas > 3 && residuo > 3) {
    obsequio++;
  }

  subtotal = cant * 1.25;
  var descuento = subtotal * desc;
  total = subtotal - descuento;

  document.getElementById("result-alt-3-desc").textContent = descuento.toFixed(2);
  document.getElementById("result-alt-3-subtotal").textContent = subtotal;
  document.getElementById("result-alt-3-total").textContent = total;
  document.getElementById("result-alt-3-obsq").textContent = obsequio;
}

function ejercicio5(evt) {
  evt.preventDefault();
  var hora = document.getElementById("tiempo").value;

  var hh = hora[0] + hora[1];
  var mm = hora[3] + hora[4];
  var ss = hora[6] + hora[7];

  hh = parseInt(hh);
  mm = parseInt(mm);
  ss = parseInt(ss);

  ss = ss + 1;

  if (hh != 23 && mm != 59 && ss == 60) {
    ss = 0;
    mm = mm + 1;
  } else {
    if (hh != 23 && mm == 59 && ss == 60) {
      ss = 0;
      mm = 0;
      hh = hh + 1;
    } else {
      if (hh == 23 && mm == 59 && ss == 60) {
        hh = 0;
        mm = 0;
        ss = 0;
      } else {
        if (hh == 23 && mm != 59 && ss == 60) {
          ss = 0;
          mm = mm + 1;
        }
      }
    }
  }

  document.getElementById("result-alt-2").textContent =
    "La hora es: " + hh + ":" + mm + ":" + ss;
}

function ejercicio6(evt) {
  evt.preventDefault();
  var km = parseInt(document.getElementById("kilometros").value);
  if (km < 0) {
    alert("No se permiten números negativos")
    return;
  }
  var monto = 300000;

  if (km < 300) {

  } else if ((km >= 300) & (km <= 1000)) {
    monto += (km - 300) * 15000;

  } else if (km > 1000) {
    monto += (km - 1000) * 10000;
  }


  var iva = (monto * 20) / 100;
  var subtotal = monto - iva;
  document.getElementById("result-alt-3-iva").textContent =
    "El iva es: $" + iva;
  document.getElementById("result-alt-3-subtotal").textContent =
    " El subtotal es: $" + subtotal;
  document.getElementById("result-alt-3-total").textContent =
    " El total a pagar es: $" + monto;
}

function ejercicio7(evt) {
  evt.preventDefault();

  var fecha = document.getElementById("fecha-nac").value;

  var fechaSep = fecha.split("-", 3);

  var anio = parseInt(fechaSep[0]);
  var mes = parseInt(fechaSep[1]);
  var dia = parseInt(fechaSep[2]);

  var fecha_hoy = new Date();
  var ahora_ano = fecha_hoy.getYear();
  var ahora_mes = fecha_hoy.getMonth() + 1;
  var ahora_dia = fecha_hoy.getDate();

  // realizamos el calculo
  var edad = ahora_ano + 1900 - anio;
  if (ahora_mes < mes) {
    edad--;
  }
  if (mes == ahora_mes && ahora_dia < dia) {
    edad--;
  }
  if (edad > 1900) {
    edad -= 1900;
  }

  // calculamos los meses
  var meses = 0;
  if (ahora_mes > mes) meses = ahora_mes - mes;
  if (ahora_mes < mes) meses = 12 - (mes - ahora_mes);
  if (ahora_mes == mes && dia > ahora_dia) meses = 11;
  // calculamos los dias
  var dias = 0;
  if (ahora_dia > dia) dias = ahora_dia - dia;
  if (ahora_dia < dia) {
    ultimoDiaMes = new Date(ahora_ano, ahora_mes, 0);
    dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
  }
  document.getElementById("result-alt-4").textContent =
    edad + " años, " + meses + " meses, " + dias + " dias";
}

//Ejercicios Repeticion
function ejercicio8agg() {
  var litros = parseInt(document.getElementById("reserva").value);
  if (litros < 0) {
    alert("No se permiten números negativos")
    return;
  }
  document.getElementById("result-rep-1-litros").textContent = litros;
}

function ejercicio8desp(evt) {
  evt.preventDefault();
  var litrosConsumir = parseInt(document.getElementById("despacho").value);
  if (litrosConsumir < 0) {
    alert("No se permiten números negativos")
    return;
  }
  var litrosRes = parseInt(
    document.getElementById("result-rep-1-litros").textContent
  );
  var nCarros = parseInt(
    document.getElementById("result-rep-1-autos").textContent
  );
  var recaudacion = parseFloat(
    document.getElementById("result-rep-1-total").textContent
  );
  var mayorConsu = parseInt(
    document.getElementById("result-rep-1-despachado").textContent
  );

  if (litrosConsumir > litrosRes) {
    alert(
      "Lo sentimos, por el momento se le puede agregar " + litrosRes + " litros"
    );
  } else {
    litrosRes -= litrosConsumir;
    document.getElementById("result-rep-1-litros").textContent = litrosRes;

    nCarros++;
    document.getElementById("result-rep-1-autos").textContent = nCarros;

    recaudacion += litrosConsumir * 1.25;
    document.getElementById("result-rep-1-total").textContent = recaudacion;

    if (litrosConsumir > mayorConsu) {
      document.getElementById(
        "result-rep-1-despachado"
      ).textContent = litrosConsumir;
    }
  }
}

function ejercicio9(evt) {
  evt.preventDefault();
  var dec = parseInt(document.getElementById("decimal").value);
  if (dec < 0) {
    alert("No se permiten números negativos")
    return;
  }
  try {
    document.getElementById("result-rep-2").textContent = dec.toString(2);
  } catch (e) {
    document.getElementById("result-rep-2").textContent = "Invalido";
  }

}

function ejercicio10(evt) {
  evt.preventDefault();
  var numIni = parseInt(document.getElementById("inicio").value);
  var numFin = parseInt(document.getElementById("fin").value);
  if (numIni < 0 || numFin<0) {
    alert("No se permiten números negativos")
    return;
  }

  var acum = 0;
  var element = "";

  for (var i = numIni; i <= numFin; i++) {
    var num = i.toString();
    for (var j = 0; j < num.length; j++) {
      var cifra = parseInt(num[j]);
      acum += Math.pow(cifra, 3);
    }

    if (acum == i) {
      element += i + " - ";
    }
    acum = 0;
  }
  document.getElementById("result-rep-3").textContent = element;
}

function ejercicio11(evt) {
  evt.preventDefault();
  var elementos = [1, 2, 3, 4];
  var element = "";
  for (var i = 11; i <= 44; i++) {
    var num = i.toString();
    for (var j = 0; j <= 4; j++) {
      if (num[1] == elementos[j]) {
        if (num[0] != num[1]) {
          element += i;
          if (i != 43) {
            element += " - ";
          }
        }
      }
    }
  }
  document.getElementById("result-rep-4").textContent = element;
}

//Ejercicios otros
function ejercicio13(evt) {
  evt.preventDefault();
  let randompass = "";
  let word = "avcdefghijklmnopqrstuvwxyz!@#$%^&*()-=,./{}[]";
  var len = parseInt(document.getElementById("len").value);
  for (let i = 0; i < len; i++) {
    randompass += word.charAt(Math.floor(Math.random() * word.length));
  }
  document.getElementById("result-otro-2").textContent =
    "Su nueva clave es: " + randompass;
}

