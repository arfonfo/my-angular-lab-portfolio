import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { SkillCategory } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skillCategories: SkillCategory[] = [
    {
      category: 'Backend',
      skills: [
        { name: 'Java', level: 80 },
        { name: 'SQL', level: 75 }
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'Vue.js', level: 70 }
      ]
    },
    {
      category: 'Tools & Design',
      skills: [
        { name: 'Pentaho', level: 70 },
        { name: 'Figma', level: 65 }
      ]
    }
  ];
}