import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = 'http://192.168.1.7:3000'; // Cambia la IP si es necesario

  constructor(private http: HttpClient, private injector: Injector) {}

  login(username: string, password: string): Observable<any> {
    console.log('Enviando solicitud al servidor:', { username, password });
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }
}