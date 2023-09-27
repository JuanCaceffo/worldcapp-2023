import { Component } from '@angular/core'

export interface FieldProps {
  class: string
  label: string  
  value: string
  default?: string
  placeholder?: string
  options?: string[]
}

@Component({
  templateUrl: '/c-input/c-input.html',
  styleUrls: ['./c-input/c-input.css']
})
class CustomInput{

}

@Component({
  templateUrl: './c-select/c-select.html',
  styleUrls: ['./c-select/c-select.css']
})
class CustomSelect {
  
}

@Component({
  selector: 'app-field',
  templateUrl: './c-field.component.html',
  styleUrls: ['./c-field.component.css']
})
export class CustomField implements FieldProps {
  class = ''
  label = ''
  value!: string
  default = ''
  placeholder = ''
  options = []

  behavior: CustomInput | CustomSelect
  
  constructor() {
    // Initialize behavior based on the presence of options
    this.behavior = this.options && this.options.length > 0 ? new CustomSelect() : new CustomInput()
  }

  ngOnInit(){
    
  }


}



