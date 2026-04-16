import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { ExternalLink, FolderGit2, LUCIDE_ICONS, LucideIconProvider, MapPin } from 'lucide-angular';
import { Menu, X, User, Mail, Phone, Github, Linkedin, Code, Briefcase, GraduationCap } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    {
      provide: LUCIDE_ICONS,
      useValue: new LucideIconProvider({ Menu, X, User, Mail, Phone, Github, Linkedin, Code, Briefcase, GraduationCap, FolderGit2, ExternalLink, MapPin })
    }
  ]
};
