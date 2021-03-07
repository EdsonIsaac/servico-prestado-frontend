import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesFilterPipe } from './clientes-filter.pipe';
import { ServicosFilterPipe } from './servicos-filter.pipe';

@NgModule({
  declarations: [
    ClientesFilterPipe,
    ServicosFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClientesFilterPipe,
    ServicosFilterPipe
  ]
})
export class PipesModule { }
