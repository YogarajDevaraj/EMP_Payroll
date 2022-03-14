import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Employee,
  Attendance,
} from '../models';
import {EmployeeRepository} from '../repositories';

export class EmployeeAttendanceController {
  constructor(
    @repository(EmployeeRepository)
    public employeeRepository: EmployeeRepository,
  ) { }

  @get('/employees/{id}/attendance', {
    responses: {
      '200': {
        description: 'Attendance belonging to Employee',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Attendance)},
          },
        },
      },
    },
  })
  async getAttendance(
    @param.path.string('id') id: typeof Employee.prototype.Employee_Id,
  ): Promise<Attendance> {
    return this.employeeRepository.employe_Id(id);
  }
}
