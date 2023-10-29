import {Component} from '@angular/core'

@Component({
  selector: 'app-toastMessage',
  templateUrl: './toastMessage.component.html',
  styleUrls: ['./toastMessage.component.css']
})
export class ToastMessageComponent {
  titleType: string = ''
  messageType: string = ''

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
