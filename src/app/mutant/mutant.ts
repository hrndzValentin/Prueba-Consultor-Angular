import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mutant',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './mutant.html',
  styleUrls: ['./mutant.css'],
})
export class Mutant {
  dnaInput: string = '';
  result: string = '';

  checkMutant() {
    console.log('CLICK DETECTADO');

    const dna = this.dnaInput
      .split('\n')
      .map((row) => row.trim())
      .filter((row) => row.length > 0);

    // ✅ Validación NxN
    if (!dna.every((row) => row.length === dna.length)) {
      this.result = '❌ DNA inválido: debe ser NxN';
      return;
    }

    // ✅ Validación de caracteres
    const validChars = /^[ATCG]+$/;

    if (!dna.every((row) => validChars.test(row))) {
      this.result = '❌ DNA inválido: solo se permiten A, T, C, G';
      return;
    }

    this.result = this.isMutant(dna) ? '🧬 Mutante detectado' : '👤 Humano normal';
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
          // 🔥 Optimización: evitar salirnos antes de tiempo
          const endX = i + dx * 3;
          const endY = j + dy * 3;

          if (!isValid(endX, endY)) continue;

          let count = 1;

          for (let k = 1; k < 4; k++) {
            const x = i + dx * k;
            const y = j + dy * k;

            if (matrix[x][y] === matrix[i][j]) {
              count++;
            } else {
              break;
            }
          }

          if (count === 4) {
            sequences++;
            if (sequences > 1) return true; // 🔥 early exit
          }
        }
      }
    }

    return false;
  }
}
