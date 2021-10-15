import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})

export class ShoppingComponent{
  
  task = '';
  tasks : any[] = [];

  onClick(){
  	this.tasks.push({name: this.task});
  	this.task = '';
  };

}
