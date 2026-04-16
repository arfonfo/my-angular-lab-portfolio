import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  softSkills = [
    'Trabajo en equipo y colaboración',
    'Escucha activa y empatía',
    'Aprendizaje continuo',
    'Adaptabilidad a entornos ágiles'
  ];
}