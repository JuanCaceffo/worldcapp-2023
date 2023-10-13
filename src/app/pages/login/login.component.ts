import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public errorMsg: string | null = null
  loginData = new LoginData()
  constructor(private titleService: Title, private router: Router) {}

  ngOnInit() {
    this.titleService.setTitle('Inicio de Sesión')
  }

  loginDatos(datos: string[]) {
    this.loginData.onInputData(datos)
    console.log('estos datos locos:', datos[0])
  }

  login() {
    this.loginData.submit()
    if (this.loginData.validLogin == true) {
      this.router.navigate(['/figuritas'])
    } else {
      this.errorMsg =
        'Usuario o contraseña ingresados son invalidos! Vuelva a intentar'
    }
    this.titleService.setTitle('Página principal - Usuario logueado')
  }
}
export class LoginData {
  inputData!: string[]
  validLogin = false
  users = [
    {user: 'sol', password: '1234'},
    {user: 'pablo', password: '5678'},
    {user: 'juanchi', password: 'cacho'}
  ]
  user = ''
  password = ''

  onInputData(datos: string[]) {
    if (datos[1] == 'user') {
      this.user = datos[0]
    }
    if (datos[1] == 'password') {
      this.password = datos[0]
    }
  }

  submit() {
    this.validLogin = false
    for (const usuario of this.users) {
      if (usuario.user == this.user) {
        if (usuario.password == this.password) {
          this.validLogin = true
        }
      }
    }
  }
}
