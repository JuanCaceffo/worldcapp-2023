import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ButtonComponent } from './button/button.component'
import { InputComponent } from './input/input.component'
import { HeaderComponent } from './header/header.component'
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
