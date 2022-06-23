import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-dicionario',
  templateUrl: './view-dicionario.component.html',
  styleUrls: ['./view-dicionario.component.css']
})
export class ViewDicionarioComponent implements OnInit {
  data = [
    {
      id:1,
      title:"Aaaaa",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam velit, tempor eu molestie in, sodales sit amet est. Nulla consectetur, dolor ac consectetur ornare, elit nisi maximus justo, sit amet lobortis arcu purus vitae ligula. Mauris venenatis egestas consequat. Sed faucibus mi id augue finibus, ut elementum mauris maximus."
    },
    {
      id:2,
      title:"Bbbbb",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam velit, tempor eu molestie in, sodales sit amet est. Nulla consectetur, dolor ac consectetur ornare, elit nisi maximus justo, sit amet lobortis arcu purus vitae ligula. Mauris venenatis egestas consequat. Sed faucibus mi id augue finibus, ut elementum mauris maximus."
    },
    {
      id:3,
      title:"Ccccc",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam velit, tempor eu molestie in, sodales sit amet est. Nulla consectetur, dolor ac consectetur ornare, elit nisi maximus justo, sit amet lobortis arcu purus vitae ligula. Mauris venenatis egestas consequat. Sed faucibus mi id augue finibus, ut elementum mauris maximus."
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
