import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core'
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  fazerLogin(usuario: Usuario) {
    if((usuario.nome === 'usuario') && (usuario.senha === '123')) {
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);
    } else{
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);

      alert('DADOS INVÁLIDOS');
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
