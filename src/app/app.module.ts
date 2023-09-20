import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { FilterComponent } from './components/filter/filter.component'
import { CardUserComponent } from './components/card-user/card-user.component'

@NgModule({
  declarations: [AppComponent, FilterComponent,CardUserComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
