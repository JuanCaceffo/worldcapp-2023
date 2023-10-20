import {CardDetailsComponent} from './pages/card-details/card-details.component'
import {UserProfileComponent} from './pages/user-profile/user-profile.component'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {CardAddComponent} from './pages/card-add/card-add.component'
import {LoginComponent} from './pages/login/login.component'
import {CardSearchComponent} from './pages/card-search/card-search.component'
import {StoreSearchComponent} from './pages/store-search/store-search.component'
import {ProfileMissingFigusComponent} from './components/profile-missing-figus/profile-missing-figus.component'
import {ProfileDuplicateFigusComponent} from './components/profile-duplicate-figus/profile-duplicate-figus.component'
import {ProfileInfoComponent} from './components/profile-info/profile-info.component'

export const userProfilePaths = {
  info: 'perfil-usuario',
  duplicateFigus: 'figuritas-repetidas',
  missingFigus: 'figuritas-faltantes'
}

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'figuritas', component: CardSearchComponent},
  {path: 'detalle-figurita/:id', component: CardDetailsComponent},
  {path: 'sobres', component: StoreSearchComponent},
  {
    path: 'perfil',
    component: UserProfileComponent,
    children: [
      {path: userProfilePaths.info, component: ProfileInfoComponent},
      {
        path: userProfilePaths.duplicateFigus,
        component: ProfileDuplicateFigusComponent
      },
      {
        path: userProfilePaths.missingFigus,
        component: ProfileMissingFigusComponent
      }
    ]
  },
  {path: 'agregar-figuritas', component: CardAddComponent},
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
  ProfileDuplicateFigusComponent,
  ProfileMissingFigusComponent,
  CardAddComponent
]
