import { Component, HostBinding, Input } from '@angular/core'
import { CustomFieldProps } from 'src/app/models/c-field/c-field.model';

@Component({
  selector: 'app-c-field',
  templateUrl: './c-field.component.html',
  styleUrls: ['./c-field.component.css']
})
export class CFieldComponent {
  @HostBinding('class') className = 'app-input'
  @Input() fieldProperties: CustomFieldProps;

  // Determinar inputType automáticamente
  ngOnInit() {
    @Input() inputType = this.fieldProperties.selectOptions ? 'select' : 'text';
  }
}
