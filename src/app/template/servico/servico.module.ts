import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoRoutingModule } from './servico-routing.module';
import { ServicoListaComponent } from './servico-lista/servico-lista.component';
import { ServicoCadastroComponent } from './servico-cadastro/servico-cadastro.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { PipesModule } from 'src/app/pipes/pipes.module';
 
const maskConfig: Partial<IConfig> = {validation: false};

@NgModule({
  declarations: [
    ServicoCadastroComponent,
    ServicoListaComponent
  ],
  imports: [
    CommonModule,
    ServicoRoutingModule,
    FormsModule,
    PipesModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  exports: [
    ServicoCadastroComponent,
    ServicoListaComponent
  ]
})
export class ServicoModule { }