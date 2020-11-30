import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecievePaypalPage } from './recieve-paypal.page';

describe('RecievePaypalPage', () => {
  let component: RecievePaypalPage;
  let fixture: ComponentFixture<RecievePaypalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievePaypalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecievePaypalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
