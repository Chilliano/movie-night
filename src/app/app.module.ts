import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FeatureModule } from 'app/modules/feature/feature.module';

// store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { _appReducer } from 'app/modules/core/store/appReducer';
import { AppRoutingModule } from 'app/app-routing.module';

// components
import { AppComponent } from 'app/app.component';
import { HeaderComponent } from '@components/layout/header/header.component';
import { MoviesComponent } from '@components/movies/movies.component';
import { GridItemComponent } from '@components/layout/grid/grid-item/grid-item.component';
import { ButtonComponent } from '@components/shared/button/button.component';
import { GridComponent } from '@components/layout/grid/grid.component';
import { MovieDetailsComponent } from '@components/movies/movie-details/movie-details.component';
import { GenresComponent } from '@components/shared/genres/genres.component';
import { ListComponent } from '@components/shared/list/list.component';
import { SearchInputComponent } from '@components/shared/search-input/search-input.component';

// pipes
import { FilterOnFilterTermPipe } from '@pipes/filter-on-filter-term.pipe';
// services
import { MoviesService } from '@services/movies/movies.service';
// directives
import { LazySizesDirective } from '@directives/lazySizes.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieDetailsComponent,
    GridComponent,
    GridItemComponent,
    ButtonComponent,
    SearchInputComponent,
    HeaderComponent,
    GenresComponent,
    ListComponent,
    // pipes
    FilterOnFilterTermPipe,
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
