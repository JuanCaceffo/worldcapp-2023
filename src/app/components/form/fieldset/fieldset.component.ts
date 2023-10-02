import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.css']
})
export class FieldsetComponent implements OnInit {
  @Input() legend = 'Some text here'
  
  constructor() {}

  ngOnInit() {}
}
