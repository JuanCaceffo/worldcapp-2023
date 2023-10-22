import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-fields-set-inputs',
  templateUrl: './fields-set-inputs.component.html',
  styleUrls: ['./fields-set-inputs.component.css']
})
export class FieldsSetInputsComponent implements OnInit {
  constructor() {}
  list = ['lala', 'lala']
  ngOnInit() {}
}
