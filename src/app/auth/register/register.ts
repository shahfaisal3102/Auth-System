import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-register',
  imports: [CardModule, FloatLabelModule,ButtonModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {}
