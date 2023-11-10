import {Component, Input} from '@angular/core'

export type notifyTypes = 'error' | 'success' | 'info' | 'alert'
@Component({
  selector: 'app-toastMessage',
  templateUrl: './toastMessage.component.html',
  styleUrls: ['./toastMessage.component.css']
})
export class ToastMessageComponent {
  @Input() titleType!: notifyTypes
  @Input() message!: string

  isError = () => this.titleType === 'error'

  isSuccess = () => this.titleType === 'success'

  isInfo = () => this.titleType === 'info'

  isAlert = () => this.titleType === 'alert'
}
