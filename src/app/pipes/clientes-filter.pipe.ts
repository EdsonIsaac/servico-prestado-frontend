import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../model/cliente.model';

@Pipe({
  name: 'clientesFilter'
})
export class ClientesFilterPipe implements PipeTransform {

  transform(items: Array<Cliente>, searchText: string): Array<any> {
    
    if (!items) {
      return [];
    }
    
    if (!searchText) {
      return items;
    }
    
    searchText = searchText.toLocaleLowerCase();

    return items.filter(item => {
      return item.nome.toLocaleLowerCase().includes(searchText) ? true : item.cpf.includes(searchText);  
    });
  }
}