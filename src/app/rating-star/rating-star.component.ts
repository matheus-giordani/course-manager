import { Component, Input, OnChanges, } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css'],
})
export class RatingStarComponent implements OnChanges {
  // onchages indentifica alterações em objetos
  @Input()//input serve pra adicionar atributos ao selector 'app-rating-star'
  rating: number = 0;

  starWidth!: number;

  ngOnChanges(): void {
    // calculo para o redimensionamento da div que vai conter as estrelas caso tenha mais estrelas o curso maior a div

    this.starWidth = this.rating * 74 / 5;
  }
}
