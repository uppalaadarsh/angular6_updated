import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
  })
export class PostsComponent implements OnInit { 
  public show:boolean = false;
  public buttonName:any = 'Popup';

  ngOnInit () {  }

  toggle() {
    this.show = !this.show;
 
    if(this.show)  
      this.buttonName = "Close"; 
    else
      this.buttonName = "Popup"; 
  }
}

