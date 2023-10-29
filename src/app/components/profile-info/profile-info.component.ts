import {NgForm} from '@angular/forms'
import {criteria} from '../../helpers/getOptionsInfoProfile.helper'
import {Component} from '@angular/core'
import {UserProfileInfoDTO} from 'src/app/dtos/user.dto'
import {UserService} from 'src/app/services/user-service/user.service'
import {ProvinceService} from 'src/app/services/province-service/province.service'
import {ProvinceDTO} from 'src/app/dtos/province.dto'
import {initialProfileInfoUserMock} from 'src/app/mocks/user.mock'

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

  async ngOnInit() {
    this.profileInfo = await this.userService.getProfileInfo()
    this.resetProfileInfo = structuredClone(this.profileInfo)
    this.provinces = await this.provinceService.getProvinces()
  }

  async onSubmit(form: NgForm) {
    //TODO: Manejar errores
    console.log(form.form.errors)
    this.profileInfo = await this.userService.editProfileInfo(this.profileInfo)
    alert('Se modificó el usuario exitosamente')
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
    this.userService.updateInfoUser(
      this.profileInfo.address.localidad,
      birthDate
    )
  }
}
