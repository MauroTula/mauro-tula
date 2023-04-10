document.addEventListener("DOMContentLoaded", function () {
  // Circulo ProgressBar
  let progresscircle = document.getElementById("progress");
  let percentage = document.getElementById("percentage");
  let cantidad = 0;
  let cantidad2 = 1336;

  let tiempo = setInterval(() => {
    cantidad += 1;
    let valores = Math.ceil((cantidad2 -= 13.36));
    percentage.textContent = cantidad + "%";
    progresscircle.style.strokeDashoffset = `${valores}`;
    if (cantidad >= 72) {
      clearInterval(tiempo);
    }
  }, 80);

  // Acordeon
  // Obtener todos los elementos con la clase "accordeon"
  var accordeonItems = document.querySelectorAll(".accordeon");

  // Iterar sobre cada elemento del acordeón
  accordeonItems.forEach(function (accordeonItem) {
    // Agregar evento de clic a cada elemento del acordeón
    accordeonItem.addEventListener("click", function () {
      // Verificar si el div "accordeon" del elemento clickeado tiene la clase "open"
      var isOpen = this.classList.contains("open");
      // Remover la clase "open" de todos los elementos del acordeón
      accordeonItems.forEach(function (item) {
        item.classList.remove("open");
        var progressMuted = item.nextElementSibling.nextElementSibling;
        if (progressMuted.classList.contains("d-none")) {
          progressMuted.classList.remove("d-none");
          progressMuted.classList.add("d-block");
        }
        item.nextElementSibling.classList.remove("show"); // Remover la clase "show" del siguiente elemento hermano
        item.parentElement.querySelector(".h5").classList.remove("activo"); // Remover la clase "activo" del div "h5" del padre del elemento clickeado
      });

      // Agregar la clase "open" al elemento clickeado si no tenía la clase "open" previamente
      if (!isOpen) {
        this.classList.add("open");
        this.nextElementSibling.classList.add("show"); // Agregar la clase "show" al siguiente elemento hermano
        this.parentElement.querySelector(".h5").classList.add("activo"); // Agregar la clase "activo" al div "h5" del padre del elemento clickeado

        var progressMuted = this.nextElementSibling.nextElementSibling;
        if (progressMuted.classList.contains("d-block")) {
          progressMuted.classList.remove("d-block");
          progressMuted.classList.add("d-none");
        }
      }
    });
  });

  // Select profesión
  var btnDesarrollador = document.querySelector(".desarrollador__select");
  var listaDesarrollador = document.querySelector(
    ".desarrollador__select + ul"
  );

  // Añadir evento click al botón
  btnDesarrollador.addEventListener("click", function () {
    // Alternar la clase 'active' en el botón y en la lista
    btnDesarrollador.classList.toggle("active");
    listaDesarrollador.classList.toggle("active");
  });

  // Obtener todos los elementos <li> dentro de la lista
  var elementosLi = listaDesarrollador.getElementsByTagName("li");

  // Añadir evento click a cada elemento <li>
  for (var i = 0; i < elementosLi.length; i++) {
    elementosLi[i].addEventListener("click", function () {
      // Obtener el texto del elemento <li> seleccionado
      var textoSeleccionado = this.textContent;

      // Asignar el texto al botón
      btnDesarrollador.querySelector("span").textContent = textoSeleccionado;

      // Remover la clase 'active' de todos los elementos <li>
      for (var j = 0; j < elementosLi.length; j++) {
        elementosLi[j].classList.remove("active");
      }

      // Añadir la clase 'active' al elemento <li> seleccionado
      this.classList.add("active");

      // Remover la clase 'active' del botón y de la lista
      btnDesarrollador.classList.remove("active");
      listaDesarrollador.classList.remove("active");
    });
  }

  // Modal Menú
  const menu = document.querySelector(".menu");
  const overlay = document.querySelector(".overlay");
  const close = document.querySelector(".close");

  // Agregar event listener al hacer click en el botón de menú
  menu.addEventListener("click", function () {
    overlay.classList.add("active");
  });

  // Agregar event listener al hacer click en el botón de cerrar
  close.addEventListener("click", function () {
    overlay.classList.remove("active");
  });
});
