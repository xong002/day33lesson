import { QueryList, ViewChildren } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements AfterViewInit{

  @ViewChild("domParagraph1", {static: true}) myParagraphElememt: ElementRef;

  categories: any[] = [];

  @ViewChildren('itemList') items: QueryList<string>;
  
  ngOnInit(): void{
    this.myParagraphElememt.nativeElement.innerHTML = "Its 1145am already";

    this.categories = [
      { value: 'Angular'},
      { value: 'Vue'},
      { value: 'React'}
    ]
  }

  ngAfterViewInit(): void {
    console.log(this.myParagraphElememt);
  }

  getCategory(event: any, category: any, index: number){
    console.log('Event: ' + JSON.stringify(event));
    console.log('Category: ' + JSON.stringify(category));
    console.log('Index: '+ index);
    console.log('Category List: ' + JSON.stringify(this.categories))
  }
}


