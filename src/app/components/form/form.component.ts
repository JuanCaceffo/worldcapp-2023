import { Component, Input, OnInit } from '@angular/core'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // @Input() label = "Actualizar"
  @Input() formElements = [{}]
  @Input() childValue: string = ""
  
  doSomething(data: string) {
    console.log(data)
    this.childValue = data
  }
  
  ngOnInit() {
    
  }
}