/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'

import {ProfileDuplicateFigusComponent} from './profile-duplicate-figus.component'

describe('ProfileDuplicateFigusComponent', () => {
  let component: ProfileDuplicateFigusComponent
  let fixture: ComponentFixture<ProfileDuplicateFigusComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDuplicateFigusComponent]
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
