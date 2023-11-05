import {CardDetailsComponent} from './pages/card-details/card-details.component'
import {UserProfileComponent} from './pages/user-profile/user-profile.component'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {CardAddComponent} from './pages/card-add/card-add.component'
import {LoginComponent} from './pages/login/login.component'
import {CardSearchComponent} from './pages/card-search/card-search.component'
import {StoreSearchComponent} from './pages/store-search/store-search.component'
import {ProfileInfoComponent} from './components/profile-info/profile-info.component'
import {ProfileFigusComponent} from './components/profile-figus/profile-figus.component'
import {UserService} from './services/user-service/user.service'
import {Figurita} from './models/cards/figurita.model'

export type DataProfileFigus = {
  getFigus: (userService: UserService) => Promise<Figurita[]>
  deleteFigu: (userService: UserService, cardID: number) => void
}
const dataProfileDuplicateFigus: DataProfileFigus = {
  getFigus: async (userService: UserService) => {
    return userService.getDuplicateFiguritas()
  },
  deleteFigu: (userService: UserService, cardID: number) => {
    userService.deleteFiguRepe(cardID)
  }
}

const dataProfileMissingFigus: DataProfileFigus = {
  getFigus: async (userService: UserService) => {
    return userService.getMissingFigus()
  },
  deleteFigu: (userService: UserService, cardID: number) => {
    userService.deleteFiguFaltante(cardID)
  }
}

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'figuritas', component: CardSearchComponent},
  {path: 'detalle-figurita/:user-id/:card-id', component: CardDetailsComponent},
  {path: 'sobres', component: StoreSearchComponent},
  {
    path: 'perfil',
    component: UserProfileComponent,
    children: [
      {path: 'perfil-usuario', component: ProfileInfoComponent},
      {
        path: 'figuritas-repetidas',
        component: ProfileFigusComponent,
        data: dataProfileDuplicateFigus
      },
      {
        path: 'figuritas-faltantes',
        component: ProfileFigusComponent,
        data: dataProfileMissingFigus
      }
    ]
  },
  {path: 'agregar-figuritas/:figus-list-type', component: CardAddComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  LoginComponent,
  CardSearchComponent,
  CardDetailsComponent,
  StoreSearchComponent,
  UserProfileComponent,
  ProfileInfoComponent,
  ProfileFigusComponent,
  CardAddComponent
]
