import {Column, Entity} from 'typeorm';
import { BaseModel } from '../../../core/base-model/base-model';

@Entity()
export class FoodEntity extends BaseModel {

    @Column({type:"string",length:128})
    name!:string

    @Column({type:"text"})
    description!:string

    @Column({type:"decimal",precision:10,scale:2})
    price!:number

    @Column({type:"text"})
    imageUrl!:string

    @Column({type:"boolean"})
    isAvailable!:boolean

}