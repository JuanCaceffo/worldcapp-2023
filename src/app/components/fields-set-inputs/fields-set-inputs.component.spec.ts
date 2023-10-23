/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {FieldsSetInputsComponent} from './fields-set-inputs.component'

describe('FieldsSetInputsComponent', () => {
  let component: FieldsSetInputsComponent
  let fixture: ComponentFixture<FieldsSetInputsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldsSetInputsComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsSetInputsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
