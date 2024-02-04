import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
[x: string]: any;
  promocoes: Promocao[] = [];

  constructor(private servicePromocao: PromocaoService) { }

  ngOnInit(): void {
    this.servicePromocao.listarPromocoes().subscribe({
      next: (promocoes) => {
        console.log(promocoes)
        this.promocoes = promocoes
      }
    })
  }
}
