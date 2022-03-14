import {Entity, model, property} from '@loopback/repository';

@model()
export class Attendance extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  Employe_id: string;

  @property({
    type: 'string',
  })
  date?: string;

  @property({
    type: 'number',
    required: true,
  })
  Logged_Hours: number;

  @property({
    type: 'boolean',
    required: true,
  })
  IsExtra_Time: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  Isleave: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  IsDeleted?: boolean;


  constructor(data?: Partial<Attendance>) {
    super(data);
  }
}

export interface AttendanceRelations {
  // describe navigational properties here
}

export type AttendanceWithRelations = Attendance & AttendanceRelations;
