
import {Entity, Column, PrimaryColumn, JoinColumn} from 'typeorm';

@Entity()
export default class driver {
  
  @PrimaryColumn({type: 'int'})
  id!: number;

  @Column({type: 'varchar', width: 30})
  company!: string;

  @Column({type: 'varchar', width: 30})
  site!: string;

  @Column({type: 'varchar', width: 30})
  product!: string;

  @Column({type: 'varchar', width: 12})
  map_x!: string;

  @Column({type: 'varchar', width: 12})
  map_y!: string;

  @Column({type: 'varchar', width: 20})
  phone!: string;

  @Column({type: 'varchar', width: 100})
  desc!: string;
};
