import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiComponente2 } from './mi-componente2';

describe('MiComponente2', () => {
  let component: MiComponente2;
  let fixture: ComponentFixture<MiComponente2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiComponente2],
    }).compileComponents();

    fixture = TestBed.createComponent(MiComponente2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
