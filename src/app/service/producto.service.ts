import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:3000/api/productos';
  constructor(private http: HttpClient){}

  obtenerProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}