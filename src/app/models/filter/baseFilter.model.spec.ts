import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BaseFilter } from './baseFilter.model'

describe('FilterComponent', () => {
  let component: BaseFilter
  let fixture: ComponentFixture<BaseFilter>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseFilter]
    })
    fixture = TestBed.createComponent(BaseFilter)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
