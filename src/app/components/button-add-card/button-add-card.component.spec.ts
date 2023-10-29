/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {ButtonAddCardComponent} from './button-add-card.component'
import { FormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

describe('ButtonAddCardComponent', () => {
  let component: ButtonAddCardComponent
  let fixture: ComponentFixture<ButtonAddCardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonAddCardComponent],
      imports: [FormsModule, RouterTestingModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
