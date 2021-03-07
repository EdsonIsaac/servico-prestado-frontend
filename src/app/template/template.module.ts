import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from './general/general.module';
import { ClienteModule } from './cliente/cliente.module';
import { ServicoModule } from './servico/servico.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    GeneralModule,
    ClienteModule,
    ServicoModule
  ],
  exports: [
    GeneralModule,
    ClienteModule,
    ServicoModule
  ]
})
export class TemplateModule { }