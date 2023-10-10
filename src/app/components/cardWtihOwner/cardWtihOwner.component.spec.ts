import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing'

import { CardWtihOwnerComponent } from './cardWtihOwner.component'

describe('CardWtihOwnerComponent', () => {
  let component: CardWtihOwnerComponent
  let fixture: ComponentFixture<CardWtihOwnerComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardWtihOwnerComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWtihOwnerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('cauando se hace click en una card te redirije hacia los detalles de la misma', () => {})
})
