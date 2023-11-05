import {Router} from '@angular/router'
import {Component, OnInit} from '@angular/core'

const userProfilePaths = {
  info: 'perfil-usuario',
  duplicateFigus: 'figuritas-repetidas',
  missingFigus: 'figuritas-faltantes'
}

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
    //Obtengo el ultimo valor despues de una / del url que me indica la pagina en la que estoy parado
    const currentLink = this.router.url.toString().split('/').pop() ?? ''

    //objeto que devuelve path a donde debe navegar cada flecha dependiendo de la pagina donde esta parado
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
