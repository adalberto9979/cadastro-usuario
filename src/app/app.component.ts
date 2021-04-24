import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from './app.usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  usuarios: Usuario[] = [];
  urlJson = 'http://localhost:3000/usuarios/';
  pagina = 0;
  msg = "";

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Usuario[]>(this.urlJson).subscribe(response => {
      this.usuarios = response;
    });
  }

  onScroll(): void {
    this.listarUsuarios();
  }
  
  //Falta implementar a funcionalidade de adicionar.
  adicionar(): void {
    this.msg = "Adicionar";
  }
  
  //Falta implementar a funcionalidade de editar.
  editar(event: any, usuario: any): void {
    alert(usuario);
    this.msg = "Editar";
  }
    
  excluir(event: any, usuario: any) {
    this.msg = "Excluir";
    this.http.delete<Usuario[]>(this.urlJson + usuario).subscribe((usuarios: Usuario[]) => this.usuarios.push(...this.usuarios));
    this.restaurarConsulta();
  }

  private listarUsuarios() {
    this.pagina++;
    this.http.get<Usuario[]>(this.urlJson).subscribe((usuarios: Usuario[]) => this.usuarios.push(...this.usuarios));
  }

  private restaurarConsulta(): void {
    this.pagina = 0;
    this.usuarios = [];
    this.listarUsuarios();
  }
}