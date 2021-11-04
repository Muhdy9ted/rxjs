import { Component, OnInit } from "@angular/core";
import { fromEvent, interval, Observable, timer } from "rxjs";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // const interval$ = interval(1000);
    // const sub = interval$.subscribe((val) => console.log("stream 1 => " + val));
    // interval$.subscribe((val) => console.log("stream 2 => " + val));
    // setTimeout(() => {
    //   sub.unsubscribe();
    // }, 5000);

    // const timer$ = timer(3000, 1000);
    // timer$.subscribe((val) => console.log("stream 1 => " + val));

    // const click$ = fromEvent(document, "click");
    // const subscription = click$.subscribe(
    //   (evt) => console.log(evt),
    //   (err) => console.log(err),
    //   () => console.log("completed")
    // );

    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 5000);

    const http$ = Observable.create((observer) => {
      fetch("/api/courses")
        .then((response) => {
          return response.json();
        })
        .then((body) => {
          observer.next(body);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
    });
  }
}
