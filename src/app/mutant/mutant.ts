import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mutant',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mutant.html',
  styleUrls: ['./mutant.css']
})
export class Mutant {
  dnaInput: string = '';
  result: string = '';

  checkMutant() {
    console.log('CLICK DETECTADO');
    const dna = this.dnaInput.split('\n').map((row) => row.trim());

    // Validación NxN
    if (!dna.every((row) => row.length === dna.length)) {
      this.result = '❌ DNA inválido';
      return;
    }

    this.result = this.isMutant(dna) ? '🧬 Es mutante' : '👤 No es mutante';
  }

  isMutant(dna: string[]): boolean {
    const n = dna.length;
    let sequences = 0;

    const matrix = dna.map((row) => row.split(''));

    const directions = [
      [0, 1], // →
      [1, 0], // ↓
      [1, 1], // ↘
      [1, -1], // ↙
    ];

    const isValid = (x: number, y: number) => x >= 0 && x < n && y >= 0 && y < n;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (const [dx, dy] of directions) {
          let count = 1;
          let x = i + dx;
          let y = j + dy;

          while (isValid(x, y) && matrix[x][y] === matrix[i][j]) {
            count++;
            if (count === 4) {
              sequences++;
              if (sequences > 1) return true;
              break;
            }
            x += dx;
            y += dy;
          }
        }
      }
    }

    return false;
  }
}
