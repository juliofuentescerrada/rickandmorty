import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { CharacterCardComponent } from './character-card.component';
import { CharacterResult } from '../model';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `:host { @apply flex flex-col grow; }`,
  template: `
    @if (characters$ | async; as result) {
      <nav class="flex gap-4">
        @if (result.info.prev) {
          <a class="text-blue-400 underline" href="#" (click)="loadHome()"
            >Home</a
          >
          <a
            class="text-blue-400 underline"
            href="#"
            (click)="loadPrev(result.info.prev)"
            >Prev</a
          >
        }
        @if (result.info.next) {
          <a
            class="text-blue-400 underline"
            href="#"
            (click)="loadNext(result.info.next)"
            >Next</a
          >
        }
      </nav>
      <main class="flex flex-wrap gap-4 justify-center items-start grow">
        @for (character of result.results; track character.id) {
          <app-character-card class="flex" [character]="character" />
        }
      </main>
    }

    <span>Test works!</span>
  `,
  imports: [AsyncPipe, RouterLink, NgOptimizedImage, CharacterCardComponent],
})
export class ListComponent {
  http = inject(HttpClient);

  page = signal('https://rickandmortyapi.com/api/character');

  characters$ = toObservable(this.page).pipe(
    switchMap((url) => this.http.get<CharacterResult>(url)),
  );

  loadHome() {
    this.page.set('https://rickandmortyapi.com/api/character');
  }

  loadPrev(prev: string) {
    this.page.set(prev);
  }

  loadNext(next: string) {
    this.page.set(next);
  }
}
