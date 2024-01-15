import {UserLoginDTO} from 'src/app/dtos/user.dto'
import {UserService} from 'src/app/services/user-service/user.service'
import {Component, Input, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Router} from '@angular/router'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {NotifierService} from 'src/app/services/notifier-service/notifier.service'

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
    private userService: UserService,
    private notifierService: NotifierService
  ) {}

  errors: string[] = []
  inputErrors: {[key: string]: string} = {}
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
      name: new FormControl('juanceto01', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('12345', [
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
    return this.defaultErrors[inputType as keyof DefaultErrors][
      errorMsg as keyof ErrorType
    ]
  }

  formHasErrors() {
    this.inputErrors = {}
    Object.keys(this.loginForm.controls).forEach((name) => {
      const controlErrors = this.loginForm.controls[name].errors

      if (controlErrors) {
        Object.keys(controlErrors).forEach((key) => {
          this.inputErrors[name] = key
        })
      }
    })
  }

  async submitLogin() {
    if (Object.keys(this.errors).length === 0) {
      const data: UserLoginDTO = {
        userName: this.name?.value,
        password: this.password?.value
      }

      try {
        await this.userService.login(data)
        this.router.navigate(['/figuritas'])
      } catch (e) {
        this.notifierService.notify(e, 'error')
      }
    }
  }
}
