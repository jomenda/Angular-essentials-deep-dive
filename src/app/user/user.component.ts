import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Signals Are Trackable Data Containers.
  //A signal is an object that strores a value(any type of value, including nested objects).
  //Signals are reactive, meaning that when the value changes, the UI updates automatically.
  //Signals are used to manage state in Angular applications.
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  // get imagePath(): string {
  //   return `assets/users/${this.selectedUser.avatar}`;
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
