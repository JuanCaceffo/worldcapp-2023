import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SortedByFilter } from './sortedByFilter.model'

describe('FilterComponent', () => {
  let component: SortedByFilter
  let fixture: ComponentFixture<SortedByFilter>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortedByFilter]
    })
    fixture = TestBed.createComponent(SortedByFilter)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
