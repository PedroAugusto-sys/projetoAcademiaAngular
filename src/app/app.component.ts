import { Component } from '@angular/core';
import {CadastreService} from '../../sistemaAcademia-web/src/app/services/cadastre/cadastre.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoAcademia';


  constructor(
    private cadastreService: CadastreService
  ) {
  }

}
