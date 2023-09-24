/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SortedByFilterComponent } from './sortedByFilter.component'
import { FormsModule } from '@angular/forms'

describe('FilterSortedByComponent', () => {
  let component: SortedByFilterComponent
  let fixture: ComponentFixture<SortedByFilterComponent>

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ SortedByFilterComponent ],
      imports: [FormsModule],
    })
    fixture = TestBed.createComponent(SortedByFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
