import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { CharacterResult } from '../model';
import { map, switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-list',
  imports: [AsyncPipe, RouterLink],
  styles: ` :host { @apply flex flex-col grow; }`,
  template: `  
  @if (characters$ | async; as result) {
    <nav class="flex gap-4">
      @if(result.info.prev){
        <a class="text-blue-400 underline" href="#" (click)="loadHome()">Home</a>
        <a class="text-blue-400 underline" href="#" (click)="loadPrev(result.info.prev)">Prev</a>
      }
      @if(result.info.next){
        <a class="text-blue-400 underline" href="#" (click)="loadNext(result.info.next)">Next</a>
      }
    </nav>
      <main class="flex flex-wrap gap-4 justify-center items-start grow">
      @for (character of result.results; track character.id) {
        <a [routerLink]="['detail', character.id]" class="cursor-pointer rounded border shadow hover:scale-105 hover:shadow-2xl">
        <img [attr.src]="character.image" [attr.alt]="character.name">
        <h2 class="font-bold text-lg">{{character.name}}</h2>

      </a>
      }
      </main>
  }
  `
})
export class ListComponent {
  http = inject(HttpClient);
  page = signal('https://rickandmortyapi.com/api/character');
  characters$ = toObservable(this.page).pipe(switchMap(url => this.http.get<CharacterResult>(url)));

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
