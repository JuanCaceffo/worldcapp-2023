import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {notifyTypes} from './components/toast-message/toastMessage/toastMessage.component'
import {NotifierService} from './services/notifier-service/notifier.service'
import {filter} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private notifierService: NotifierService
  ) {}

  title = 'world-capp-front'
  message: string = ''
  messageType: notifyTypes = 'info'

  isLoginPage = (): boolean => this.router.url === '/login'

  ngOnInit() {
    this.notifierService
      .getNotifyObservable()
      .pipe(filter(() => !this.message))
      .subscribe(({message, type}) => {
        this.message = message
        this.messageType = type
        setTimeout(() => {
          this.message = ''
        }, 3000)
      })
  }
}
