import {Component} from '@angular/core'
import {UserInfoDTO} from 'src/app/dtos/user.dto'
import {initialuserInfoMock} from 'src/app/mocks/user.mock'
import {UserService} from 'src/app/services/user-service/user.service'

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent {
  constructor(private userService: UserService) {}
  isEditing = false
  editedUsername: string = ''
  LIMIT: number = 20
  //TODO: Sacar el mock de inicio, para safar mientras de los tests
  userInfo: UserInfoDTO = initialuserInfoMock

  async ngOnInit() {
    this.userInfo = await this.userService.getUserInfo()
    this.userService.data$.subscribe(async (updatedInfo) => {
      this.userInfo.location = updatedInfo.location
      this.userInfo.age = this.getAge(updatedInfo.age)
    })
  }

  startEdit() {
    this.isEditing = true
    this.editedUsername = this.userInfo.username
    this.deleteUsername()
  }

  async saveUsername() {
    this.userInfo.username = this.editedUsername
    this.isEditing = false
    this.userInfo = await this.userService.editUsername(this.userInfo)
  }

  cancelEdit() {
    this.isEditing = false
  }

  deleteUsername() {
    this.editedUsername = ''
  }

  inputIsValid = (): boolean => !this.isEmpty() && this.isUnderTheTop()

  isUnderTheTop = (): boolean => this.editedUsername.length <= this.LIMIT

  isEmpty = (): boolean => !this.editedUsername.trim()

  getAge = (date: Date): number =>
    this.hadBirthday(date)
      ? new Date().getFullYear() - date.getFullYear()
      : new Date().getFullYear() - date.getFullYear() - 1

  hadBirthday = (date: Date): boolean =>
    new Date().getUTCDate() >= date.getUTCDate() &&
    new Date().getMonth() >= date.getMonth()

  //TODO: Esto luego cambia
  isOffLine = (): boolean => this.userInfo.username === 'Off Line'
}
