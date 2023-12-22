import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import {MatInputModule} from "@angular/material/input"
import {MatButtonModule} from '@angular/material/button'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatInputModule,MatButtonModule,MatCheckboxModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
