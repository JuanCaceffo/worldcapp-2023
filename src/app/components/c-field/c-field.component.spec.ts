import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CFieldComponent } from './c-field.component'

describe('CFieldComponent', () => {
  let component: CFieldComponent
  let fixture: ComponentFixture<CFieldComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CFieldComponent]
    })
    fixture = TestBed.createComponent(CFieldComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
