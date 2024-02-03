import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { CharacterResult } from '../model';
import { map, switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `  
    <header>
    <h1 class="text-4xl font-bold">Rick and Morty</h1>
    </header>
    <router-outlet />
    <footer class="flex gap-4">
      Rick and Morty API
    </footer>
  `
})
export class RootComponent {

}