import {Column, Entity} from "typeorm";
import {BaseModel} from "../../../core/base-model/base-model";
import {OrderStatus} from "../../../core/enums/enums";

@Entity('order')
export class OrderEntity extends  BaseModel{
    @Column({type: 'int'})
    userId!: number

    @Column({type: 'int'})
    restaurantId!: string

    @Column({type: 'int'})
    placeId!: number

    @Column({type: 'datetime'})
    scheduledAt!: Date

    @Column({type: 'int'})
    guestsCount!: number

    @Column({type: 'enum', enum: OrderStatus})
    status!: OrderStatus

    @Column({type: 'text', nullable: true})
    note?: string
}
