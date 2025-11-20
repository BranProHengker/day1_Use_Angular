// src/app/app.component.ts
import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { HeroBanner } from './hero-banner/hero-banner';
import { Artwork } from './artwork/artwork';
import { Emot  } from  './emot/emot';
import { RecentSearch} from './recent-search/recent-search';
import { Favorite } from './favorite/favorite';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    HeroBanner,
    Artwork,
    Emot,  
    RecentSearch,
    Favorite,

  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Nakano-Itsuiki';
}