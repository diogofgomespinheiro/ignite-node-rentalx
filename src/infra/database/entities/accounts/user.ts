import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
class TypeORMUser {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  driver_license: string;

  @Column()
  isAdmin: boolean;

  @CreateDateColumn()
  created_at: Date;
}

export { TypeORMUser };
