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
  data: UserLoginDTO = {userName: '', password: ''}  
  
  ngOnInit() {
    this.titleService.setTitle('Inicio de Sesión')
    sessionStorage.clear()    
  } 

  async submit() {
    try {
      console.log(this.data)
      await this.userService.login(this.data)
      this.router.navigate(['/figuritas'])
    } catch (error) {
      //TODO: manejar el tipo de error que llega del back
      this.errorMsg =
        'Usuario o contraseña ingresados son inválidos! Vuelva a intentarlo'
    }
  }  
}
