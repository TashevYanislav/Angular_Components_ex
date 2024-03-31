import { Post } from './post';

export interface User {
  themes: string[];
  posts: Post[];
  _id: string;
  tel: string;
  email: string;
  username: string;
  password: string;
  created_at: string;
  updatedAt: string;
  __v: number;
}

export interface AuthUser {
  firstName: string;
  email: string;
  phoneNumber: string;
  password: string;
  id: string;
}

export interface profileDetails{
  username: string;
  email: string;
  tel: string;
}