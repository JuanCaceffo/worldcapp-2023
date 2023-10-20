import {Router} from '@angular/router'
import {Component, OnInit} from '@angular/core'
import {userProfilePaths} from 'src/app/app-routing.module'

interface buttonNaviagateType {
  urlRightBtn?: string
  urlLeftBtn?: string
}
@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.css']
})
export class NavbarProfileComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  //TODO: buscar una forma mas cheta de laburarlo
  get buttonNavigate(): buttonNaviagateType {
    const actualLink = this.router.url.split('/')[2]
    if (actualLink == userProfilePaths.info)
      return {urlRightBtn: userProfilePaths.duplicateFigus}
    if (actualLink == userProfilePaths.missingFigus)
      return {urlLeftBtn: userProfilePaths.duplicateFigus}
    return {
      urlRightBtn: userProfilePaths.missingFigus,
      urlLeftBtn: userProfilePaths.info
    }
  }

  listProps = [
    {
      content: 'Información General',
      url: `/perfil/${userProfilePaths.info}`
    },
    {
      content: 'Figuritas Repetidas',
      url: `/perfil/${userProfilePaths.duplicateFigus}`
    },
    {
      content: 'Figuritas Faltantes',
      url: `/perfil/${userProfilePaths.missingFigus}`
    }
  ]
}
