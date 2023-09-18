import { Component } from '@angular/core'

@Component({
  selector: 'app-username-editor',
  templateUrl: './username-editor.component.html',
  styleUrls: ['./username-editor.component.css']
})
export class UsernameEditorComponent {
  username: string = 'elMuñe'
  editedUsername: string = ''
  isEditing = false


  startEdit() {
    this.isEditing = true
    this.editedUsername = this.username
  }

  saveUsername() {
    this.username = this.editedUsername
    this.isEditing = false
  }

  cancelEdit() {
    this.isEditing = false
  }

}
