import { Component, Input, OnInit } from '@angular/core'
import { FormProps } from 'src/app/interfaces/form'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // @Input() label = "Actualizar"
  @Input() childValue: string = ''
  @Input() formElements: FormProps[] = [
    {
      title: 'prueba',
      fieldType: 'input',
      fieldElement: [
        {
          label: 'Testing',
          name: '',
          value: '',
          class: '',
          placeholder: 'Escriba aquí',
          type: 'text',
          autofocus: 'false',
          tabindex: '-1',
          error: '',
          min: '',
          max: '',
          testid: ''
        }
      ]
    }
  ]

  doSomething(data: string) {
    console.log(data)
    this.childValue = data
  }

  ngOnInit() {}
}
