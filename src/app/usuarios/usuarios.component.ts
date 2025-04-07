import { Component, OnInit, EventEmitter, Output } from '@angular/core'; // Importa EventEmitter y Output
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  username: string = '';
  password: string = '';
  usuarios: any[] = []; // Inicializa la lista de usuarios como un array vacío

  @Output() userLoggedIn = new EventEmitter<string>(); // Emite el nombre del usuario al componente principal

  constructor(private usuariosService: UsuariosService, private router: Router) {} // Inyecta Router

  ngOnInit() {
    console.log('UsuariosComponent cargado');
    // Carga la lista de usuarios al iniciar el componente
    this.usuariosService.getUsuarios().subscribe(
      (data) => {
        console.log('Usuarios obtenidos:', data);
        this.usuarios = data; // Asigna los usuarios obtenidos
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  login() {
    this.usuariosService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        alert(response.message); // Mensaje de éxito
        this.userLoggedIn.emit(this.username); // Emite el nombre del usuario al componente principal
        this.router.navigate(['/productos']); // Redirige a la pantalla principal
      },
      (error) => {
        console.error('Error del servidor:', error);
        if (error.status === 404) {
          alert('Usuario no encontrado');
        } else if (error.status === 401) {
          alert('Contraseña incorrecta');
        } else {
          alert('Error al iniciar sesión');
        }
      }
    );
  }
}