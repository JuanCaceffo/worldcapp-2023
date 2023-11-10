import { RouterTestingModule } from '@angular/router/testing'
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing'
import {SearchbarComponent} from './searchbar.component'
import {FormsModule} from '@angular/forms'
import { getByTestId } from 'src/app/helpers/test.helper'
import { CardSearch } from 'src/app/models/searchbar/searchbar'

describe('SearchBar Component', () => {
  let searchbar: SearchbarComponent
  let fixture: ComponentFixture<SearchbarComponent>
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [SearchbarComponent]
    }).compileComponents()
    fixture = TestBed.createComponent(SearchbarComponent)
    searchbar = fixture.componentInstance
    searchbar.filter = new CardSearch()    
  }))

  it('should create', () => {
    expect(searchbar).toBeTruthy()
  })

  it('debería estar vacía al iniciar', () => {
    const input = getByTestId(fixture, 'searchbarInput') as HTMLInputElement
    expect(input.value).toBe('')
  })

  it('actualización del valor desde el controlador', fakeAsync(() => {
    //Arrange
    const input = getByTestId(fixture, 'searchbarInput') as HTMLInputElement
    const valor = 'valor cambiado desde el controlador'
    //Act
    searchbar.filter!.palabraClave = valor
    fixture.detectChanges()
    tick()    
    //Assert
    expect(input.value).toEqual(valor)
  }))

  it('actualización del valor desde la vista', () => {
    //Arrage            
    const input = getByTestId(fixture, 'searchbarInput') as HTMLInputElement
    const valor = 'valor cambiado desde la vista'    
    //Act
    fixture.detectChanges()
    input.value = valor            
    input.dispatchEvent(new Event('input'))    
    //Assert    
    expect(searchbar.filter?.palabraClave).toEqual(valor)    
  })
})
