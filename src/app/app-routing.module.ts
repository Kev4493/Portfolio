import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { DialogMailCheckoutComponent } from './dialog-mail-checkout/dialog-mail-checkout.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  { path: '', component: HomeSectionComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent },
  { path: 'checkout', component: DialogMailCheckoutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
