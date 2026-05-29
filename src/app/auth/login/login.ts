import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [CardModule, FloatLabelModule, ButtonModule, RouterLink,],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
