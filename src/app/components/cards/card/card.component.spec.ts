import { fakeAsync, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { CardComponent } from "./card.component"
import { ConcatenatePipe } from "src/app/pipes/concatenate-pipe.pipe"

describe('Card Component', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CardComponent, ConcatenatePipe]
    }).compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(CardComponent)
    const card = fixture.debugElement.componentInstance
    expect(card).toBeTruthy()
  })
})