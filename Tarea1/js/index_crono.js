let hr = min = sec = ms = "0" + 0, startTimer;

const iniciarBtn = document.querySelector(".iniciar"),
    pararBtn = document.querySelector(".parar"),
    reiniciarBtn = document.querySelector(".reiniciar");

iniciarBtn.addEventListener("click", iniciar);
pararBtn.addEventListener("click", parar);
reiniciarBtn.addEventListener("click", reiniciar);

function iniciar(){
    iniciarBtn.classList.add("desactivado");
    pararBtn.classList.remove("desactivado");

    startTimer = setInterval(() =>{
        ms++
        ms = ms < 10 ? "0" + ms : ms;  // Mientras que ms sea menor que 100, será un string "0X" donde X es ms

        if(ms == 100){
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        if(sec == 60){
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if(min == 60){
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }

        putValue();
    }, 10); // Ya no se cuentan 1000ms sino 100, para compensar el conteo de 10ms y no de 1ms
}

function parar(){
    iniciarBtn.classList.remove("desactivado");
    pararBtn.classList.add("desactivado");
    clearInterval(startTimer);
}

function reiniciar(){
    iniciarBtn.classList.remove("desactivado");
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    putValue();
}

function putValue(){
    document.querySelector('.milisegundos').innerHTML = ms;
    document.querySelector('.segundos').innerHTML = sec;
    document.querySelector('.minutos').innerHTML = min;
    document.querySelector('.hora').innerHTML = hr;
}