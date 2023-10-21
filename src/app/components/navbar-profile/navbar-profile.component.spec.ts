/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'

import {NavbarProfileComponent} from './navbar-profile.component'
import {RouterTestingModule} from '@angular/router/testing'

describe('NavbarProfileComponent', () => {
  let component: NavbarProfileComponent
  let fixture: ComponentFixture<NavbarProfileComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavbarProfileComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
