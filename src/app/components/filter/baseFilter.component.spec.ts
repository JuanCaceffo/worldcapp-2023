import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'

import { BaseFilterComponent } from './baseFilter.component'
import { VariantFilterComponent } from './variantFilter/variantFilter.component'
import { SortedByFilterComponent } from './sortedByFilter/sortedByFilter.component'
import { AppComponent } from 'src/app/app.component'

describe('BaseFilterComponent', () => {
  let component: BaseFilterComponent
  let fixture: ComponentFixture<BaseFilterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, BaseFilterComponent, VariantFilterComponent, SortedByFilterComponent],
      imports: [FormsModule],
    })
    fixture = TestBed.createComponent(BaseFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  // CONSULTAR: Titulo cambia luego de renderizar y no asigna correctamente el nombre
  // it('Se obtiene correctamente el nombre del filtro', () => {
  //   const titleFilter = fixture.debugElement.nativeElement.querySelector('[data-testid="titleFilter"]')
  //   expect(titleFilter.textContent).toBe('Filtros')
  // })
})
