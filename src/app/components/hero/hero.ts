import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  private scrollService = inject(ScrollService);

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}