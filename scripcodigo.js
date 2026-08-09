// ===============================
// MENSAJES
// ===============================

const mensajes = [

"Usted llegó a mi vida y dejó una huella muy bonita. Gracias por su amabilidad, diplomacía y por cada momento compartido.",
"Le agradezco su sinceridad. al decirme que tiene un carácter difícil  y que no quiere lastimarme, comprendí que habló desde la honestidad.",
"Me quedo con los buenos recuerdos,no me quisiera ir pero ya no está en mi, sino en usted; porque como dijo, el amor es recíproco; si no, no lo es. El interés se nota, y yo solo quería creer que algún día podría sentir por mí lo mismo que siento por usted.",
"Sé que es difícil arriesgarse y dejarse amar de verdad, porque todos tenemos miedo de salir lastimados,espero que encuentre a quien busca, aunque me lleve el 💔 por no ser la mujer que quiere." ,
"Si algún día desea escribirme, encontrará una puerta abierta. Le envío un beso enorme... 💋 Y un abrazo tan rico, como aquel que nos dimos el 31 de julio. Hasta que la vida decida volver a cruzar nuestros caminos. ❤️",
"Le deseo toda la salud del mundo;Dios lo bendiga siempre. Lo amo desde hace unos años y quizá lo seguiré haciendo por mil años más..."

];

// ===============================
// FOTOS
// ===============================

const fotos = [
    "FOTOS/FOTO1.png",
    "FOTOS/FOTO2.png",
    "FOTOS/FOTO3.png",
    "FOTOS/FOTO4.png",
    "FOTOS/FOTO5.png",
    "FOTOS/FOTO6.jpeg",
    "FOTOS/FOTO7.jpeg",
    "FOTOS/FOTO8.jpeg",
    "FOTOS/FOTO9.jpeg",
    "FOTOS/FOTO10.jpeg",
    "FOTOS/FOTO11.png",
    "FOTOS/FOTO12.jpeg",
    "FOTOS/FOTO13.jpeg",

];

// ===============================

let indiceMensaje = 0;
let indiceFoto = 0;

const heart = document.getElementById("heart");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");

const texto = document.getElementById("texto");
const foto = document.getElementById("foto");

const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");
botonMusica.addEventListener("click", ()=>{

    musica.play();

    botonMusica.style.display = "none";

});

// ===============================
// ABRIR CARTA
// ===============================

heart.addEventListener("click",()=>{

inicio.style.display="none";

contenido.style.display="flex";

musica.play().catch(()=>{

console.log("El navegador bloqueó la reproducción automática.");

});

escribir();

cambiarFotos();

crearCorazones();

});

// ===============================
// EFECTO MAQUINA DE ESCRIBIR
// ===============================

function escribir(){

    let frase = mensajes[indiceMensaje];
    let letra = 0;

    texto.innerHTML = "";

    let maquina = setInterval(()=>{

        texto.innerHTML += frase.charAt(letra);
        letra++;

        if(letra >= frase.length){

            clearInterval(maquina);

            setTimeout(()=>{

                indiceMensaje++;

                // Si todavía quedan mensajes
                if(indiceMensaje < mensajes.length){

                    escribir();

                } else {

                    // Terminó toda la carta
                    musica.pause();
                    musica.currentTime = 0;

                    botonMusica.style.display = "block";

                }

            },3500);
        }

    },45);
}

// ===============================
// CAMBIO DE FOTOS
// ===============================

function cambiarFotos(){

setInterval(()=>{

indiceFoto++;

if(indiceFoto>=fotos.length){

indiceFoto=0;

}

foto.classList.remove("fade");

void foto.offsetWidth;

foto.src=fotos[indiceFoto];

foto.classList.add("fade");

},5000);

}

// ===============================
// CORAZONES FLOTANDO
// ===============================

function crearCorazones(){

setInterval(()=>{

const corazon=document.createElement("div");

corazon.innerHTML="❤️";

corazon.className="corazon";

corazon.style.left=Math.random()*100+"vw";

corazon.style.fontSize=(20+Math.random()*30)+"px";

corazon.style.animationDuration=(4+Math.random()*5)+"s";

document.body.appendChild(corazon);

setTimeout(()=>{

corazon.remove();

},9000);

},350);

}

// ===============================
// ESTRELLAS EXTRA
// ===============================

setInterval(()=>{

const estrella=document.createElement("div");

estrella.style.position="fixed";

estrella.style.width="2px";

estrella.style.height="2px";

estrella.style.background="white";

estrella.style.borderRadius="50%";

estrella.style.left=Math.random()*window.innerWidth+"px";

estrella.style.top=Math.random()*window.innerHeight+"px";

estrella.style.opacity=Math.random();

document.body.appendChild(estrella);

setTimeout(()=>{

estrella.remove();

},4000);

},120);

// ===============================
// EFECTO FINAL
// ===============================

setTimeout(()=>{

document.title="Gracias por todo ❤️";

},2000);