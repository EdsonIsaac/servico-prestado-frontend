import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './template/general/home/home.component';
import { LayoutComponent } from './template/general/layout/layout.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: '', component: LayoutComponent, children: [
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }