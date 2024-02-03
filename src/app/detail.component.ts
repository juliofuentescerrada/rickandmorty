import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import { Character } from '../model';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterLink],
  styles: ` :host { @apply flex flex-col grow; }`,
  template: `
    <a class="text-blue-400 underline" [routerLink]="['']">Back</a>
    @if (character$ | async; as result) {
      <main class="w-full grow">
        <img [attr.src]="result.image" [attr.alt]="result.name" />
        <h2>{{ result.name }}</h2>
        <h3>{{ result.origin.name }} - {{ result.status }}</h3>
      </main>
    }
  `,
})
export class DetailComponent {
  http = inject(HttpClient);
  page = input('', {
    alias: 'id',
    transform: (id) => `https://rickandmortyapi.com/api/character/${id}`,
  });
  character$ = toObservable(this.page).pipe(
    switchMap((url) => this.http.get<Character>(url)),
  );
}
