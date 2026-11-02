import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  roles: string[] = ['MERN Stack Developer', 'Angular Specialist', 'Frontend Engineer', 'FullStack Developer'];
  currentRole: string = '';
  private roleIndex: number = 0;
  private charIndex: number = 0;
  private isDeleting: boolean = false;
  private timer: any;

  // ChangeDetectorRef inject karein
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    const current = this.roles[this.roleIndex];
    
    if (this.isDeleting) {
      this.currentRole = current.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentRole = current.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    // Angular ko batane ke liye ke variable change hua hai screen update karo
    this.cdr.detectChanges();

    let speed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === current.length) {
      speed = 2000; // Poora word type hone ke baad pause
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      speed = 500;
    }

    this.timer = setTimeout(() => this.typeEffect(), speed);
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }
}