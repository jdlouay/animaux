import { Injectable } from '@angular/core';
import { Animal } from '../model/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  animaux: Animal[] = [
    { idAnimal: 1, nomAnimal: "Lion", especeAnimal: "Mammifère", dateNaissance: new Date("01/14/2010") },
    { idAnimal: 2, nomAnimal: "Tigre", especeAnimal: "Mammifère", dateNaissance: new Date("03/05/2011") },
    { idAnimal: 3, nomAnimal: "Éléphant", especeAnimal: "Mammifère", dateNaissance: new Date("07/10/2015") }
  ];

  // Méthode pour retourner la liste des animaux
  listeAnimaux(): Animal[] {
    return this.animaux;
  }

  // Méthode pour ajouter un nouvel animal
  ajouterAnimal(animal: Animal): void {
    this.animaux.push(animal);
  }

  // Méthode pour consulter un animal par son ID
  consulterAnimal(id: number): Animal {
    return this.animaux.find(a => a.idAnimal == id)!;
  }
  trierAnimal(){
    this.animaux = this.animaux.sort((n1,n2) => {
    if (n1.idAnimal! > n2.idAnimal!) {
    return 1;
    }
    if (n1.idAnimal! < n2.idAnimal!) {
    return -1;
    }
    return 0;
    });
    }

  // Méthode pour mettre à jour un animal
  updateAnimal(A:Animal)
{
// console.log(p);
this.supprimerAnimal(A);
this.ajouterAnimal(A);
this.trierAnimal()
}


  
  

  // Méthode pour supprimer un animal
  supprimerAnimal(animal: Animal): void {
    const index = this.animaux.indexOf(animal);
    if (index > -1) {
      this.animaux.splice(index, 1);
    }
  }
}
