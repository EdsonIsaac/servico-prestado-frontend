import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/app/model/servico.model';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-servico-lista',
  templateUrl: './servico-lista.component.html',
  styleUrls: ['./servico-lista.component.css']
})
export class ServicoListaComponent implements OnInit {

  servicos!: Array<Servico>;
  success!: boolean;
  error!: boolean;
  errors!: Array<any>;
  servicoSelected!: Servico;
  searchText!: string;

  constructor(private servicoService: ServicoService, private router: Router) {
    this.success = false;
    this.error = false;
  }

  ngOnInit(): void {
    this.servicoService.findAll().subscribe(response => {
      this.servicos = response;
    });
  }

  delete(servico: Servico) {
    
    this.servicoService.delete(servico)
      .subscribe(response => {
        this.success = true;
        this.error = false;
        this.ngOnInit();
      }, 
      error => {
        this.success = false;
        this.error = true;
        this.errors = error.error;
      })
    ;
  }

  setServicoSelected(servico: Servico) {
    this.servicoSelected = servico;
  }

  update(servico: Servico) {
    this.router.navigate(['/servicos/cadastro/' + servico.id])
  }  
}
