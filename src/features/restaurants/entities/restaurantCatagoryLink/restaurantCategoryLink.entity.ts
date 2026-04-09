import {BaseModel} from "../../../../core/base-model/base-model";
import {Column, Entity} from "typeorm";


@Entity('restaurantCategoryLink')
export class RestaurantCategoryLinkEntity extends BaseModel{
    @Column({type:"int"})
    restaurantId!:number

    @Column({type:"int"})
    categoryId!:number

}