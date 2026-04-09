import {Column, Entity} from "typeorm";
import {BaseModel} from "../../../../core/base-model/base-model";

@Entity('foodCategory')
export class FoodCategoryEntity extends BaseModel{
    @Column({length:64})
    name!:string
}