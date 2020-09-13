import { _appReducer } from './modules/core/store/appReducer';
import { FeatureModule } from './modules/feature/feature.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from 'environments/environment';

import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// components
import { HeaderComponent } from '@components/layout/header/header.component';
import { FooterComponent } from '@components/layout/footer/footer.component';
import { MoviesComponent } from '@components/movies/movies.component';
import { EffectsModule } from '@ngrx/effects';
import { FilterOnSearchTermPipe } from './pipes/filter-on-search-term.pipe';
// services
import { MoviesService } from 'app/services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    FilterOnSearchTermPipe,
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ _appReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
