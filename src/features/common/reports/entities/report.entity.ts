import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../../core/base-model/base-model';
import { ReportType } from '../../../../core/enums/enums';

@Entity('report')
export class Report extends BaseModel {
  @Column()
  restaurantId!: number;

  @Column()
  userId!: number;

  @Column({ type: 'enum', enum: ReportType })
  reportType!: ReportType;

  @Column({ type: 'varchar', length: 128 })
  reason!: string;

  @Column({ type: 'text', nullable: true })
  description!: string;
}
