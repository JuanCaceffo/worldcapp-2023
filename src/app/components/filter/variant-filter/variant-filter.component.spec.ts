import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'
import {VariantFilterComponent} from './variant-filter.component'
import {FormsModule} from '@angular/forms'

describe('FilterVariantComponent', () => {
  let component: VariantFilterComponent
  let fixture: ComponentFixture<VariantFilterComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [VariantFilterComponent]
    }).compileComponents()
    fixture = TestBed.createComponent(VariantFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
