var intervaloCronometro;
    var horas = 0;
    var minutos = 0;
    var segundos = 0;

    function iniciarCronometro() {
        reiniciarCronometro ();
      intervaloCronometro = setInterval(actualizarCronometro, 1000);
    }

    function reiniciarCronometro() {
      clearInterval(intervaloCronometro);
      horas = 0;
      minutos = 0;
      segundos = 0;
      actualizarCronometro();
    }

    function pausarCronometro() {
      clearInterval(intervaloCronometro);
    }

    function actualizarCronometro() {
      segundos++;
      if (segundos >= 60) {
        segundos = 0;
        minutos++;
        if (minutos >= 60) {
          minutos = 0;
          horas++;
        }
      }
      var timeString = pad(horas) + ":" + pad(minutos) + ":" + pad(segundos);
      document.querySelector(".cronometro").textContent = timeString;
    }

    function pad(value) {
      return value.toString().padStart(2, "0");
    }
