import {RouterTestingModule} from '@angular/router/testing'
import {HttpClientModule} from '@angular/common/http'
import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'
import {SearchbarComponent} from './searchbar.component'
import {FormsModule} from '@angular/forms'

describe('SearchBar Component', () => {
  let searchbar: SearchbarComponent
  let fixture: ComponentFixture<SearchbarComponent>
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, RouterTestingModule],
      declarations: [SearchbarComponent]
    }).compileComponents()
    fixture = TestBed.createComponent(SearchbarComponent)
    searchbar = fixture.componentInstance
  }))

  it('should create', () => {
    expect(searchbar).toBeTruthy()
  })
})
