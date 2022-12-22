import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdgetDemoProjectComponent } from './bdget-demo-project.component';

describe('BdgetDemoProjectComponent', () => {
  let component: BdgetDemoProjectComponent;
  let fixture: ComponentFixture<BdgetDemoProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdgetDemoProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdgetDemoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
