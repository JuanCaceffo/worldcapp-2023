import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component'
import { LogoComponent } from './components/logo/logo.component'
import { HeaderComponent } from './components/header/header.component'
import { HeaderNavComponent } from './components/header/header-nav/header-nav.component'
import { FooterComponent } from './components/footer/footer.component'
import { BaseFilterComponent } from './components/filter/baseFilter.component'
import { SortedByFilterComponent } from './components/filter/sortedByFilter/sortedByFilter.component'
import { VariantFilterComponent } from './components/filter/variantFilter/variantFilter.component'
import { CardUserComponent } from './components/card-user/card-user.component'
import { CardDetailsComponent } from './pages/card-details/card-details.component'
import { UserProfileComponent } from './pages/user-profile/user-profile.component'
import { LoginComponent } from './pages/login/login.component'
import { CardSearchComponent } from './pages/card-search/card-search.component'
import { StoreSearchComponent } from './pages/store-search/store-search.component'
import { CardAddComponent } from './pages/card-add/card-add.component'
import { CardComponent } from './components/card/card.component'
import { InputFieldComponent } from './components/fields/input-field/input-field.component'
import { FieldLabelComponent } from './components/fields/field-label/field-label.component'
import { IconFieldComponent } from './components/fields/icon-field/icon-field.component'
import { SelectFieldComponent } from './components/fields/select-field/select-field.component'
import { DIRECTIVES } from './directives/directives'
@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    LogoComponent,
    HeaderComponent,
    HeaderNavComponent,
    FooterComponent,
    BaseFilterComponent,
    SortedByFilterComponent,
    VariantFilterComponent,
    HeaderComponent,
    LoginComponent,
    CardSearchComponent,
    CardDetailsComponent,
    StoreSearchComponent,
    UserProfileComponent,
    CardAddComponent,
    CardUserComponent,
    // FormsModule,
    // BrowserModule
    CardComponent,
    FieldLabelComponent,
    InputFieldComponent,
    IconFieldComponent,
    SelectFieldComponent,
    DIRECTIVES
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
