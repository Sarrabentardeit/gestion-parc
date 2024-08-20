import { Component, OnInit } from '@angular/core';
import { ComputersService } from '../../services/computers.service';
import { Computer } from '../../models/computer'; 
import { Router } from '@angular/router';  // Importez Router pour la navigation
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateComputerComponent } from '../create-computer/create-computer.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

  computers: Computer[] = [];

  constructor(private computersService: ComputersService, private router: Router ,) { }

  ngOnInit(): void {
    this.computersService.getComputers().subscribe(data => {
      console.log(data);  
      this.computers = data;
    });
  }
 
  private getComputers() {
    this.computersService.getComputers().subscribe(data => {
      this.computers = data;
    });
  }
  
  // Méthode pour naviguer vers la page de mise à jour
  UpdateComputer(id: number): void {
    this.router.navigate(['updatecomputer', id]);
  }
  DeleteComputer(id: number) {
    this.computersService.deleteComputer(id).subscribe(data => {
      console.log(data);
      this.getComputers(); // Refresh the list of computers after deletion
    });
  }
}
