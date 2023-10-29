import {ButtonAddCardComponent} from './../button-add-card/button-add-card.component'
/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing'
/* import {By} from '@angular/platform-browser'
import {DebugElement} from '@angular/core' */
import {ProfileMissingFigusComponent} from './profile-missing-figus.component'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

describe('ProfileMissingFigusComponent', () => {
  let component: ProfileMissingFigusComponent
  let fixture: ComponentFixture<ProfileMissingFigusComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileMissingFigusComponent, ButtonAddCardComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMissingFigusComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
