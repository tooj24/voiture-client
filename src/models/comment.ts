import { User } from './user';

export interface Comment {
  content: string;
  owner: User;
  voiture: string;
  createdAt: Date;
}