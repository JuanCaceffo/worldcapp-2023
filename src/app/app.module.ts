import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { FilterComponent } from './components/filter/filter.component'
import { FooterComponent } from './components/footer/footer.component'
import { CardUserComponent } from './components/card-user/card-user.component'
import { LogoComponent } from './components/logo/logo.component'

@NgModule({
  declarations: [AppComponent, FilterComponent, FooterComponent, LogoComponent,CardUserComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
