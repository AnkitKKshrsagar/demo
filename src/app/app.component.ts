import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud';

  name:any;
  email:any;
  pwd:any;
  selectedObj:any;
  selectedIndex:any;

  data:any=[];

  // This is Use For Create Operation
  sub(){
    let obj={
      name:this.name,
      email:this.email,
      pwd:this.pwd
    }

    this.data.push(obj)
    this.clear();
    console.log('Submit Data =', this.data);
  }

  clear(){
    this.name="",
    this.email="",
    this.pwd=""
  }

  edit( index:any, editObj:any){
    this.selectedIndex = index;
    this.selectedObj = editObj;

    this.name = editObj.name,
    this.email = editObj.email,
    this.pwd = editObj.pwd,

    console.log('This is edit row', index)

  }

  update(){
    this.data[this.selectedIndex].name = this.name;
    this.data[this.selectedIndex].email = this.email;
    this.data[this.selectedIndex].pwd = this.pwd;

    console.log('this is updated Name', this.name);
    console.log('this is updated Email', this.email);
    console.log('this is updated Password', this.pwd);

    this.clear();

  }



  delete(index:any){
    this.data.splice(index,1)
    console.log("This row  is Deleted", index)
  }
}
