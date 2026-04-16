import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  activeSection = signal<string>('inicio');
  private sections = ['inicio', 'sobre-mi', 'habilidades', 'experiencia', 'proyectos', 'contacto'];

  constructor() {
    this.setupScrollListener();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private setupScrollListener() {
    const checkSection = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if(scrollPosition + windowHeight >= documentHeight - 10) {
        this.activeSection.set(this.sections[this.sections.length - 1]);
        return;
      }

      for (const sectionId of this.sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollY >= top && scrollY < top + height) {
            this.activeSection.set(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', checkSection);
    window.addEventListener('resize', checkSection);
    setTimeout(checkSection, 100);
  }
}
