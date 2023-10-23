import {UserLoginDTO} from 'src/app/dtos/user.dto'
import {UserService} from 'src/app/services/user-service/user.service'
import {Component, Input, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Router} from '@angular/router'
import {FormControl, FormGroup, Validators} from '@angular/forms'

interface ErrorType {
  required: string
  minlength: string
}

interface DefaultErrors {
  name: ErrorType
  password: ErrorType
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private titleService: Title,
    private router: Router,
    private userService: UserService
  ) {}

  errorMsg: string | null = null
  errors: {[key: string]: string} = {}  
  loginForm!: FormGroup

  @Input() defaultErrors: DefaultErrors = {
    name: {
      required: 'Ingrese un nombre de usuario',
      minlength: 'Intente con un nombre superior a 3 letras'
    },
    password: {
      required: 'Ingrese un password',
      minlength: 'La contraseña debe tener al menos 4 letras'
    }
  }

  ngOnInit() {
    this.titleService.setTitle('Inicio de Sesión')

    sessionStorage.clear()

    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }

  get name() {
    return this.loginForm.get('name')
  }

  get password() {
    return this.loginForm.get('password')
  }

  getMyError(inputType: string, errorMsg: string) {
    return this.defaultErrors[inputType as keyof DefaultErrors][errorMsg as keyof ErrorType]
  }

  formHasErrors() {
    this.errors = {}
    Object.keys(this.loginForm.controls).forEach((name) => {
      const controlErrors = this.loginForm.controls[name].errors

      if (controlErrors) {
        Object.keys(controlErrors).forEach((key) => {
          this.errors[name] = key
        })
      }
    })
  }

  async submitLogin() {
    if (Object.keys(this.errors).length === 0) {      
      const data: UserLoginDTO = {userName: this.name?.value, password: this.password?.value}
      
      try {
        await this.userService.login(data)
        this.router.navigate(['/figuritas'])
      } catch (error) {
        //TODO: manejar el tipo de error que llega del back
        this.errorMsg = 'Usuario o contraseña ingresados son inválidos! Vuelva a intentarlo'
      }
    }
  }
}
