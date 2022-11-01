const Ave = require("./Ave");

const halcon = new Ave;
const canario = new Ave;

canario.seEncuentraCon("canario");
canario.seEncuentraCon("halcon");
halcon.seEncuentraCon("canario");

canario.asignarNombre("Zephyr", "canario");
halcon.asignarNombre("Falcon", "halcon")

halcon.esCazador(true);
canario.esCazador(false);
