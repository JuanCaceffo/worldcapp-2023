import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['../app.component.css','./button.component.css']
})

export class ButtonComponent implements OnInit{
  @Input() buttonTitle!: string //Obtiene el parametro desde el tag selector
  button!: Button

  handleClick = () => {
    alert(`Botón Apretado`)
  }

  //Inicializo button con los atributos requeridos
  ngOnInit(): void {
    this.button = new Button(this.buttonTitle)
  }
}

export class Button{
  constructor(public buttonTitle: string){}
}