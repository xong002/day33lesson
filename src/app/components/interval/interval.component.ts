import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{

  count: number = 0;
  intervalId: any;
  fullName: string = '';

  ngOnInit(): void {
    console.log('Interval component onInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Interval component onChange');
  }

  ngDoCheck(): void {
    console.log('Interval component DoCheck');
  }
  ngAfterViewInit(): void {
    console.log('Interval component ViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Interval component ViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('Interval component ContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Interval component ContentChecked');
  }
  ngOnDestroy(): void {
    console.log('Interval component onDestroy');
    this.stopCount();
  }

  startCount() {
    this.intervalId = setInterval(() => {
      this.count++;
    }, 1000);
  }

  stopCount() {
    clearInterval(this.intervalId); //reset interval function
  }
}
