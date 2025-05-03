import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneticInsightsComponent } from './genetic-insights.component';

describe('GeneticInsightsComponent', () => {
  let component: GeneticInsightsComponent;
  let fixture: ComponentFixture<GeneticInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneticInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneticInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
