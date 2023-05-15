import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewSkillComponent } from './components/graficos/new-skill.component';
import { EditSkillComponent } from './components/graficos/edit-skill.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NuevoProyectosComponent } from './components/proyectos/nuevo-proyectos.component';

const routes: Routes = [
{path:'portfolio',component:PortfolioComponent},
{path:'iniciarsesion',component:IniciarSesionComponent},
{path:'nuevaexp',component:NewExperienciaComponent},
{path:'nuevaedu',component:NewEducacionComponent},
{path:'editexp/:id',component:EditExperienciaComponent},
{path:'editedu/:id',component:EditEducacionComponent},
{path:'', component: PortfolioComponent},
{path:'newskill',component:NewSkillComponent},
{path:'editskill/:id',component:EditSkillComponent},
{path:'editacercade/:id',component:EditAcercaDeComponent},
{path:'nuevoproy',component:NuevoProyectosComponent},
{path:'editproy/:id',component:EditProyectosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
