import { Computer } from '../../models/computer';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputersService } from '../../services/computers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-computer',
  templateUrl: './update-computer.component.html',
  styleUrl: './update-computer.component.scss'
})
export class UpdateComputerComponent implements OnInit {
  id!: number;
  computer: Computer = new Computer();

  constructor(
    private computersService: ComputersService, 
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.computersService.getComputerById(this.id).subscribe(
      data => {
        this.computer = data; 
      }, 
      error => console.error(error)
    );
  }

  onSubmit(): void {
    this.computersService.updateComputer(this.id, this.computer).subscribe(
      data => {
        this.goToComputerList();
      },
      error => console.error(error)
    );
  }

  goToComputerList(): void {
    this.router.navigate(['/sidebar/computer']);
  }
}
