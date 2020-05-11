import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantsComponent } from './assistants.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AssistantsComponent', () => {
  let component: AssistantsComponent;
  let fixture: ComponentFixture<AssistantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ AssistantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
