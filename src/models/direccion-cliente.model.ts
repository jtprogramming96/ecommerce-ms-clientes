import {Entity, model, property} from '@loopback/repository';

@model()
export class DireccionCliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomenclatura: string;

  @property({
    type: 'string',
    required: true,
  })
  numero: string;


  constructor(data?: Partial<DireccionCliente>) {
    super(data);
  }
}

export interface DireccionClienteRelations {
  // describe navigational properties here
}

export type DireccionClienteWithRelations = DireccionCliente & DireccionClienteRelations;
