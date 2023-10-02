import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // @Input() label = "Actualizar"
  @Input() formElements = [{}]
  childValue: string = ""
  
  doSomething(data: string): void {
    console.log(data)
    this.childValue = data
  }
  
  ngOnInit() {
    
  }
}