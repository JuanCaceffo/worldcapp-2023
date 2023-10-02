import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component'
import { LogoComponent } from './components/logo/logo.component'
import { HeaderComponent } from './components/header/header.component'
import { HeaderNavComponent } from './components/header/header-nav/header-nav.component'
import { FooterComponent } from './components/footer/footer.component'
import { BaseFilterComponent } from './components/filter/baseFilter.component'
import { SortedByFilterComponent } from './components/filter/sortedByFilter/sortedByFilter.component'
import { VariantFilterComponent } from './components/filter/variantFilter/variantFilter.component'
import { InputFieldComponent } from './components/fields/input-field/input-field.component'
import { FieldLabelComponent } from './components/fields/field-label/field-label.component'
import { IconFieldComponent } from './components/fields/icon-field/icon-field.component'
import { SelectFieldComponent } from './components/fields/select-field/select-field.component'
import { FormComponent } from './components/form/form.component'
import { DIRECTIVES } from './directives/directives'
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
    FieldLabelComponent,
    InputFieldComponent,
    IconFieldComponent,
    SelectFieldComponent,
    FormComponent,
    DIRECTIVES
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
