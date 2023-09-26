import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Página de Inicio de Sesión')
  }
  
  login() {
    this.titleService.setTitle('Página principal - Usuario logueado')
  }
}
