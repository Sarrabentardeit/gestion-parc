import { Component, OnInit } from '@angular/core';
import { Computer } from '../../models/computer';
import { ComputersService } from '../../services/computers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-computer',
  templateUrl: './create-computer.component.html',
  styleUrls: ['./create-computer.component.scss'] // Remarquez l'ajustement ici : styleUrls au lieu de styleUrl
})
export class CreateComputerComponent implements OnInit {
  computer: Computer = new Computer();

  constructor(private ComputersService: ComputersService, private router: Router) {}

  ngOnInit(): void {
    // Retiré la ligne d'erreur, vous pouvez ajouter une logique ici si nécessaire
  }

  saveComputer() {
    this.ComputersService.createComputer(this.computer).subscribe(
      (data) => {
        console.log(data);
        this.goToComputerList(); // Appel correct de la méthode
      },
      (error) => console.error(error)
    );
  }

  goToComputerList() {
    this.router.navigate(['/sidebar/computer']);
  }
  

  onSubmit() {
    console.log(this.computer);
    this.saveComputer(); // Appel correct de la méthode
  }
}
