import {Component} from '@angular/core'
import {UserInfoDTO} from 'src/app/dtos/user.dto'
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
  userInfo!: UserInfoDTO

  async ngOnInit() {
    this.userInfo = await this.userService.getUserInfo()
    console.log(this.userInfo.picturePath)
  }

  startEdit() {
    this.isEditing = true
    this.editedUsername = this.userInfo.username
    this.deleteUsername()
  }

  saveUsername() {
    this.userInfo.username = this.editedUsername
    this.isEditing = false
  }

  cancelEdit() {
    this.isEditing = false
  }

  deleteUsername() {
    this.editedUsername = ''
  }

  inputIsValid(): boolean {
    return !this.isEmpty() && this.isUnderTheTop()
  }

  isUnderTheTop(): boolean {
    return this.editedUsername.length <= this.LIMIT
  }

  isEmpty(): boolean {
    return !this.editedUsername.trim()
  }
}
