import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ButtonComponent } from './button/button.component'
import { InputComponent } from './input/input.component'
import { UsernameEditorComponent } from './username-editor/username-editor.component'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    UsernameEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
