import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id?: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'http://192.168.1.7:3000/productos'; // Asegúrate de cambiar la URL si usas un puerto distinto

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  // Obtener un solo producto por ID
  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  // Agregar un nuevo producto
  agregarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }

  // Actualizar un producto existente
  actualizarProducto(id: number, producto: Producto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }

  // Eliminar un producto
  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
