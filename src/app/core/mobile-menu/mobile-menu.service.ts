import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MobileMenuService {
  isMenuOpen = signal(false);

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  openMenu() {
    this.isMenuOpen.set(true);
  }
}
