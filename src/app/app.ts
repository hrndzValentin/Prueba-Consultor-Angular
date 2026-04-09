import { Component } from '@angular/core';
import { Mutant } from './mutant/mutant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Mutant],
  template: `
    <div>
      <app-mutant></app-mutant>
    </div>
  `,
})
export class App {}
