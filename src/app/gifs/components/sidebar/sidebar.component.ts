import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService){}

  get tags(): string[]{
    //console.log(`hi ${this.gifsService.tagsHistory}`);
    return this.gifsService.tagsHistory;
  }

  volverAVer(item: string){
    console.log(`hiii ${item}`);
    this.gifsService.searchTag(item);
  }

}
