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

  notifySucess(message: string) {
    this.notifySubject.next({message, type: 'success'})
  }
  notifyInfo(message: string) {
    this.notifySubject.next({message, type: 'info'})
  }
  notifyAlert(message: string) {
    this.notifySubject.next({message, type: 'alert'})
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  notifiyError(error: any) {
    const errorResponse = error.error
    let errorMessage = ''

    if (typeof error === 'string') {
      errorMessage = error
    } else if (error.status === 0) {
      errorMessage =
        'No hay conexión con el backend, revise si el servidor remoto está levantado.'
    } else if (errorResponse.status >= 500) {
      errorMessage =
        'Hubo un error al realizar la operación. Consulte al administrador del sistema.'
    } else if (errorResponse.status >= 400) {
      errorMessage =
        'Se ha producido un error en la solicitud. Por favor, verifique los datos proporcionados y vuelva a intentarlo.'
    }

    this.notifySubject.next({message: errorMessage, type: 'error'})
  }

  getNotifyObservable() {
    return this.notifySubject.asObservable()
  }
}
