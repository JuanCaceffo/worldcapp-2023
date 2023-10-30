import {NgForm} from '@angular/forms'
import {criteria} from '../../helpers/getOptionsInfoProfile.helper'
import {Component} from '@angular/core'
import {UserProfileInfoDTO, UserUpdateInfoDTO} from 'src/app/dtos/user.dto'
import {UserService} from 'src/app/services/user-service/user.service'
import {ProvinceService} from 'src/app/services/province-service/province.service'
import {ProvinceDTO} from 'src/app/dtos/province.dto'
import {initialProfileInfoUserMock} from 'src/app/mocks/user.mock'
import {mostrarError} from 'src/app/helpers/errorHandler'

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
  constructor(
    private userService: UserService,
    private provinceService: ProvinceService
  ) {}
  //Ingresar un mock con valores por defecto
  profileInfo: UserProfileInfoDTO = initialProfileInfoUserMock
  resetProfileInfo!: UserProfileInfoDTO
  provinces: ProvinceDTO[] = []
  locations: string[] = []
  criteria: string[] = criteria
  errors: string[] = []
  async ngOnInit() {
    try {
      this.profileInfo = await this.userService.getProfileInfo()
      this.resetProfileInfo = structuredClone(this.profileInfo)
      this.provinces = await this.provinceService.getProvinces()
    } catch (e) {
      mostrarError(this, e)
    }
  }

  async onSubmit(form: NgForm) {
    //TODO: Manejar errores
    console.log(form.form.errors)
    try {
      this.profileInfo = await this.userService.editProfileInfo(
        this.profileInfo
      )
    } catch (e) {
      mostrarError(this, e)
    }
  }

  onReset() {
    console.log(this.profileInfo.address.provincia)
    this.profileInfo = structuredClone(this.resetProfileInfo)
    alert('Se reestableció el usuario exitosamente')
  }

  getProvinces = (): string[] => this.provinces.map((data) => data.province)

  selectedProvince = (province: string): boolean =>
    province === this.profileInfo.address.provincia

  selectedLocation = (location: string): boolean =>
    location === this.profileInfo.address.localidad

  getLocations = (): string[] =>
    this.provinces.find((data) => this.selectedProvince(data.province))
      ?.locations ?? []

  updateInfoUser(birthDate: Date) {
    const infoUser: UserUpdateInfoDTO = {
      location: this.profileInfo.address.localidad,
      age: birthDate
    }
    this.userService.updateInfoUser(infoUser)
  }

  get hasBackErrors() {
    return !!this.errors.length
  }
}
