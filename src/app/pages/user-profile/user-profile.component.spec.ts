import { FormsModule } from '@angular/forms'
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing'
import { UserProfileComponent } from './user-profile.component'
import { CardUserComponent } from 'src/app/components/cards/card-user/card-user.component'
import { HttpClientModule } from '@angular/common/http'
import { NavbarProfileComponent } from 'src/app/components/navbar-profile/navbar-profile.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('UserProfileComponent', () => {
  let component: UserProfileComponent
  let fixture: ComponentFixture<UserProfileComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule, HttpClientModule, RouterTestingModule],
      declarations: [UserProfileComponent, CardUserComponent, NavbarProfileComponent]
    })
    fixture = TestBed.createComponent(UserProfileComponent)
    component = fixture.componentInstance    
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
