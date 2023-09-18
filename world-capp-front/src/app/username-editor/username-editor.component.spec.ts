import { ComponentFixture, TestBed } from '@angular/core/testing'

import { UsernameEditorComponent } from './username-editor.component'

describe('UsernameEditorComponent', () => {
  let component: UsernameEditorComponent
  let fixture: ComponentFixture<UsernameEditorComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsernameEditorComponent]
    })
    fixture = TestBed.createComponent(UsernameEditorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
