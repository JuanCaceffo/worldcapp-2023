/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'

import {HeaderNavComponent} from './header-nav.component'
import {RouterTestingModule} from '@angular/router/testing'

describe('HeaderNavComponent', () => {
  let component: HeaderNavComponent
  let fixture: ComponentFixture<HeaderNavComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderNavComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
