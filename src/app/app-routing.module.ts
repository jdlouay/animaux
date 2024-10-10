import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimauxComponent } from './animaux/animaux.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
const routes: Routes = [
  { path: "animaux", component: AnimauxComponent },
  { path: "add-animal", component: AddAnimalComponent },

  { path: "updateAnimal/:id", component: UpdateAnimalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
