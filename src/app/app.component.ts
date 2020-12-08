import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]
})
export class AppComponent {
  title = 'FinalProject';
  activeLink: string;
  mydate: any;
  constructor(private datePipe: DatePipe){
    var mDate =  new Date();
    this.mydate = this.datePipe.transform(mDate, 'MMM d, y, h:mm:ss a');
  }
}
