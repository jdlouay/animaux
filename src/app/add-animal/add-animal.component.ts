import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  newAnimal = new Animal();  // Objet représentant le nouvel animal
  message: string | undefined;      // Variable pour stocker le message de succès

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {}

  // Méthode pour ajouter un nouvel animal
  addAnimal() {
    this.animalService.ajouterAnimal(this.newAnimal);  // Ajout de l'animal via le service
    this.message = "Animal " + this.newAnimal.nomAnimal + " ajouté avec succès";  // Message de succès
  }
}
