/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProfileDuplicateFigusComponent } from './profile-duplicate-figus.component';

describe('ProfileDuplicateFigusComponent', () => {
  let component: ProfileDuplicateFigusComponent;
  let fixture: ComponentFixture<ProfileDuplicateFigusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDuplicateFigusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDuplicateFigusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
