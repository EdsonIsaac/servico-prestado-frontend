import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clientes!: Array<Cliente>;
  clienteSelected!: Cliente;
  success!: boolean;
  error!: boolean;
  errors!: Array<any>;
  searchText!: string;

  constructor(private clienteService: ClienteService, private router: Router) {
    this.success = false;
    this.error = false;
  }
  
  ngOnInit(): void {
    this.clienteService.findAll().subscribe(response => {
      this.clientes = response;
    });
  }

  delete(cliente: Cliente) {
    
    this.clienteService.delete(cliente)
      .subscribe(response => {
        this.success = true;
        this.error = false;
        this.ngOnInit();
      }, 
      error => {
        this.error = true;
        this.success = false;
      })
    ;
  }

  setClienteSelected (cliente: Cliente) {
    this.clienteSelected = cliente;
  }
  
  update(cliente: Cliente) {
    this.router.navigate(['/clientes/cadastro/' + cliente.id]);
  }
}
