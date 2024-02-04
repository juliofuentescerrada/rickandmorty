import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserStore {
  user = signal({ name: '', surname: '' });

  changeName(name: string) {
    this.user.update((u) => ({ ...u, name }));
  }

  changeSurname(surname: string) {
    this.user.update((u) => ({ ...u, surname }));
  }
}

@Component({
  standalone: true,
  selector: 'app-user-display',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <b>{{ message() }}</b>
    </ul>
  `,
  imports: [JsonPipe, AsyncPipe],
})
export class UserDisplayComponent {
  user = input.required<{ name: string; surname: string }>();
  message = computed(() => `Hello ${this.user().name} ${this.user().surname}!`);
}

@Component({
  standalone: true,
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-user-display [user]="store.user()" />
    <button (click)="changeName()">Set name</button>
    <button (click)="changeSurname()">Set surname</button>
  `,
  imports: [UserDisplayComponent, JsonPipe],
})
export class CounterComponent {
  store = inject(UserStore);

  changeName() {
    this.store.changeName('Julio');
  }

  changeSurname() {
    this.store.changeSurname('Fuentes');
  }
}
