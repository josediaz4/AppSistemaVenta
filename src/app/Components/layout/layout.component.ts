import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingComponent } from './layout-routing.routes';
import { SharedModule } from '../../Reutilizable/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
