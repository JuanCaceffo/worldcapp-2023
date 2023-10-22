/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {SortedByFilterComponent} from './sorted-by-filter.component'
import {FormsModule} from '@angular/forms'

describe('FilterSortedByComponent', () => {
  let component: SortedByFilterComponent
  let fixture: ComponentFixture<SortedByFilterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        SortedByFilterComponent,
      ]
    })
    fixture = TestBed.createComponent(SortedByFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
