






class Ave {

    nombre = "No tengo nombre";
    caza = "valor booleano por defecto"
    raza = "raza por def"


    seEncuentraCon(tipoDeAve) {
        if (tipoDeAve == "halcon" || tipoDeAve == "canario") {
            console.log(`Hola como estas ${tipoDeAve}?`);
        }



    }

    asignarNombre(nombreAsignado, tipoDeAve) {
        this.nombre = nombreAsignado;
        console.log(`Mi nombre es ${this.nombre} y soy un ${tipoDeAve} `)
       
    }

    esCazador(boolean){
        this.caza = boolean;
        console.log("Me gusta cazar?", this.caza)
    }

}


module.exports = Ave;










/* 
const atributosGenerales ={
    cantidad_alas: "dos",
    pico: true,
    plumas : true,
    cantidad_patas: 2,
    desplazamiento: "Sobre tierra y aire"
}

let halcon1 = {
    genero: "Falco",
    edad: 3,//este seria el estado del objeto
    tipo: "rapiña",
    tamaño_aprox_en_cm :70 ,
    color:[negro, blanco, amarillo],
    altura_maxima_vuelo_en_pies: 100 ,
    velocidad_max_vuelo_en_picada_KM: 320,
    dieta: "carnivoro",
    comportamiento: "caza"
}
     */


