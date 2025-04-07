import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService, Producto } from '../services/productos.services'; // Asegúrate de ajustar la ruta
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
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

  editarProducto(id: number): void {
    this.productoService.obtenerProductoPorId(id).subscribe(producto => {
      this.nuevoProducto = producto; // Cargar el producto en el formulario para editar
      this.eliminarProducto(id); // Eliminar el producto después de cargarlo para editar
    });
  
}
  actualizarProducto(id: number): void {
    this.productoService.actualizarProducto(id, this.nuevoProducto).subscribe(() => {
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
  verProducto(id: number): void {
    const producto = this.productos.find((p) => p.id === id); // Busca el producto por ID
    if (producto) {
      this.nuevoProducto = { ...producto }; // Asigna los datos del producto al objeto `nuevoProducto`
    } else {
      alert('Producto no encontrado');
    }
}
}
