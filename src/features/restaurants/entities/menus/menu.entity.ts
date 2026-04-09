import {BaseModel} from "../../../../core/base-model/base-model";
import {Column, Entity, OneToMany} from "typeorm";


@Entity('menu')
export class MenuEntity extends BaseModel{
    @Column({length:128})
    title!:string

    @Column({name:'restaurantId'})
    restaurantId:number
    
}