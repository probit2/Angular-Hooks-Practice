import { Component, VERSION } from '@angular/core';

interface item {
  name: string,
  value: string
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {

private number: number = 100;
// name: string = "kishan";
onVisible: boolean = true;

// updateName() {
//   this.name = "kp"
// }

items: item[] = [
  {
    name:"kp",
    value: "1"
  },
    {
    name:"kp2",
    value: "2"
  },
    {
    name:"kp3",
    value: "3"
  },
];
selectedValue = 1;

user = {
  name: "kp"
}


updateName() {
  this.user.name = "kishan"
}

switchVisibility() {
  this.onVisible = !this.onVisible;
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
