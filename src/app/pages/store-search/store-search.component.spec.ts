import {ComponentFixture, TestBed} from '@angular/core/testing'

import {StoreSearchComponent} from './store-search.component'
import {BaseFilterComponent} from 'src/app/components/filter/base-filter.component'
import {CardMarketComponent} from 'src/app/components/card-market/card-market.component'
import {IconFieldComponent} from 'src/app/components/fields/icon-field/icon-field.component'
import {InputFieldComponent} from 'src/app/components/fields/input-field/input-field.component'
import {FieldLabelComponent} from 'src/app/components/fields/field-label/field-label.component'
import {FormsModule} from '@angular/forms'
import {SortedByFilterComponent} from 'src/app/components/filter/sorted-by-filter/sorted-by-filter.component'
import {ControlFieldComponent} from 'src/app/components/fields/control-field/control-field.component'

describe('StoreSearchComponent', () => {
  let component: StoreSearchComponent
  let fixture: ComponentFixture<StoreSearchComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StoreSearchComponent,
        BaseFilterComponent,
        SortedByFilterComponent,
        CardMarketComponent,
        IconFieldComponent,
        InputFieldComponent,
        FieldLabelComponent,
        ControlFieldComponent
      ],
      imports: [FormsModule]
    })
    fixture = TestBed.createComponent(StoreSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
