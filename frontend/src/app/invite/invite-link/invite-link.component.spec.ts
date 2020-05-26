import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InviteLinkComponent } from './invite-link.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

describe('InviteLinkComponent', () => {
  let component: InviteLinkComponent;
  let fixture: ComponentFixture<InviteLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: MAT_SNACK_BAR_DATA, useValue: {} }
      ],
      declarations: [ InviteLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
