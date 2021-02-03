import { Component, OnInit } from '@angular/core';
import artist from './_files/artist.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'my-app';
  public artistList:{name:string, shortname:string, reknown:string, bio:string}[] = artist;
}
