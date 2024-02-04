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
      class="group transition cursor-pointer rounded border shadow hover:scale-105 hover:shadow-2xl overflow-hidden"
    >
      <img
        [ngSrc]="character().image"
        [attr.alt]="character().name"
        height="300"
        width="300"
        priority
      />
      <h2 class="font-bold text-lg p-4 flex justify-end">
        {{ character().name }}
      </h2>
    </a>
  `,
})
export class CharacterCardComponent {
  character = input.required<Character>();
}
