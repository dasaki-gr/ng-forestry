import { Component } from '@angular/core';

@Component({
  selector: 'dsk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  curTheme:string = 'm2app-candy';
  title = 'NgForestry works!';
  isDarkTheme: boolean = false;

  private themeClick( themeDescr: string) {
    this.curTheme = 'm2app-'+themeDescr;
    console.log('themeClick='+this.curTheme);
  }

  private toolClick( toolDescr: string) {
    console.log('toolClick');
  }

}
