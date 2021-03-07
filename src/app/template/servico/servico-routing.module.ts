import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { LayoutComponent } from '../general/layout/layout.component';
import { ServicoCadastroComponent } from './servico-cadastro/servico-cadastro.component';
import { ServicoListaComponent } from './servico-lista/servico-lista.component';

const routes: Routes = [
  {path: 'servicos', component: LayoutComponent, children: [
    {path: '', component: ServicoListaComponent, canActivate: [AuthGuard]},
    {path: 'cadastro', component: ServicoCadastroComponent, canActivate: [AuthGuard]},
    {path: 'cadastro/:id', component: ServicoCadastroComponent, canActivate: [AuthGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }