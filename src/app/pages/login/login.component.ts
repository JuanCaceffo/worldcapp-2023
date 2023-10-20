import {UserLoginDTO} from 'src/app/dtos/user.dto'
import {UserService} from 'src/app/services/user-service/user.service'
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
  constructor(
    private titleService: Title,
    private router: Router,
    private userService: UserService
  ) {}
  inputData!: string[]
  validLogin = false
  data: UserLoginDTO = {userName: '', password: ''}

  ngOnInit() {
    this.titleService.setTitle('Inicio de Sesión')
    sessionStorage.clear()
  }

  onInputData(datos: string[]) {
    if (datos[1] == 'user') {
      this.data.userName = datos[0]
    }
    if (datos[1] == 'password') {
      this.data.password = datos[0]
    }
  }

  async submit() {
    try {
      await this.userService.login(this.data)
      this.router.navigate(['/figuritas'])
    } catch (error) {
      //TODO: manejar el tipo de error que llega del back
      this.errorMsg =
        'Usuario o contraseña ingresados son invalidos! Vuelva a intentar'
    }
  }
}
