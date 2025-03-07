import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../service/producto.service';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../service/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})

export class ProductoComponent implements OnInit {
  public productos: Producto[] = [];
  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.productos = this.productoService.obtenerProducto();
  }

  agregarAlCarrito(producto:any) {
    this.carritoService.agregarProducto(producto);
  }

  irAlCarrito() {
    this.router.navigate(['/carrito']);
  }
}