import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'

import { BaseFilterComponent } from './baseFilter.component'
import { VariantFilterComponent } from './variantFilter/variantFilter.component'
import { SortedByFilterComponent } from './sortedByFilter/sortedByFilter.component'
import { AppComponent } from 'src/app/app.component'
import { getByTestId } from 'src/app/helpers/test.helper'

describe('BaseFilterComponent', () => {
  let component: BaseFilterComponent
  let fixture: ComponentFixture<BaseFilterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BaseFilterComponent,
        VariantFilterComponent,
        SortedByFilterComponent
      ],
      imports: [FormsModule]
    })
    fixture = TestBed.createComponent(BaseFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Se obtiene correctamente el nombre del filtro', () => {
    const titleFilter = getByTestId(fixture, 'titleFilter')
    //ToBeFalsy realiza el test implementando !!(valueExpected), por lo que genera una respuesta boolean
    expect(titleFilter.textContent).toBeFalsy()
    component.childFilter = new VariantFilterComponent()
    component.title = component.childFilter.title
    fixture.detectChanges()
    expect(titleFilter.textContent).toBe('Filtros')
  })
})
