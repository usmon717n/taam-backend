import {Column, Entity} from "typeorm";
import {BaseModel} from "../../../core/base-model/base-model";

@Entity()
export class DrinkCategoryEntity extends BaseModel{
    @Column({type:"string",length:32})
    name!:string
}
