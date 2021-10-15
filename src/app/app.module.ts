import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { AlunosModule } from './alunos/alunos.module';
//import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './guards/cursos-guard';
import { AlunosGuard } from './guards/alunos-guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, PaginaNaoEncontradaComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    //CursosModule,
    //AlunosModule,
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuard, CursosGuard, AlunosGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
