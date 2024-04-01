import { Component } from '@angular/core';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent {

  requirements =[
     {id:1, name:'React'},
     {id:2, name:'Angular'},
     {id:3, name:'SpringBoot'},
     {id:4, name:'JavaScript'},
     {id:5, name:'Python'}
     
  ];

  itemSelected(e:any){
    console.log(e);
  }

}
