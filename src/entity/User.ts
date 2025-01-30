import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Role } from "../enum/Role";

@Entity()
export class User {
    //  user id si bu uuid va auto generatsiya bo'ladi
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    // telegram id, bu telegram id dan olinadi
    @Column("tgid")
    tgid!: string;

    // userning ismi, bu default telegram first name'dan olinadi
    @Column({ name: "name" })
    name!: string;

    // userning telefon raqami, bu telegramdan olinadi, majburiy
    @Column("phone")
    phone!: string;


    // User role (enum)
    @Column({
        type: "enum",
        enum: Role,
        default: Role.USER,
    })
    role!: Role;

    // User's balance (numeric/decimal value)
    @Column("decimal", { precision: 10, scale: 2, default: 0 })
    balance!: number;

}
