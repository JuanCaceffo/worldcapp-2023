/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {ProfileFigusComponent} from './profile-figus.component'
import {ButtonAddCardComponent} from '../button-add-card/button-add-card.component'
import {RouterTestingModule} from '@angular/router/testing'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

describe('ProfileFigusComponent', () => {
  let component: ProfileFigusComponent
  let fixture: ComponentFixture<ProfileFigusComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileFigusComponent, ButtonAddCardComponent],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        RouterTestingModule
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFigusComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
