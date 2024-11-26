import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'home';
  constructor(
    private router: Router,
  ) {}

  onSubmitAbout() {
    this.router.navigate(['/about'])
  }

  onSubmitProducts() {
    this.router.navigate(['/product'])
  }

  slideIndex: number = 1;

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  // Next/previous controls
  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("demo") as HTMLCollectionOf<HTMLElement>;
    const captionText = document.getElementById("caption");

    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1 ) { this.slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[this.slideIndex -1]) {
      slides[this.slideIndex - 1].style.display = "block";
    }

    if (dots[this.slideIndex - 1]) {
      dots[this.slideIndex - 1].className += " active";
    }
    
    if (captionText && dots[this.slideIndex -1]) {
      captionText.innerHTML = (dots[this.slideIndex -1] as HTMLElement).getAttribute('alt') || '';
    }
  }
}