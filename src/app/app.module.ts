import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from 'environments/environment';

import { _appReducer } from 'app/modules/core/store/appReducer';
import { FeatureModule } from 'app/modules/feature/feature.module';
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
import { GridItemComponent } from '@components/layout/grid/grid-item/grid-item.component';
import { ButtonComponent } from '@components/shared/button/button.component';
import { GridComponent } from '@components/layout/grid/grid.component';
// pipes
import { FilterOnSearchTermPipe } from 'app/pipes/filter-on-search-term.pipe';
// services
import { MoviesService } from '@services/movies.service';
// directives
import { LazySizesDirective } from 'app/directives/lazySizes.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    MovieDetailsComponent,
    GridComponent,
    GridItemComponent,
    ButtonComponent,
    // pipes
    FilterOnSearchTermPipe,
    // directives
    LazySizesDirective,
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ app: _appReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
