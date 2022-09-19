import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { DialogMailCheckoutComponent } from './dialog-mail-checkout/dialog-mail-checkout.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeSectionComponent,
    SkillsSectionComponent,
    PortfolioSectionComponent,
    AboutMeSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent,
    ImprintComponent,
    DataProtectionComponent,
    DialogMailCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
