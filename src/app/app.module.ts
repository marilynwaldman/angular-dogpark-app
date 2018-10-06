import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DogparkListComponent } from './dogpark-list/dogpark-list.component';
import { DogparkListFooterComponent } from './dogpark-list-footer/dogpark-list-footer.component';
import { DogparkListHeaderComponent } from './dogpark-list-header/dogpark-list-header.component';
import { DogparkDataService } from './dogpark-data.service';
import { DogparkListItemComponent } from './dogpark-list-item/dogpark-list-item.component';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DogparksComponent } from './dogparks/dogparks.component';

@NgModule({
  declarations: [
    AppComponent,
    DogparkListComponent,
    DogparkListFooterComponent,
    DogparkListHeaderComponent,
    DogparkListItemComponent,
    PageNotFoundComponent,
    DogparksComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DogparkDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
