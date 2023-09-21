import { Component } from '@angular/core'

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})

export class CardUserComponent {
  isEditing = false
  editedUsername: string = ''
  user = new User()
  LIMIT: number = 20
 
  startEdit() {
    this.isEditing = true
    this.editedUsername = this.user.username
    this.deleteUsername()
  }
  
  saveUsername() {
    this.user.username = this.editedUsername
    this.isEditing = false
  }
  
  cancelEdit() {
    this.isEditing = false
  }

  deleteUsername() {
    this.editedUsername = ''
  }

  inputIsValid():boolean{
    return !this.isEmpty() && this.isUnderTheTop()
  }

  isUnderTheTop():boolean {
    return this.editedUsername.length <= this.LIMIT 
  }

  isEmpty():boolean {
    return !this.editedUsername.trim()
  }

}

export class User {
  username: string = 'elMuñe'
  edad = 30
  ubicacion = 'Parque Chas'

}
