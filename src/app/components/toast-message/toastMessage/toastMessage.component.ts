import {Component, Input} from '@angular/core'

type notifyTypes = 'error' | 'success' | 'info' | 'alert'
@Component({
  selector: 'app-toastMessage',
  templateUrl: './toastMessage.component.html',
  styleUrls: ['./toastMessage.component.css']
})
export class ToastMessageComponent {
  @Input() titleType!: notifyTypes
  @Input() message!: string

  isError() {
    return this.titleType === 'error'
  }

  isSuccess() {
    return this.titleType === 'success'
  }

  isInfo() {
    return this.titleType === 'info'
  }

  isAlert() {
    return this.titleType === 'alert'
  }
}
