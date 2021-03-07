import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { LayoutComponent } from '../general/layout/layout.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';

const routes: Routes = [
  {path: 'clientes', component: LayoutComponent, children: [
    {path: '', component: ClienteListaComponent, canActivate: [AuthGuard]},
    {path: 'cadastro', component: ClienteCadastroComponent, canActivate: [AuthGuard]},
    {path: 'cadastro/:id', component: ClienteCadastroComponent, canActivate: [AuthGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
