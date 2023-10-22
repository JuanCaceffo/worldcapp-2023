import { ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing"
import { HttpClientModule } from "@angular/common/http"
import { RouterTestingModule } from "@angular/router/testing"
import { CardSearchComponent } from "./card-search.component"
import { BaseFilterComponent } from "src/app/components/filter/base-filter.component"
import { VariantFilterComponent } from "src/app/components/filter/variant-filter/variant-filter.component"

describe('Card Search Component', () => {
  let store: CardSearchComponent
  let fixture: ComponentFixture<CardSearchComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [CardSearchComponent, BaseFilterComponent, VariantFilterComponent]
    }).compileComponents()
  }))

  it('should create', () => {
    fixture = TestBed.createComponent(CardSearchComponent)
    store = fixture.debugElement.componentInstance    
    expect(store).toBeTruthy()    
  })
})