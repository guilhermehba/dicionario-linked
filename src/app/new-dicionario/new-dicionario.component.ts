import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-dicionario',
  templateUrl: './new-dicionario.component.html',
  styleUrls: ['./new-dicionario.component.css']
})
export class NewDicionarioComponent implements OnInit {
  newDiario!:FormGroup
  constructor() { }

  ngOnInit(): void {
  }

}
