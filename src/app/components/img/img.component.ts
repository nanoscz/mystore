import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  @Output() loaded = new EventEmitter<string>();
  @Input() image!: string|null;
  imageLoading= 'https://via.placeholder.com/200x200?text=Default';
  imageError= 'https://via.placeholder.com/200x200?text=Error+image';
  constructor() { }

  ngOnInit(): void {
  }

  onImageError(): void {
    this.image = this.imageError;
  }

  onLoadImage(): void {
    this.loaded.emit(this.imageError)
  }
}
