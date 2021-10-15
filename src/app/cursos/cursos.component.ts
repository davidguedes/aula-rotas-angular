import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];
  pagina!: number;
  inscricao: Subscription = new Subscription();

  constructor(
    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.activatedRoute.queryParams.subscribe(
      (queryParams) => (this.pagina = queryParams['pagina'])
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    //this.pagina++;
    this.router.navigate(['/cursos'], {
      queryParams: { pagina: ++this.pagina },
    });
  }

  paginaAnterior() {
    if (this.pagina > 1) {
      this.router.navigate(['/cursos'], {
        queryParams: { pagina: --this.pagina },
      });
    }
  }
}
