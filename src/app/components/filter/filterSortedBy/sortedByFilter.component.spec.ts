/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SortedByFilterComponent } from './sortedByFilter.component'

describe('FilterSortedByComponent', () => {
  let component: SortedByFilterComponent
  let fixture: ComponentFixture<SortedByFilterComponent>

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ SortedByFilterComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedByFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
