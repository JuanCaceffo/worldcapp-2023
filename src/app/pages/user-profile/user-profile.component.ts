import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Router} from '@angular/router'
import {getPathLastProfileNavigate} from 'src/app/helpers/userSessionStorage.helper'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private titleService: Title, private router: Router) {}

  ngOnInit() {
    this.titleService.setTitle('Perfil de Usuario')
    this.router.navigate([`/perfil/${getPathLastProfileNavigate()}`])
  }
}
