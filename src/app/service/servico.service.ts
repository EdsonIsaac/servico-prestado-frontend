import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servico } from '../model/servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) { }

  findAll () : Observable<Array<Servico>> {
    return this.http.get<Array<Servico>>(environment.serverURL + '/servicos');
  }

  findById (id: number) : Observable<Servico> {
    return this.http.get<Servico>(environment.serverURL + '/servicos/' + id);
  }

  save (servico: Servico) : Observable<Servico> {
    return this.http.post<Servico>(environment.serverURL + '/servicos', servico);
  }

  update (servico: Servico) : Observable<Servico> {
    return this.http.put<Servico>(environment.serverURL + '/servicos/' + servico.id, servico);
  }

  delete (servico: Servico) : Observable<Servico> {
    return this.http.delete<Servico>(environment.serverURL + '/servicos/' + servico.id);
  }
}
