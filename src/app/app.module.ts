import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { BaseFilterComponent } from './components/filter/baseFilter.component'
import { SortedByFilterComponent } from './components/filter/filterSortedBy/sortedByFilter.component'
import { VariantFilterComponent } from './components/filter/filterVariant/variantFilter.component'

@NgModule({
  declarations: [AppComponent, BaseFilterComponent, SortedByFilterComponent, VariantFilterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
