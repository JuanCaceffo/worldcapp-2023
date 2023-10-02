import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent {
  loginData = new LoginData()
  constructor(private titleService: Title) {
    this.titleService.setTitle('Figuritas')
  }
}

export class LoginData {
  users = {"sol": "1234","pablo": "5678"}
  user = ""
  password = ""

  submit(){
    if (this.user in this.users) {
      console.log("SI SOY")
    } else {
      console.log("NO SOY")
      console.log(this.user)
      console.log(this.password)
      console.log(this.user in this.users)
    }
  }
}

