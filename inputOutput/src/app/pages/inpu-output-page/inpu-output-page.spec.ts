import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InpuOutputPage } from './inpu-output-page';

describe('InpuOutputPage', () => {
  let component: InpuOutputPage;
  let fixture: ComponentFixture<InpuOutputPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InpuOutputPage],
    }).compileComponents();

    fixture = TestBed.createComponent(InpuOutputPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
