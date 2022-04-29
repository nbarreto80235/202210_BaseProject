import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css']
})
export class PlantasListComponent implements OnInit {

  plantas: Array<Planta> = [];
  sumInterior: number = 0;
  sumExterior: number = 0;

  constructor(private plantasSevice: PlantaService) { }

  getPlantas(): void {
    this.plantasSevice.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.sumExterior = this.plantas.filter(p => p.tipo === 'Exterior').length;
      this.sumInterior = this.plantas.filter(p => p.tipo === 'Interior').length;

    });
  }

  ngOnInit() {
    this.getPlantas();
  }

}
