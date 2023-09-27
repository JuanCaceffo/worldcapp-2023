import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component'
import { LogoComponent } from './components/logo/logo.component'
import { HeaderComponent } from './components/header/header.component'
import { HeaderNavComponent } from './components/header/header-nav/header-nav.component'
import { FormsModule } from '@angular/forms'
import { FooterComponent } from './components/footer/footer.component'
import { BaseFilterComponent } from './components/filter/baseFilter.component'
import { SortedByFilterComponent } from './components/filter/sortedByFilter/sortedByFilter.component'
import { VariantFilterComponent } from './components/filter/variantFilter/variantFilter.component'
import { CustomField } from './components/c-field/c-field.component'
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
    CustomField
    // FormsModule,
    // BrowserModule
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
