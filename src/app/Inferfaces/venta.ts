import { DetalleVenta } from "./detalle-venta"

export interface Venta {
    IdVenta?:number,
    NumeroDocumento?:string,
    TipoPago:string,
    TotalTexto:string,
    FechaRegistro?:string,
    DetalleVenta: DetalleVenta[]
}
