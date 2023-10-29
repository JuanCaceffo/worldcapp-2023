/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'

import {ProfileDuplicateFigusComponent} from './profile-duplicate-figus.component'
import {HttpClientModule} from '@angular/common/http'
import { ButtonAddCardComponent } from '../button-add-card/button-add-card.component'
import { FormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

describe('ProfileDuplicateFigusComponent', () => {
  let component: ProfileDuplicateFigusComponent
  let fixture: ComponentFixture<ProfileDuplicateFigusComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDuplicateFigusComponent,ButtonAddCardComponent],
      imports: [HttpClientModule, FormsModule, RouterTestingModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDuplicateFigusComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
