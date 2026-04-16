import { Component } from '@angular/core';
import { LucideAngularModule, Mail, Phone, Github, Linkedin, MapPin } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {}
