import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
// index barrel files here later if needed
// reducers
import { MoviesReducer } from './store/reducers/movies.reducer';
// modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureModule } from './modules/feature/feature.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FeatureModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      movies: MoviesReducer,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
