import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing"
import { FormsModule } from "@angular/forms"
import { ButtonAddCardComponent } from "./button-add-card.component"
import { RouterTestingModule } from "@angular/router/testing"

describe('ButtonAddCardComponent', () => {
  let button: ButtonAddCardComponent
  let fixture: ComponentFixture<ButtonAddCardComponent>
  
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [ButtonAddCardComponent]
    }).compileComponents()    
    //Arrage
    fixture = TestBed.createComponent(ButtonAddCardComponent)
    button = fixture.componentInstance
  }))

  it('should create', () => {
    expect(button).toBeTruthy()
  })
})
