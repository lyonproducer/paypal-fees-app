import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendPaypalPage } from './send-paypal.page';

describe('SendPaypalPage', () => {
  let component: SendPaypalPage;
  let fixture: ComponentFixture<SendPaypalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPaypalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendPaypalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
