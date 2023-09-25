import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FormsModule } from '@angular/forms'

import { BaseFilterComponent } from './components/filter/baseFilter.component'
import { SortedByFilterComponent } from './components/filter/sortedByFilter/sortedByFilter.component'
import { VariantFilterComponent } from './components/filter/variantFilter/variantFilter.component'
import { FooterComponent } from './components/footer/footer.component'
import { LogoComponent } from './components/logo/logo.component'

@NgModule({
  declarations: [
    AppComponent,
    BaseFilterComponent,
    SortedByFilterComponent,
    VariantFilterComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
