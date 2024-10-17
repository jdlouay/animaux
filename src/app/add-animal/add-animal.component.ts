import { Groupe } from './../model/groupe.model';
import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import Animal from '../model/animal.model';
import { Router } from '@angular/router';  // Importation correcte du Router

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  newAnimal = new Animal();  // Objet représentant le nouvel animal
  groupes: Groupe[] = [];  // Liste des groupes disponibles
  newIdgroupe!: number;  // ID du groupe sélectionné
  newgroupe!: Groupe;  

  constructor(
    private animalService: AnimalService,
    private router: Router  
  ) {}

  ngOnInit(): void {
    
    this.groupes = this.animalService.listeGroupes();
  }


  addAnimal() {
   
    if (this.newIdgroupe) {
     
      this.newgroupe = this.groupes.find(g => g.idGroupe == this.newIdgroupe)!;
      this.newAnimal.groupe = this.newgroupe;

   
      this.animalService.ajouterAnimal(this.newAnimal);

      this.router.navigate(['animaux']);
   
    
    }
  }
}
