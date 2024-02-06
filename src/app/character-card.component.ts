import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Character } from '../model';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-character-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <a
      [routerLink]="['detail', character().id]"
      class="group cursor-pointer overflow-hidden rounded border shadow transition hover:scale-105 hover:shadow-2xl"
    >
      <img
        [ngSrc]="character().image"
        [attr.alt]="character().name"
        height="300"
        width="300"
        priority
      />
      <h2 class="flex justify-end p-4 text-lg font-bold">
        {{ character().name }}
      </h2>
    </a>
  `,
})
export class CharacterCardComponent {
  character = input.required<Character>();
}
