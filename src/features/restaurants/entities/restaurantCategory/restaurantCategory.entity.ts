import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../../core/base-model/base-model';

@Entity('restaurantCategory')
export class Restaurant extends BaseModel {
  @Column({ type: 'varchar', length: 64 })
  name!: string;

  @Column({ type: 'text', nullable: true })
  icon?: string;
}
