import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformationAppPage } from './information-app.page';

describe('InformationAppPage', () => {
  let component: InformationAppPage;
  let fixture: ComponentFixture<InformationAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformationAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
