import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import './app.module'
import { BaseFilterComponent } from './components/filter/baseFilter.component'
import { VariantFilterComponent } from './components/filter/variantFilter/variantFilter.component'
import { SortedByFilterComponent } from './components/filter/sortedByFilter/sortedByFilter.component'

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent, BaseFilterComponent, VariantFilterComponent, SortedByFilterComponent]
  }))

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
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('world-capp-front app is running!')
  // })
})
