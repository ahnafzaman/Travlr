import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/platform-browser';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripDataService } from './trip-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter([]),
    TripDataService,
    importProvidersFrom(TripListComponent),
    importProvidersFrom(TripCardComponent)
  ]
};
