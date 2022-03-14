import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Attendance} from './attendance.model';

@model()
export class Employee extends Entity {
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
  Employee_Id: string;

  @property({
    type: 'string',
    required: true,
  })
  Employee_Name: string;

  @property({
    type: 'number',
    required: true,
  })
  Employee_Salary: number;

  @property({
    type: 'number',
  })
  Phone_Number?: number;

  @property({
    type: 'string',
    required: true,
  })
  Employee_Address: string;

  @property({
    type: 'string',
  })
  Professional_Email?: string;

  @property({
    type: 'string',
  })
  Personal_Email?: string;

  @property({
    type: 'string',
  })
  Designation?: string;

  @property({
    type: 'string',
    required: true,
  })
  Joining_Date: string;

  @property({
    type: 'string',
  })
  DOB?: string;

  @property({
    type: 'string',
  })
  Blood_Group?: string;

  @belongsTo(() => Attendance, {name: 'employe_Id'})
  employe_id: string;

  constructor(data?: Partial<Employee>) {
    super(data);
  }
}

export interface EmployeeRelations {
  // describe navigational properties here
}

export type EmployeeWithRelations = Employee & EmployeeRelations;
