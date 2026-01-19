import { Column, Entity } from "typeorm";
import { BaseEntity } from "./Base";

@Entity()
export class User extends BaseEntity {
  @Column({ type: "varchar", length: 100, nullable: false })
  Name!: string;

  @Column({ type: "varchar", length: 60, nullable: false })
  Email!: string;

  @Column({ type: "text", nullable: false })
  Password!: string;
}
