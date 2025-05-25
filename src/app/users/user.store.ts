// Simple Store implementation as "minirx" // cspell:ignore minirx

type Updater<T> = (state: T) => T;

export class Store<T> {
  private state: T;
  private listeners: Array<(state: T) => void> = [];

  constructor(initialState: T) {
    this.state = initialState;
  }

  set(newState: T) {
    this.state = newState;
    this.emit();
  }

  update(updater: Updater<T>) {
    this.state = updater(this.state);
    this.emit();
  }

  subscribe(listener: (state: T) => void) {
    this.listeners.push(listener);
    listener(this.state);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private emit() {
    this.listeners.forEach((listener) => listener(this.state));
  }
}
export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  role: string;
}

export class UserStore extends Store<User[]> {
  constructor() {
    super([]);
  }

  setUsers(users: User[]) {
    this.set(users);
  }

  addUser(user: User) {
    this.update((users) => [...users, user]);
  }

  updateUser(updatedUser: User) {
    this.update((users) =>
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
    );
  }

  deleteUser(id: number) {
    this.update((users) => users.filter((user) => user.id !== id));
  }
}
