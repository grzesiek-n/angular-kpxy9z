import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  pictures = [
    'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    'https://cdn-images-1.medium.com/max/1200/1*yeAO-nwsAqnzr7k-zoDkoQ.png',
  ];

  currentPicture = 0;

  select(index){
    this.currentPicture = index;
  }
}
