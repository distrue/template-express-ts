import {Entity, Column, PrimaryColumn, JoinColumn, OneToOne} from 'typeorm';
import Driver from './driver';

@Entity()
export default class task {
  
  @PrimaryColumn({type: 'int'})
  id!: number;

  @Column({type: 'varchar', width: 6})
  team!: string;

  @Column({type: 'varchar', width: 20})
  name!: string;

  @Column({type: 'varchar', width: 20})
  phone!: string;

  @Column({type: 'int', default: 55})
  status!: number;

  @OneToOne(() => Driver, driver => driver.id)
  @JoinColumn()
  assign!: Driver;

  @Column({type: 'datetime'})
  start_time!: Date;
};
