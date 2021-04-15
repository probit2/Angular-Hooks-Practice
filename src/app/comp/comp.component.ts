import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-comp",
  templateUrl: "./comp.component.html",
  styleUrls: ["./comp.component.css"]
})
export class CompComponent implements OnInit, OnChanges, DoCheck {
  private myNum: number;

  @Input() myName; string;
  @Input()
  set num(value) {
    this.myNum = value;
  }
  get num() {
    return this.myNum;
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    // throw new Error("Method not implemented.");
    const newNum: SimpleChange = changes.num;
    // debugger;
    console.log("previousValue", newNum.previousValue);
    console.log("currentValue", newNum.currentValue);
    // console.log("something triggered");
  }

  ngOnInit() {
    console.log("ng on init value", this.num);
  }

  ngDoCheck() {
    // throw new Error("Method not implemented.");
    // debugger;
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("component is destroyed");
  }

}
