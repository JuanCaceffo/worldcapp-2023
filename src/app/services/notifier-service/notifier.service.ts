/* eslint-disable @typescript-eslint/no-explicit-any */
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

  notify(message: any, type: notifyTypes) {
    console.log(message)
    if (this.isErrorCaught(message, type)) {
      if (message.status === 0) {
        message =
          'No hay conexión con el backend, revise si el servidor remoto está levantado.'
      } else if (message.error.status >= 500) {
        message =
          'Hubo un error al realizar la operación. Consulte al administrador del sistema.'
      } else if (message.error.status >= 400) {
        message = message.error.message as
          | string
          | 'Se ha producido un error en la solicitud. Por favor, verifique los datos proporcionados y vuelva a intentarlo.'
      }
    }
    this.notifySubject.next({message, type})
  }

  isErrorCaught = (message: any, type: notifyTypes) =>
    type === 'error' && typeof message !== 'string'

  getNotifyObservable() {
    return this.notifySubject.asObservable()
  }
}
