/* ------------------------------------------------------ */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* ------------------------------------------------------ */

function obtenerDatosDelUsuario() {
  
  datosPersona.nombre = prompt("Ingresa tu nombre");

  let hoy = new Date();
  let anioActual = hoy.getFullYear();
  let anio = parseInt(prompt("Ingrese su año de nacimiento"));
  datosPersona.edad = anioActual - anio;

  datosPersona.ciudad = prompt("Ingrese su ciudad");

  confirm("¿Te interesa Javascript?")
    ? (datosPersona.interesPorJs = "Si")
    : (datosPersona.interesPorJs = "No");

  console.log(datosPersona);
}

function renderizarDatosUsuario() {
  obtenerDatosDelUsuario();
  document.getElementById("nombre").innerText = datosPersona.nombre;
  document.getElementById("edad").innerText = datosPersona.edad;
  document.getElementById("ciudad").innerText = datosPersona.ciudad;
  document.getElementById("javascript").innerText = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  let fila = document.querySelector("#fila");
  fila.innerHTML = "";

  listado.forEach((lista) => {
    fila.innerHTML += `
      <div class = "caja">
        <img src="${lista.imgUrl}" alt="${lista.lenguajes}">
        <p class = 'lenguajes'>${lista.lenguajes}</p>
        <p class = 'bimestre'>${lista.bimestre}</p>
      </div>
    `;
  });
}

function alternarColorTema() {
  let body = document.getElementById("sitio");
  body.classList.toggle("dark");
}

let oculto = document.querySelector(".oculto");
let contenido = document.querySelector("#sobre-mi");

document.addEventListener("keydown", (e) => {
  if (e.key == "F") {
    contenido.classList.remove("oculto");
    console.log(contenido);
  }
});