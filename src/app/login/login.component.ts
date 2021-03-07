import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario.model';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usuario!: Usuario;
  success!: boolean;
  error!: boolean;
  errors!: Array<any>;
  addUser!: boolean;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.usuario = new Usuario();
    this.success = false;
    this.error = false;
    this.addUser = false;
  }

  ngOnInit() {
    
  }

  newUser(event: any) {
    event.preventDefault();
    this.addUser = true;
  }

  newUserCancel() {
    this.addUser = false;
  }

  onSubmit() {

    if (this.addUser) {
      this.usuarioService.save(this.usuario).subscribe(response => {
        this.success = true;
        this.error = false;
        this.addUser = false;
        this.usuario = new Usuario();
      },
      error => {
        this.success = false;
        this.error = true;
        this.errors = error.error;
      });
    } else {
      this.usuarioService.login(this.usuario).subscribe(response => {
        this.router.navigate(['/home']);
      },
      error => {
        this.success = false;
        this.error = true;
        this.errors = [error.error];
      });
    }
  }
}