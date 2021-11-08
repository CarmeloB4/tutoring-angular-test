import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './modules/core/container/container.component';
import { ListComponent } from './modules/core/components/list/list.component';
import { CardComponent } from './modules/core/components/card/card.component';
import { DetailsComponent } from './modules/core/components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ListComponent,
    CardComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
