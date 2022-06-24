import { Component, OnInit } from '@angular/core';
import { DicionarioService } from '../service/dicionario.service';

export interface Diario{
  id: number,
  title: string,
  description:string
}

@Component({
  selector: 'app-view-dicionario',
  templateUrl: './view-dicionario.component.html',
  styleUrls: ['./view-dicionario.component.css'],
})
export class ViewDicionarioComponent implements OnInit {
  data = [
    {
      id: 1,
      title: 'Aaaaa',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam velit, tempor eu molestie in, sodales sit amet est. Nulla consectetur, dolor ac consectetur ornare, elit nisi maximus justo, sit amet lobortis arcu purus vitae ligula. Mauris venenatis egestas consequat. Sed faucibus mi id augue finibus, ut elementum mauris maximus.',
    },
    {
      id: 2,
      title: 'Bbbbb',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam velit, tempor eu molestie in, sodales sit amet est. Nulla consectetur, dolor ac consectetur ornare, elit nisi maximus justo, sit amet lobortis arcu purus vitae ligula. Mauris venenatis egestas consequat. Sed faucibus mi id augue finibus, ut elementum mauris maximus.',
    },
    {
      id: 3,
      title: 'Ccccc',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam velit, tempor eu molestie in, sodales sit amet est. Nulla consectetur, dolor ac consectetur ornare, elit nisi maximus justo, sit amet lobortis arcu purus vitae ligula. Mauris venenatis egestas consequat. Sed faucibus mi id augue finibus, ut elementum mauris maximus.',
    },
  ];
  diario = sessionStorage.getItem('diario');
  dicionarioList!: Diario[];
  constructor(private service: DicionarioService) {}

  ngOnInit(): void {
    if (this.diario === 'Dicionario Join RH') {
      this.getDicionariosJoin();
    }
    if (this.diario === 'Dicionario RH') {
      this.getDicionariosRH();
    }
    if (this.diario === 'Dicionario Geral') {
      this.getDicionariosGeral();
    }
  }
  getDicionariosJoin() {
    this.service.getDicionariosJoinRH().subscribe({
      next: (dicionario) => (this.dicionarioList = dicionario),
    });
  }
  getDicionariosRH() {
    this.service.getDicionariosRH().subscribe({
      next: (dicionario) => (this.dicionarioList = dicionario),
    });
  }
  getDicionariosGeral() {
    this.service.getDicionariosGeral().subscribe({
      next: (dicionario) => (this.dicionarioList = dicionario),
    });
  }
}
