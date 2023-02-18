import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Comment } from './comment.entity';

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  body: string;

  @Column('varchar', { length: 256 })
  title: string;

  // RELATIONS

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'authorId' })
  author: User;

  @Column('int', { nullable: false })
  authorId: number;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
