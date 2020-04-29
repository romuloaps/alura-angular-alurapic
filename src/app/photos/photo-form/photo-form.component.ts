import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UploadedPhoto } from '../photo/uploaded-photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ["", Validators.required],
      description: ["", Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  upload(): void {
    const uploadedPhoto: UploadedPhoto = {
      description: this.photoForm.get("description").value,
      allowComments: this.photoForm.get("allowComments").value,
      file: this.file
    };
    
    this.photoService
      .upload(uploadedPhoto)
      .subscribe(() => this.router.navigate([""])
    );
  }

  handleFile(file: File): void {
    this.file = file;

    const fileReader = new FileReader();
    fileReader.onload = (event: any) => this.preview = event.target.result;
    fileReader.readAsDataURL(file);
  }
}
