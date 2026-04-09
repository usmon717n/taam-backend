import {Column, Entity} from "typeorm";
import {BaseModel} from "../../../core/base-model/base-model";

@Entity('place')
export class PlaceEntity extends BaseModel{
    @Column({type:"int"})
    restaurantId!:number

    @Column({type:"int"})
    tableNumber!:number

    @Column({type:"int"})
    capacity!:number

    @Column({type:"bool"})
    isAvailable!:boolean

    @Column({length:128})
    description!: string
}
