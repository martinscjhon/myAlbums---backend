import { Column, Entity } from "typeorm";
import { BaseEntity } from "./Base";

@Entity()
export class Album extends BaseEntity {
  @Column({ type: "varchar", length: 100, nullable: false })
  Name!: string;

  @Column({ type: "varchar", length: 60, nullable: false })
  Description!: string;

  @Column({ type: "varchar", length: 60, nullable: false })
  UserUuid!: string;
}
