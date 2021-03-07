import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  cliente!: Cliente;
  success!: boolean;
  error!: boolean;
  errors!: Array<any>;

  constructor (private clienteService: ClienteService, private activatedRouter: ActivatedRoute) {
    this.cliente = new Cliente();
    this.success = false;
    this.error = false;
  }

  ngOnInit(): void {
    
    this.activatedRouter.params.subscribe(x => {
 
      if (x && x.id) {
        this.clienteService.findById(x.id).subscribe(response => {
          this.cliente = response;
        });
      }
    });
  }

  onSubmit() {

    if (this.cliente.id) {

      this.clienteService.update(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.error = false;
        }, 
        error => {
          this.success = false;
          this.error = true;
          this.errors = error.error;
        });
      ;
    } else {
      
      this.clienteService.save(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.error = false;
        }, 
        error => {
          this.success = false;
          this.error = true;
          this.errors = error.error;
        });
      ;
    }    
  }
}