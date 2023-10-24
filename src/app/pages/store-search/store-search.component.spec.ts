import { ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing"
import { StoreSearchComponent } from "./store-search.component"
import { HttpClientModule } from "@angular/common/http"
import { RouterTestingModule } from "@angular/router/testing"
import { LogoComponent } from "src/app/components/logo/logo.component"
import { LoginComponent } from "../login/login.component"

describe('Login Component', () => {
  let store: StoreSearchComponent
  let fixture: ComponentFixture<StoreSearchComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [LoginComponent, LogoComponent]
    }).compileComponents()
  }))

  it('should create', () => {
    fixture = TestBed.createComponent(StoreSearchComponent)
    store = fixture.debugElement.componentInstance    
    expect(store).toBeTruthy()    
  })
})