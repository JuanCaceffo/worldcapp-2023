import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-field-label',
  templateUrl: './field-label.component.html',
  styleUrls: ['./field-label.component.css', '../field.compnent.css']
})
export class FieldLabelComponent implements OnInit {
  @Input() label = ''

  ngOnInit(): void {
    // console.log(this.label)
  }

  isNotEmpty(): boolean {
    return this.label !== ''
  }
}
