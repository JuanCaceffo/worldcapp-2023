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
  }

export class User {
  username: string = 'elMuñe'
  edad = 30
  ubicacion = 'Parque Chas'

}
