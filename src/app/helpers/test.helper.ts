import { ComponentFixture } from '@angular/core/testing'

export const getByTestId = <T>(
  fixture: ComponentFixture<T>,
  testId: string
) => {
  return fixture.debugElement.nativeElement.querySelector(
    `[data-testid="${testId}"]`
  ) as HTMLElement
}
