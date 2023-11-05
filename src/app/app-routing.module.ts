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
import {CardSearch} from './models/searchbar/searchbar'
import {CardService} from './services/card-service/card.service'

export type DataProfileFigus = {
  getFigus: (userService: UserService) => Promise<Figurita[]>
  deleteFigu: (userService: UserService, cardID: number) => void
  pathAddCollectibleFigus: string
}
const dataProfileDuplicateFigus: DataProfileFigus = {
  getFigus: async (userService: UserService) => {
    return userService.getDuplicateFiguritas()
  },
  deleteFigu: (userService: UserService, cardID: number) => {
    userService.deleteFiguRepe(cardID)
  },
  pathAddCollectibleFigus: 'agregar-figuritas-repetidas'
}
const dataProfileMissingFigus: DataProfileFigus = {
  getFigus: (userService: UserService) => {
    return userService.getMissingFigus()
  },
  deleteFigu: (userService: UserService, cardID: number) => {
    userService.deleteFiguFaltante(cardID)
  },
  pathAddCollectibleFigus: 'agregar-figuritas-faltantes'
}

export type DataCardAddProfile = {
  getFigus: (
    cardService: CardService,
    filter: CardSearch
  ) => Promise<Figurita[]>
  onClickCard: (card: Figurita, userService: UserService) => Promise<void>
}
const dataAddDuplicateCards: DataCardAddProfile = {
  getFigus: (cardService: CardService, filter: CardSearch) => {
    return cardService.getCollectibleDuplicateFigus(filter)
  },
  onClickCard: (card: Figurita, userService: UserService) => {
    return userService.addFiguritaRepetida(card.props.id)
  }
}
const dataAddMissingCards: DataCardAddProfile = {
  getFigus: (cardService: CardService, filter: CardSearch) => {
    return cardService.getCollectibleMissingFigus(filter)
  },
  onClickCard: (card: Figurita, userService: UserService) => {
    return userService.addFiguritaFaltante(card.props.id)
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
  {
    path: 'agregar-figuritas-faltantes',
    component: CardAddComponent,
    data: dataAddMissingCards
  },
  {
    path: 'agregar-figuritas-repetidas',
    component: CardAddComponent,
    data: dataAddDuplicateCards
  },
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
