import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../services/animal.service';  // Service pour gérer les animaux
 // Modèle Animal
import { Groupe } from '../model/groupe.model';  // Modèle Groupe
import Animal from '../model/animal.model';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styles: []
})
export class UpdateAnimalComponent implements OnInit {
  currentAnimal: Animal = new Animal();  // L'animal à modifier
  groupes!: Groupe[];  // Liste des groupes disponibles
  updatedGroupeId!: number;  // ID du groupe sélectionné

  constructor(
    private activatedRoute: ActivatedRoute,  // Pour récupérer l'ID depuis l'URL
    private router: Router,  // Pour redirection après la mise à jour
    private animalService: AnimalService  // Service pour gérer les animaux
  ) { }

  ngOnInit(): void {
   
    this.groupes = this.animalService.listeGroupes();

    // Récupérer l'animal à modifier à partir de l'ID passé dans l'URL
    this.currentAnimal = this.animalService.consulterAnimal(this.activatedRoute.snapshot.params['id']);

    // Initialiser l'ID du groupe sélectionné
   this.animalService.consulterAnimal(this.activatedRoute.snapshot.params['id']);
   this.updatedGroupeId=this.currentAnimal.groupe.idGroupe;
  }

  // Méthode pour mettre à jour l'animal via le service
  updateAnimal(): void {
    // Associer le groupe sélectionné à l'animal
    this.currentAnimal.groupe = this.animalService.consulterGroupe(this.updatedGroupeId);
  
    // Mettre à jour l'animal via le service
    this.animalService.updateAnimal(this.currentAnimal);
  
    // Rediriger vers la liste des animaux après la mise à jour
    this.router.navigate(['animaux']);
  }
  
}
