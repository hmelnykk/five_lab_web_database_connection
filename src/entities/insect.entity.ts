import { Column, Entity } from "typeorm";

@Entity()
export class Insect {
    @Column()
    id: number;
    name: string;
    velocity: number;
    weight: number;
}
