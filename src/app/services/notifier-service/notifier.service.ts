import {Injectable} from '@angular/core'
import {Subject} from 'rxjs'
import {notifyTypes} from 'src/app/components/toast-message/toastMessage/toastMessage.component'

interface INotifier {
  message: string
  type: notifyTypes
}

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  private notifySubject = new Subject<INotifier>()

  notify(message: string, type: notifyTypes) {
    this.notifySubject.next({message, type})
  }

  getNotifyObservable() {
    return this.notifySubject.asObservable()
  }
}
