import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './cliente.service';
import { ServicoService } from './servico.service';
import { UsuarioService } from './usuario.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ClienteService,
    ServicoService,
    UsuarioService
  ]
})
export class ServiceModule { }
