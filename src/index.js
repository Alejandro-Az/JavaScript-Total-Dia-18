"use strict";
import clima from './clima.js';
import horas from './horas.js';
import noticias from './noticias.js';

function cargarCancion() {
    const audio = document.getElementById('cancionDia');
    audio.src = "../assets/Moby - We Are All Made Of Stars.mp3";
}

clima.getTiempo();
horas.getHoras();
noticias.getNoticia();
cargarCancion();