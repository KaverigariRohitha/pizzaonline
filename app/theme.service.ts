import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  setTheme(theme: string): void {
    // Remove existing theme classes
    document.body.classList.remove('light-theme', 'dark-theme');

    // Add the selected theme class
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }
}