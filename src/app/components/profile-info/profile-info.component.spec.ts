/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'

import {ProfileInfoComponent} from './profile-info.component'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

describe('ProfileInfoComponent', () => {
  let component: ProfileInfoComponent
  let fixture: ComponentFixture<ProfileInfoComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileInfoComponent],
      imports: [FormsModule, HttpClientModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
