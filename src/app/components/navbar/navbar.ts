import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  private scrollService = inject(ScrollService);
  
  scrolled = signal(false);
  isMenuOpen = signal(false);

  sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' }
  ];

  constructor() {
    effect(() => {
      const handleScroll = () => {
        this.scrolled.set(window.scrollY > 50);
      };
      
      window.addEventListener('scroll', handleScroll);
      
      return () => window.removeEventListener('scroll', handleScroll);
    });
  }

  get activeSection() {
    return this.scrollService.activeSection();
  }

  scrollToSection(sectionId: string) {
    this.isMenuOpen.set(false);
    this.scrollService.scrollToSection(sectionId);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}