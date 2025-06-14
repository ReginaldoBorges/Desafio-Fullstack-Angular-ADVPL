import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TarefasStruct } from '../tarefas/tarefas.struct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TarefasService {
  ApiRest = 'http://127.0.0.1:12173/rest/fwmodel/tarefas';

  constructor(private http: HttpClient) {}

  getTarefas(): Observable<TarefasStruct[]> {
    return this.http.get<TarefasStruct[]>(this.ApiRest);
  }

  // getTarefaById(id: string) {
  //   return this.http.get<TarefasStruct>(`${this.ApiRest}/${id}`);
  // }

  // createTarefa(tarefa: TarefasStruct) {
  //   return this.http.post<TarefasStruct>(this.ApiRest, tarefa);
  // }

  // updateTarefa(tarefa: TarefasStruct) {
  //   return this.http.put<TarefasStruct>(
  //     `${this.ApiRest}/${tarefa.Pk_TAREFA}`,
  //     tarefa
  //   );
  // }

  // deleteTarefa(id: string) {
  //   return this.http.delete(`${this.ApiRest}/${id}`);
  // }
}
