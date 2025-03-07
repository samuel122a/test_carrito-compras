import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  carrito: any[] = [];
  constructor(private carritoService: CarritoService){}
  ngOnInit() {
    this.carrito = this.carritoService.obtenerCarrito();
  }

  generarXML() {
    this.carritoService.generarXML();
  }

  eliminarProducto(id: number) {
    this.carritoService.eliminarProducto(id);
    this.carrito = this.carritoService.obtenerCarrito();
  }
}