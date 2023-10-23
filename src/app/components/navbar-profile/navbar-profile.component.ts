import {Router} from '@angular/router'
import {Component, OnInit} from '@angular/core'
import {userProfilePaths} from 'src/app/app-routing.module'

interface buttonNavigateType {
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

  get buttonNavigateUrl(): buttonNavigateType {
    const currentLink = this.router.url.split('/')[2]

    const buttonNavigateUrls: {[key: string]: buttonNavigateType} = {
      'perfil-usuario': {urlRightBtn: userProfilePaths.duplicateFigus},
      'figuritas-repetidas': {
        urlLeftBtn: userProfilePaths.info,
        urlRightBtn: userProfilePaths.missingFigus
      },
      'figuritas-faltantes': {urlLeftBtn: userProfilePaths.duplicateFigus}
    }

    return buttonNavigateUrls[currentLink] || {}
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
