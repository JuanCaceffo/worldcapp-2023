import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {ActivatedRoute} from '@angular/router'
import {FigusListType} from 'src/app/dtos/figurita.dto'

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent {
  constructor(private titleService: Title, private route: ActivatedRoute) {}

  ngOnInit() {
    this.titleService.setTitle('Agregar Figuritas')
    this.route.params.subscribe((param) => {
      this.figusType = param['figus-list-type'] as FigusListType
      console.log(this.figusType)
    })
  }
  figusType!: string
}
