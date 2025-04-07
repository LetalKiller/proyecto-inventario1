import { Component, OnInit } from '@angular/core';
import { ProductoService, Producto } from '../producto.services'; // Asegúrate de ajustar la ruta

@Component({
  selector: 'app-root',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'] // Opcional si quieres estilos
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];

  // Este objeto lo usamos para el formulario
  nuevoProducto: Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0
  };

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.obtenerProductos().subscribe(data => {
      this.productos = data;
    });
  }

  agregarProducto(): void {
    this.productoService.agregarProducto(this.nuevoProducto).subscribe(() => {
      this.cargarProductos();
      // Limpiar el formulario
      this.nuevoProducto = {
        nombre: '',
        descripcion: '',
        precio: 0,
        stock: 0
      };
    });
  }

  eliminarProducto(id: number): void {
    this.productoService.eliminarProducto(id).subscribe(() => {
      this.cargarProductos();
    });
  }
}
