import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent {
  constructor(private titleService: Title, private route: ActivatedRoute) {}

  ngOnInit() {
    this.titleService.setTitle('Agregar Figuritas')
  }
  figusType!: string
}
