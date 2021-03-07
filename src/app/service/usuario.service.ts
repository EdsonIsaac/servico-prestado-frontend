import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario.model';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  login(usuario: Usuario) : Observable<any> {
    return this.http.post<Usuario>(environment.serverURL + "/login", usuario, {
      observe: 'response',
      responseType: 'json'
    })
      .pipe(map(response => {
        this.authService.setCurrentUser(
          {token: response.headers.get('Authorization')}
        )
      }))
    ;
  }

  save(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(environment.serverURL + "/usuarios", usuario);
  }
}