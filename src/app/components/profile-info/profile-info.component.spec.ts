/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'

import {ProfileInfoComponent} from './profile-info.component'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {profileInfoUserMock} from 'src/app/mocks/user.mock'
import {ToastMessageComponent} from '../toast-message/toastMessage/toastMessage.component'

describe('ProfileInfoComponent', () => {
  let component: ProfileInfoComponent
  let fixture: ComponentFixture<ProfileInfoComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileInfoComponent, ToastMessageComponent],
      imports: [FormsModule, HttpClientModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoComponent)
    component = fixture.componentInstance
    component.profileInfo = profileInfoUserMock      
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Al iniciar los inputs del formulario toman los valores correctamente', () => {
    expect(component.profileInfo.name).toBe('Facundo')
    expect(component.profileInfo.lastName).toBe('Jauretche')
    expect(component.profileInfo.birthdate).toBe('1990-12-22')
    expect(component.profileInfo.email).toBe('el_loquito@test.com')
    expect(component.profileInfo.exchangeProximity).toBe(3)
    expect(component.profileInfo.criteria).toBe('Nacionalista')
    expect(component.profileInfo.address.localidad).toBe('3 de Febrero')
    expect(component.profileInfo.address.ubiGeografica.x).toBe(34.12331231)
  })
})
