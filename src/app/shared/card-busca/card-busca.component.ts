import { Component, Input, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})

export class CardBuscaComponent  implements OnInit {


  @Input() img: string = ''
  @Input() destino: string = ''
  @Input() preco: number = 0

  constructor(private servicePromocoes: PromocaoService) { }

  ngOnInit(): void {
  
  }


}
