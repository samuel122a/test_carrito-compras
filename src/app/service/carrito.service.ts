import { Injectable } from "@angular/core";
import { Producto } from "../models/producto";

@Injectable ({
    providedIn: "root"
})

export class CarritoService {
    private carrito:Producto[] = [];
    agregarProducto(producto:Producto){
        this.carrito.push(producto);
    }

    obtenerCarrito() : Producto[]{
        return this.carrito;
    }

    generarXML() {
        let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<recibo>\n`;
        xml += `    <nombreTienda>Tienda Componentes PC</nombreTienda>\n`;
        
        this.carrito.forEach((producto) => {
            xml += `    <producto id="${producto.id}">\n`;
            xml += `        <nombre>${producto.nombre}</nombre>\n`;
            xml += `        <precio>${producto.precio}</precio>\n`;
            xml += `    </producto>\n`;
        });
        xml += `    <fecha>${new Date().toISOString()}</fecha>\n`;
        const iva = this.carrito.reduce((acc, producto) => acc + producto.precio, 0) * 0.16;
        xml += `    <total>${this.carrito.reduce((acc, producto) => acc + producto.precio, 0)}</total>\n\n`;
        xml += `    <iva>${iva}</iva    >\n\n`
        xml += "</recibo>";
    
        const blob = new Blob([xml], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.download = 'recibo.xml';
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    

    eliminarProducto(id: number) {
        const index = this.carrito.findIndex(producto => producto.id === id);
        if (index !== -1) {
            this.carrito.splice(index, 1); 
        }
        console.log(this.carrito);
    }
    
}