import {Column, Entity} from "typeorm";
import {BaseModel} from "../../../../core/base-model/base-model";


@Entity()
export class WorkTimeEntity extends BaseModel{

    @Column({type:"smallint",length:7})
    dayOfWeek!:number

    @Column({type:"timestamp"})
    openTime!:string

    @Column({type:'timestamp'})
    closeTime!:string

    @Column({type:"boolean",default:false})
    isDayOff!:boolean

}
