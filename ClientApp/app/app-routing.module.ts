import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentComponent } from './components/document/document.component';
import { AppComponent } from './components/app/app.component';


const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'document', component: DocumentComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
