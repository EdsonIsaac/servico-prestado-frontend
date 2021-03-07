import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  findAll () : Observable<Array<Cliente>> {
    return this.http.get<Array<Cliente>>(environment.serverURL + '/clientes');
  }

  findById (id: number) : Observable<Cliente> {
    return this.http.get<Cliente>(environment.serverURL + '/clientes/' + id);
  }

  save (cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(environment.serverURL + '/clientes/', cliente);
  }

  update (cliente: Cliente) : Observable<Cliente> {
    return this.http.put<Cliente>(environment.serverURL + '/clientes/' + cliente.id, cliente);
  }

  delete (cliente: Cliente) : Observable<Cliente> {
    return this.http.delete<Cliente>(environment.serverURL + '/clientes/' + cliente.id);
  }
}