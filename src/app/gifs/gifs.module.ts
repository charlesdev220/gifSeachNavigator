import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { LazyImageComponent } from '../shared/lazy-image/lazy-image.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SidebarComponent,
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifsCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SidebarComponent,
    HomePageComponent
  ]
})
export class GifsModule { }
