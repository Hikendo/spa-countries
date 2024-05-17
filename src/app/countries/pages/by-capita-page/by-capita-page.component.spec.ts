import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCapitaPageComponent } from './by-capita-page.component';

describe('ByCapitaPageComponent', () => {
  let component: ByCapitaPageComponent;
  let fixture: ComponentFixture<ByCapitaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ByCapitaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByCapitaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
