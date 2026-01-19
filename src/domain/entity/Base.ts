import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn('increment')
  @Index()
  Id!: number;

  @Column({ type: 'varchar', length: 60, nullable: false })
  Uuid!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: false })
  CreatedAt!: Date;

  @Column({ type: 'boolean', default: true, nullable: false })
  Enable!: boolean;
}
