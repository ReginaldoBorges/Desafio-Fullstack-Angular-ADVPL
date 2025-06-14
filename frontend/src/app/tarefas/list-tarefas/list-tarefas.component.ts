import { Component } from '@angular/core';
import { PoTableColumn, PoTableModule } from '@po-ui/ng-components';
import { TarefasStruct } from '../tarefas.struct';
import { TarefasService } from '../../services/tarefas.service';

@Component({
  selector: 'app-list-tarefas',
  imports: [PoTableModule],
  templateUrl: './list-tarefas.component.html',
  styleUrl: './list-tarefas.component.css',
})
export class ListTarefasComponent {
  columns: Array<PoTableColumn> = TarefasStruct.getGridColumns();
  items: Array<any> = [];

  constructor(private tarefasService: TarefasService) {}

  ngOnInit() {
    this.loadTarefas();
  }

  /**
   *  Método para carregar listas de tarefas
   */
  loadTarefas() {
    this.tarefasService.getTarefas().subscribe((data) => {
      this.items = data;
      console.table('Tarefas carregadas:', this.items);
    });
  }
}
