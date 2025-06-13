import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { ListTarefasComponent } from './tarefas/list-tarefas/list-tarefas.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    ListTarefasComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
  ];

  private onClick() {
    alert('Clicked in menu item');
  }
}
