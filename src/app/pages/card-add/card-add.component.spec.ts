import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'
import {HttpClientModule} from '@angular/common/http'
import {RouterTestingModule} from '@angular/router/testing'
import {VariantFilterComponent} from 'src/app/components/filter/variant-filter/variant-filter.component'
import {CardAddComponent} from './card-add.component'

describe('Card Add Component', () => {
  let store: CardAddComponent
  let fixture: ComponentFixture<CardAddComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [CardAddComponent, VariantFilterComponent]
    }).compileComponents()
  }))

  it('should create', () => {
    fixture = TestBed.createComponent(CardAddComponent)
    store = fixture.debugElement.componentInstance
    expect(store).toBeTruthy()
  })
})
