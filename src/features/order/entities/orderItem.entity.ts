import {BaseModel} from "../../../core/base-model/base-model";
import {Column, Entity} from "typeorm";
import {ItemType} from "../../../core/enums/enums";

@Entity()
export class OrderItemEntity extends BaseModel{
    @Column({})
    orderId!:number

    @Column({type:"enum"})
    itemType!:ItemType

    @Column({type:"int"})
    itemId:number

    @Column({type:"int"})
    quantity!:number

    @Column({type:"decimal",precision:10,scale:2})
    unitPrice!:number

}