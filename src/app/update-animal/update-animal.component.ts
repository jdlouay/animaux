import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../services/animal.service';  // Importation du service
import { Animal } from '../model/animal.model';  // Importation du modèle d'animal

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styles: []
})
export class UpdateAnimalComponent implements OnInit {
  currentAnimal: Animal = new Animal();  // L'animal à modifier

  constructor(
    private activatedRoute: ActivatedRoute,  // Récupérer l'ID depuis l'URL
    private router: Router,  // Redirection après la mise à jour
    private animalService: AnimalService  // Service pour gérer les animaux
  ) { }

  ngOnInit(): void {
    // Récupérer l'animal à modifier à partir de l'ID passé dans l'URL
    const id = this.activatedRoute.snapshot.params['id'];
    this.currentAnimal = this.animalService.consulterAnimal(id);
    console.log(this.currentAnimal)
  }

  // Mettre à jour l'animal via le service
  updateAnimal(): void {
    // Vérifiez ici si l'animal est bien modifié
    this.animalService.updateAnimal(this.currentAnimal);
    this.router.navigate(['animaux']);  // Redirigez vers la liste après la mise à jour
  }
  
  }

