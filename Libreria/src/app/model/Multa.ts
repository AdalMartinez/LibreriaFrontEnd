import { Prestamo } from "./Prestamo";

export class Multa {
    idMulta: number = 0;
    montoMulta: number = 0;
    estadoDelPago: number = 0;

    idPrestamo: Prestamo = new Prestamo();
    prestamos: Array<Prestamo> = [];
}