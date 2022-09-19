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

