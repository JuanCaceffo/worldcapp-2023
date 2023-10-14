// Angular Components
import {AppRoutingModule, routingComponents} from './app-routing.module'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {NgModule} from '@angular/core'

// Main Component
import {AppComponent} from './app.component'

// Application Components
// Base page components
import {FooterComponent} from './components/footer/footer.component'
import {HeaderComponent} from './components/header/header.component'
import {HeaderNavComponent} from './components/header/header-nav/header-nav.component'
import {LogoComponent} from './components/logo/logo.component'

// Filter components
import {BaseFilterComponent} from './components/filter/base-filter.component'
import {SortedByFilterComponent} from './components/filter/sorted-by-filter/sorted-by-filter.component'
import {VariantFilterComponent} from './components/filter/variant-filter/variant-filter.component'

// Card Components
import {CardComponent} from './components/cards/card/card.component'
import {CardUserComponent} from './components/cards/card-user/card-user.component'
import {CardWithOwnerComponent} from './components/cards/card-with-owner/card-with-owner.component'

// Pages
import {CardAddComponent} from './pages/card-add/card-add.component'
import {CardDetailsComponent} from './pages/card-details/card-details.component'
import {CardSearchComponent} from './pages/card-search/card-search.component'
import {LoginComponent} from './pages/login/login.component'
import {StoreSearchComponent} from './pages/store-search/store-search.component'
import {UserProfileComponent} from './pages/user-profile/user-profile.component'

// Field inputs components
import {ControlFieldComponent} from './components/fields/control-field/control-field.component'
import {FieldLabelComponent} from './components/fields/field-label/field-label.component'
import {IconFieldComponent} from './components/fields/icon-field/icon-field.component'
import {InputFieldComponent} from './components/fields/input-field/input-field.component'
import {SelectFieldComponent} from './components/fields/select-field/select-field.component'
import {CardMarketComponent} from './components/card-market/card-market.component'

// Form components
import {FormComponent} from './components/form/form.component'

// Directives
import {DIRECTIVES} from './directives/directives'

// Pipes
import {ConcatenatePipe} from './pipes/concatenate-pipe.pipe'

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
    BaseFilterComponent,
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
    UserProfileComponent,
    // Fields
    ControlFieldComponent,
    FieldLabelComponent,
    IconFieldComponent,
    InputFieldComponent,
    SelectFieldComponent,
    // Form
    FormComponent,
    // Directives
    DIRECTIVES,
    // Pipe
    ConcatenatePipe
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
