import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { Servico } from 'src/app/model/servico.model';
import { ClienteService } from 'src/app/service/cliente.service';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-servico-cadastro',
  templateUrl: './servico-cadastro.component.html',
  styleUrls: ['./servico-cadastro.component.css']
})
export class ServicoCadastroComponent implements OnInit {

  servico!: Servico;
  clientes!: Array<Cliente>;
  searchText!: string;
  success!: boolean;
  error!: boolean;
  errors!: Array<any>;

  constructor (
    private clienteService: ClienteService, 
    private servicoService: ServicoService, 
    private activatedRouter: ActivatedRoute) {
      
    this.servico = new Servico();
    this.clienteService.findAll().subscribe(response => {
      this.clientes = response;
    });

    this.success = false;
    this.error = false;
  }

  ngOnInit(): void {
    
    this.activatedRouter.params.subscribe(x => {
 
      if (x && x.id) {
        this.servicoService.findById(x.id).subscribe(response => {
          this.servico = response;
        }, 
        error => {
          this.success = false;
          this.error = true;
          this.errors = error.error;
        });
      }
    });
  }

  onSubmit() {

    if (this.servico.id) {
      
      this.servicoService.update(this.servico)
        .subscribe(response => {
          this.success = true;
          this.error = false;
        }, 
        error => {
          this.success = false;
          this.error = true;
          this.errors = error.error;
        })
      ;
    } else {
      
      this.servicoService.save(this.servico)
        .subscribe(response => {
          this.success = true;
          this.error = false;
        }, 
        error => {
          this.success = false;
          this.error = true;
          this.errors = error.error;
        })
      ;
    }
  }

  setCliente (cliente: Cliente) {
    this.servico.cliente = cliente;
  }
}
