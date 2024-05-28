import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      role: 'ADMIN', // Added user with role ADMIN
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      role: 'ENGINEER', // Added user with role DEVELOPER
    },
  ];

  findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  findOne(id: number) {
    if (id) {
      return this.users.find((user) => user.id == id);
    }
  }
  create(user: {
    name: string;
    role: 'INTERN' | 'ADMIN' | 'ENGINEER';

    email: string;
  }) {
    const userByHighesId = this.users.length;
    this.users.push({ ...user, id: userByHighesId });
    return this.users;
  }
  update(
    id: number,
    userUpdate: {
      id?: number;
      name?: string;
      role?: 'INTERN' | 'ADMIN' | 'ENGINEER';

      email?: string;
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id == id) {
        
        return { ...user, ...userUpdate };
      }
      return user;
    });
    return this.users;
  }
  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
