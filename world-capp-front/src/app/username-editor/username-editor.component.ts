import { Component } from '@angular/core'

@Component({
  selector: 'app-username-editor',
  templateUrl: './username-editor.component.html',
  styleUrls: ['./username-editor.component.css']
})

export class UsernameEditorComponent {
  isEditing = false
  editedUsername: string = ''
  user = new User()
 
  startEdit() {
    this.isEditing = true
    this.editedUsername = this.user.username
  }
  
  saveUsername() {
    this.user.username = this.editedUsername
    this.isEditing = false
  }
  
  cancelEdit() {
    this.isEditing = false
  }
}

export class User {
  username: string = 'elMuñe'
  edad = 30
  ubicacion = 'Parque Chas'

}
