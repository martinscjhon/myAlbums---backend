import { Column, Entity } from "typeorm";
import { BaseEntity } from "./Base";

@Entity()
export class Photo extends BaseEntity {
  @Column({ type: "varchar", length: 100, nullable: false })
  Title!: string;

  @Column({ type: "text", nullable: false })
  Path!: string;

  @Column({ type: "varchar", length: 60, nullable: false })
  Description!: string;

  @Column({ type: "varchar", length: 60, nullable: false })
  Color!: string;

  @Column({ type: "varchar", length: 60, nullable: false })
  AlbumUuid!: string;
}
