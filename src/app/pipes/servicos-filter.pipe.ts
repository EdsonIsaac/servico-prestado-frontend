import { Pipe, PipeTransform } from '@angular/core';
import { Servico } from '../model/servico.model';

@Pipe({
  name: 'servicosFilter'
})
export class ServicosFilterPipe implements PipeTransform {

  transform(items: Array<Servico>, searchText: string): Array<any> {
    
    if (!items) {
      return [];
    }
    
    if (!searchText) {
      return items;
    }
    
    searchText = searchText.toLocaleLowerCase();

    return items.filter(item => {
      return item.cliente.nome.toLocaleLowerCase().includes(searchText) ? true : item.cliente.cpf.includes(searchText);
    });
  }
}