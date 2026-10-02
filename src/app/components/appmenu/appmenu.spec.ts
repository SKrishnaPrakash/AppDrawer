import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMenuComponent } from './appmenu';

describe('Appmenu', () => {
  let component: AppMenuComponent;
  let fixture: ComponentFixture<AppMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppMenuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
