import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'concatenate'
})
export class ConcatenatePipe implements PipeTransform {
  transform(name: string | undefined, surname: string | undefined): string {
    return `${name || ''} ${surname || ''}`
  }
}
