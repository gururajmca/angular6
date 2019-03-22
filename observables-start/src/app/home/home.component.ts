import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Create custom Observable
    // const myNumber = Observable.interval(1000);
    // myNumber.subscribe(
    //   (number: number) => {
    //     console.log('My New Number is ', number);
    //   }
    // );

    const myObservable = Observable.create((observer: Observer <string>) => {
      setTimeout((data: string)=> {
        observer.next('first package');
      }, 2000),
      setTimeout((data: string)=> {
        observer.next('second package');
      }, 4000),
      setTimeout((error: string)=> {
        observer.error('This doesnot work');
      }, 5000)

      
    });

    myObservable.subscribe(
      (data:  string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('This is completed');}
    );
  }
}
