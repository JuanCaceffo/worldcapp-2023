import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VariantFilter } from './variantFilter.model'

describe('FilterComponent', () => {
  let component: VariantFilter
  let fixture: ComponentFixture<VariantFilter>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariantFilter]
    })
    fixture = TestBed.createComponent(VariantFilter)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
