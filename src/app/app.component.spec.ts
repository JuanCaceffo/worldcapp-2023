import {TestBed} from '@angular/core/testing'
import {RouterTestingModule} from '@angular/router/testing'
import {AppComponent} from './app.component'
import './app.module'
import {VariantFilterComponent} from './components/filter/variant-filter/variant-filter.component'
import {SortedByFilterComponent} from './components/filter/sorted-by-filter/sorted-by-filter.component'
import {HeaderComponent} from './components/header/header.component'
import {LogoComponent} from './components/logo/logo.component'
import {FooterComponent} from './components/footer/footer.component'
import {ToastMessageComponent} from './components/toast-message/toastMessage/toastMessage.component'

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        VariantFilterComponent,
        SortedByFilterComponent,
        HeaderComponent,
        LogoComponent,
        FooterComponent,
        ToastMessageComponent
      ]
    })
  )

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'world-capp-front'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('world-capp-front')
  })

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent)
  //   fixture.detectChanges()
  //   const compiled = fixture.nativeElement as HTMLElement
  //   expect(compiled.querySelector('.content span')?.textContent).toContain(
  //     'world-capp-front app is running!'
  //   )
  // })
})
