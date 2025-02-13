import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'custom-button',
  imports: [
    NgClass
  ],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})

export class CustomButtonComponent {
  type = input<'white' | 'green'>('green');
  text = input.required<string>();
}
