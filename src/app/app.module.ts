// Angular Components
import {AppRoutingModule, routingComponents} from './app-routing.module'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'

// Main Component
import {AppComponent} from './app.component'

// Application Components
// Base page components
import {FooterComponent} from './components/footer/footer.component'
import {HeaderComponent} from './components/header/header.component'
import {HeaderNavComponent} from './components/header/header-nav/header-nav.component'
import {LogoComponent} from './components/logo/logo.component'
import {ToastMessageComponent} from './components/toast-message/toastMessage/toastMessage.component'

// Filter components
import {SortedByFilterComponent} from './components/filter/sorted-by-filter/sorted-by-filter.component'
import {VariantFilterComponent} from './components/filter/variant-filter/variant-filter.component'

// Card Components
import {CardComponent} from './components/cards/card/card.component'
import {CardUserComponent} from './components/cards/card-user/card-user.component'
import {CardWithOwnerComponent} from './components/cards/card-with-owner/card-with-owner.component'
import {CardMarketComponent} from './components/card-market/card-market.component'

// Pages
import {CardAddComponent} from './pages/card-add/card-add.component'
import {CardDetailsComponent} from './pages/card-details/card-details.component'
import {CardSearchComponent} from './pages/card-search/card-search.component'
import {LoginComponent} from './pages/login/login.component'
import {StoreSearchComponent} from './pages/store-search/store-search.component'

// Form components
import {FormComponent} from './components/form/form.component'

// Pipes
import {ConcatenatePipe} from './pipes/concatenate-pipe.pipe'
import {FullAddressPipe} from './pipes/full-address.pipe'
import {HttpClientModule} from '@angular/common/http'
import {FieldsSetInputsComponent} from './components/fields-set-inputs/fields-set-inputs.component'

//profile components
import {NavbarProfileComponent} from './components/navbar-profile/navbar-profile.component'
import {ButtonAddCardComponent} from './components/button-add-card/button-add-card.component'

//Search
import {SearchbarComponent} from './components/searchbar/searchbar.component'

@NgModule({
  declarations: [
    // Angular
    routingComponents,
    AppComponent,
    // Base Page Components
    FooterComponent,
    HeaderComponent,
    HeaderNavComponent,
    LogoComponent,
    // Filter Components
    SortedByFilterComponent,
    VariantFilterComponent,
    // Card Components
    CardComponent,
    CardUserComponent,
    CardWithOwnerComponent,
    CardMarketComponent,
    // Pages
    CardAddComponent,
    CardDetailsComponent,
    CardSearchComponent,
    LoginComponent,
    StoreSearchComponent,
    // Profile Page Component
    ButtonAddCardComponent,
    NavbarProfileComponent,
    // Form
    FormComponent,
    FieldsSetInputsComponent,
    // Pipe
    ConcatenatePipe,
    FullAddressPipe,
    // Search
    SearchbarComponent,
    ToastMessageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
