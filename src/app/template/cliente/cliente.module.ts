import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { PipesModule } from 'src/app/pipes/pipes.module';
 
const maskConfig: Partial<IConfig> = {validation: false};

@NgModule({
  declarations: [
    ClienteCadastroComponent, 
    ClienteListaComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    PipesModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  exports: [
    ClienteCadastroComponent,
    ClienteListaComponent
  ]
})
export class ClienteModule { }