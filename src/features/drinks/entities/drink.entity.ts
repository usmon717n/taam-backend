import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model/base-model';

@Entity('drink')
export class Drink extends BaseModel {
  @Column()
  menuId!: number;

  @Column()
  drinkCategoryId!: number;

  @Column({ type: 'varchar', length: 128 })
  name!: string;

  @Column({ type: 'text', nullable: true })
  description!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price!: number;

  @Column({ type: 'text' })
  imageUrl!: string;

  @Column({ type: 'bool' })
  isAvailable!: boolean;
}
