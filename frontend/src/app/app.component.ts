import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListTarefasComponent } from './tarefas/list-tarefas/list-tarefas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListTarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'GerenciadorDeTarefas';
}
