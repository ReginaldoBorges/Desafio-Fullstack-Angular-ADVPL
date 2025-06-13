import { PoTableAction, PoTableColumn } from '@po-ui/ng-components';

/**
 * Classe que representa a estrutura da Tarefa.
 */
export class TarefasStruct {
  /**
   * Retorna uma matriz de acções para a grade de tarefas.
   * @return Uma matriz de objetos PoTableAction contendo as ações da grade.
   */
  static getGridActions(): Array<PoTableAction> {
    return [
      {
        label: 'Editar',
        icon: 'icon-edit',
      },
      {
        label: 'Excluir',
        icon: 'icon-delete',
        type: 'danger',
      },
    ];
  }

  /**
   *  Retorna uma matriz de colunas para o grid de tarefas.
   * @return Uma matriz de objetos PoTableColumn contendo as colunas da grade.
   */
  static getGridColumns(): Array<PoTableColumn> {
    return [
      {
        label: 'Código',
        property: 'ZZG_CODIGO',
        type: 'string',
      },
      {
        label: 'Título',
        property: 'ZZG_TITULO',
        type: 'string',
      },
      {
        label: 'Descrição',
        property: 'ZZG_DESCRI',
        type: 'string',
      },
      {
        label: 'Situação',
        property: 'ZZG_SITUAC',
        type: 'string',
      },
      {
        label: 'Usuário de Inclusão',
        property: 'ZZG_USUINC',
        type: 'string',
      },
      {
        label: 'Data de Inclusão',
        property: 'ZZG_DTINC',
        type: 'date',
      },
      {
        label: 'Data de Conclusão',
        property: 'ZZG_DTCONC',
        type: 'date',
      },
    ];
  }
}

/**
 *  Interface representing the structure of Tarefas.
 */
export interface TarefasStruct {
  Pk_TAREFA: string;
  ZZG_FILIAL: string;
  ZZG_CODIGO: string;
  ZZG_TITULO: string;
  ZZG_DESCRI: string;
  ZZG_SITUAC: string;
  ZZG_USUINC: string;
  ZZG_DTINC: Date;
  ZZG_DTCONC: Date;
}
