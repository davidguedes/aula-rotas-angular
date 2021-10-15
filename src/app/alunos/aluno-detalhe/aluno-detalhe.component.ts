import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss'],
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno!: Aluno;
  inscricao: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService
  ) {}

  ngOnInit(): void {
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunoService.getAluno(id);
      }
    );*/

      this.inscricao = this.route.data.subscribe(
        (info) => {
          console.log(info);
          this.aluno = info.aluno;
        }
      );
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
