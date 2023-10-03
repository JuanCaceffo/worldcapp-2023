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
    this.titleService.setTitle('Página principal - Usuario logueado')
  }
}
export class LoginData {
  inputData!: string[]
  users = [
    {user: "sol", password: "1234"},
    {user: "pablo", password: "5678"}
  ]
  user = ""
  password = ""

  onInputData(datos: string[]){
    this.inputData = datos
  }

  submit(){
    // if (this.user in ) {
    //   console.log("SI SOY")
    // } else {
    //   console.log("NO SOY")
    // }

    Object.keys(this.users).forEach((index,element) => {
      console.log(index,element)
    } )
    
  }
}
