import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Experience, Education } from '../../models/portfolio.models';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experiencia {
  experiences: Experience[] = [
    {
      position: 'Junior Software Developer',
      company: 'NTT Data',
      period: '2024 - Actualidad',
      description: 'Desarrollo de soluciones web empresariales',
      tasks: [
        'Construcción y prueba de soluciones, acorde a especificaciones',
        'Utilización de herramientas de verificación de calidad',
        'Estimación y reporte de tareas'
      ]
    },
    {
      position: 'Administrativo Logística',
      company: 'Visanfer S.A.',
      period: '2020 - 2024',
      description: 'Gestión logística y atención al cliente',
      tasks: [
        'Gestión de pedidos y atención al cliente',
        'Control del propio estocaje y suministro de materias primas',
        'Elaboración de documentación de transporte y control de caja'
      ]
    },
    {
      position: 'Técnico Laboral',
      company: 'Intermpleo S.L.',
      period: '2015 - 2019',
      description: 'Gestión de recursos humanos y trámites laborales',
      tasks: [
        'SILTRA y Sistema RED. Trámites laborales',
        'Gestión de base de datos y selección de candidatos',
        'Resolución de conflictos entre trabajador y empresa usuaria'
      ]
    }
  ];

  education: Education[] = [
    {
      degree: 'CGS Desarrollo de Aplicaciones Web',
      institution: 'IES José Planes',
      period: '2022 - 2024'
    },
    {
      degree: 'Máster en Dirección y Gestión de RRHH',
      institution: 'Universidad de Murcia',
      period: '2014 - 2015'
    },
    {
      degree: 'Grado en Pedagogía',
      institution: 'Universidad de Murcia',
      period: '2009 - 2013'
    }
  ];
}
