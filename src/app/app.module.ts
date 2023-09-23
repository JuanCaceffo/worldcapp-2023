import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FormsModule } from '@angular/forms'
import { FilterComponent } from './components/filter/filter.component'
import { FooterComponent } from './components/footer/footer.component'
import { LogoComponent } from './components/logo/logo.component'

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
