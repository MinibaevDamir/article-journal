import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id'
    })
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    email: string;

    @Column({
        nullable: true
    })
    blogDescription: string;

    @Column()
    password: string;

    @Column({
        nullable: true,
        type: 'bytea'
    })
    logo: Uint8Array;

    @Column({
        nullable: true,
        type: 'bytea'
    })
    background: Uint8Array;
}
