import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Employee, EmployeeRelations, Attendance} from '../models';
import {AttendanceRepository} from './attendance.repository';

export class EmployeeRepository extends DefaultCrudRepository<
  Employee,
  typeof Employee.prototype.Employee_Id,
  EmployeeRelations
> {

  public readonly employe_Id: BelongsToAccessor<Attendance, typeof Employee.prototype.Employee_Id>;

  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource, @repository.getter('AttendanceRepository') protected attendanceRepositoryGetter: Getter<AttendanceRepository>,
  ) {
    super(Employee, dataSource);
    this.employe_Id = this.createBelongsToAccessorFor('employe_Id', attendanceRepositoryGetter,);
    this.registerInclusionResolver('employe_Id', this.employe_Id.inclusionResolver);
  }
}
