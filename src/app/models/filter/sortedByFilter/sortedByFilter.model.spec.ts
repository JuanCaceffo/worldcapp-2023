import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SortedByFilterComponent } from './sortedByFilter.model'

describe('FilterComponent', () => {
  let component: SortedByFilterComponent
  let fixture: ComponentFixture<SortedByFilterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortedByFilterComponent]
    })
    fixture = TestBed.createComponent(SortedByFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
