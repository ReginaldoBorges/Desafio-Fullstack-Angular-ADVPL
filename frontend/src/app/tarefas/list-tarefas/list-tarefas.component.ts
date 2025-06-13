import { Component } from '@angular/core';
import { PoTableColumn, PoTableModule } from '@po-ui/ng-components';
import { TarefasStruct } from '../tarefas.struct';

@Component({
  selector: 'app-list-tarefas',
  imports: [PoTableModule],
  templateUrl: './list-tarefas.component.html',
  styleUrl: './list-tarefas.component.css',
})
export class ListTarefasComponent {
  columns: Array<PoTableColumn> = TarefasStruct.getGridColumns();
  items: Array<any> = [];

  constructor() {}

  ngOnInit() {}
}
