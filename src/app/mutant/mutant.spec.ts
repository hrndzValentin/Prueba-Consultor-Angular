import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mutant } from './mutant';

describe('Mutant', () => {
  let component: Mutant;
  let fixture: ComponentFixture<Mutant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mutant],
    }).compileComponents();

    fixture = TestBed.createComponent(Mutant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
