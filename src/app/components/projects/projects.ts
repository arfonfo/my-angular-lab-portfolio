import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, FolderGit2, ExternalLink, Github } from 'lucide-angular';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Sistema de Gestión RRHH',
      description: 'Aplicación web para la gestión integral de recursos humanos con módulos de contratación, nóminas y evaluación de desempeño',
      tech: ['Angular', 'Java', 'SQL', 'Spring Boot'],
      link: '#',
      github: 'https://github.com/tu-usuario/proyecto1'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Panel de control con visualización de datos en tiempo real y generación de reportes usando Pentaho',
      tech: ['Vue.js', 'Pentaho', 'PostgreSQL'],
      link: '#',
      github: 'https://github.com/tu-usuario/proyecto2'
    },
    {
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico con gestión de inventario, carrito de compras y sistema de pagos',
      tech: ['Angular', 'Node.js', 'MongoDB'],
      link: '#',
      github: 'https://github.com/tu-usuario/proyecto3'
    }
  ];
}
