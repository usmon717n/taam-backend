import {Column, Entity} from "typeorm";
import {BaseModel} from "../../../core/base-model/base-model";


@Entity()
export class DesertEntity extends BaseModel{
    @Column({type:"string",length:128})
    name!:string

    @Column({type:"text"})
    description!:string

    @Column({type:"decimal",precision:10,scale:2})
    price:number

    @Column({type:"text"})
    imageUrl!:string

    @Column({type:"boolean",default:true})
    isAvailable!:boolean
}



//
// table Dessert {
//     id int pk
//     menuId int [not null, ref: > Menu.id]
//     dessertCategoryId int [not null, ref: > DessertCategory.id]
//     name varchar(128) [not null]
//     description text [not null]
//     price decimal(10,2) [not null]
//     imageUrl text [not null]
//     isAvailable boolean [not null]
// }