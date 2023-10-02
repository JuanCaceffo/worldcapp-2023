import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = new LoginData()
  constructor(private titleService: Title) {
    this.titleService.setTitle('Página de Inicio de Sesión')
  }
  
  login() {
    this.titleService.setTitle('Página principal - Usuario logueado')
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
