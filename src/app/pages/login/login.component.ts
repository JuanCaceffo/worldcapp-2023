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

  loginDatos(datos: string[]){
    this.loginData.onInputData(datos)
  }
  
  login() {
    this.loginData.submit()
    if (this.loginData.validLogin == true){
      //rutear?
    }
    this.titleService.setTitle('Página principal - Usuario logueado')
  }
}
export class LoginData {
  inputData!: string[]
  validLogin = false
  users = [
    {user: "sol", password: "1234"},
    {user: "pablo", password: "5678"},
    {user: "juanchi", password: "cacho"}
  ]
  user = ""
  password = ""

  onInputData(datos: string[]){
    if (datos[1] == "user"){
      this.user = datos[0]
    }
    if (datos[1] == "password"){
      this.password = datos[0]
    }
  }

  submit(){
    for (const usuario of this.users){
      if (usuario.user == this.user){
        if (usuario.password == this.password){
          this.validLogin = true
          //Rutear?
        }
      }
    }
    console.log(this.validLogin)
    this.validLogin = false
  }
}