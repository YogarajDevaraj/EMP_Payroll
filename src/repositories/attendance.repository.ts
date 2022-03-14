import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Attendance, AttendanceRelations} from '../models';

export class AttendanceRepository extends DefaultCrudRepository<
  Attendance,
  typeof Attendance.prototype.Employe_id,
  

  AttendanceRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Attendance, dataSource);
  }
}
