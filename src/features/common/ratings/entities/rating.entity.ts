import {Column, Entity} from "typeorm";
import {BaseModel} from "../../../../core/base-model/base-model";

@Entity()
export class RatingEntity extends BaseModel{
    @Column({type:"number"})
    score!:number

    @Column({type:"string"})
    comment!:string

}
