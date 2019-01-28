import { Component, 
  OnInit,
   Input,
   OnChanges,
   SimpleChanges ,
  ViewEncapsulation,
  DoCheck,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated, //none ,native

})
export class ServerElementComponent implements OnInit,OnChanges ,DoCheck,AfterContentInit{
@Input('srvElement') element:{type:string,name:string,content:string}
@Input() name:string;
  constructor() {
    console.log('Constructor called')
   }

  ngOnInit() {
  console.log('ngOnInit method Called')
  }

ngOnChanges(changes: SimpleChanges): void {

  console.log('On change method Called')
  console.log(changes);
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  
}
ngDoCheck(){
console.log('ngDoCheckCalled')
}

ngAfterContentInit(): void {
  console.log('ngAfterContentChecked Called')
  //Called after every check of the component's or directive's content.
  //Add 'implements AfterContentChecked' to the class.
  
}
}
