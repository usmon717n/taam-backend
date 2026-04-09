import {Column, Entity} from "typeorm";
import {BaseModel} from "../../../../../core/base-model/base-model";

@Entity('restaurants')
export class RestaurantEntity extends BaseModel{
    @Column({length:64})
    name!:string

    @Column({type:"text"})
    description!: string

    @Column({length:64})
    address!:string

    @Column({length:32})
    phone!:string

    @Column({type:"text"})
    logoUrl!:string

    @Column({type:"float"})
    avgRating!: number


    @Column({type:"bool"})
    isActive!:boolean

}