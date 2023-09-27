import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { FooterComponent } from './components/footer/footer.component'
import { LogoComponent } from './components/logo/logo.component'
import { CFieldComponent } from './components/c-field/c-field.component'
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LogoComponent,
    routingComponents,
    CFieldComponent,
    HeaderComponent
    // FormsModule,
    // BrowserModule
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
