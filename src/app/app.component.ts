import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Rajesh";
  myid= 1234;
  f=false;

  //event binding
  sayHi(){
    let age =21;
    document.write("I am "+this.name + "age is"+ age);
  }
  
  //class binding
  successClass='as';

  hasError =true;
  msgClass={
    success: !this.hasError,
    error: this.hasError,
  };
}
