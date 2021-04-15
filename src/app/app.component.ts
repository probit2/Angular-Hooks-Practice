import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

private number: number = 100;
// name: string = "kishan";

// updateName() {
//   this.name = "kp"
// }

user = {
  name: "kp"
}

updateName() {
  this.user.name = "kishan"
}

get count()
{
  return this.number;
}

set count(value) {
  this.number = value;
}

incr()
{
  this.count++;
}

dcr() {
  this.count--;
}

}
