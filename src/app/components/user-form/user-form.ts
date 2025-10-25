import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataServices } from '../../core/services/dataServices/data-services';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss'
})
export class UserForm {

    fName! :FormControl;
    email! :FormControl;
    password! :FormControl
    allData!:FormGroup;
    
    constructor(private dataService:DataServices) {
      this.generateFormControl();
      this.generateFormGroup();
    }


    generateFormControl(){
      this.fName = new FormControl('',[Validators.required, Validators.minLength(3)]);
      this.email = new FormControl('',[Validators.required, Validators.email]);
      this.password = new FormControl('',[Validators.required, Validators.minLength(6),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]);
    }

    generateFormGroup(){
      this.allData = new FormGroup({
        fName: this.fName,
        email: this.email,
        password: this.password,
      });
    }


    submit(){
        this.allData.markAllAsTouched();
      if(this.allData.valid){
         this.dataService.addUser(this.allData.value).subscribe({
          next:(res)=>{
            alert("User Added Successfully");
            this.allData.reset();
          },
          error:(err)=>{
            alert("Something went wrong");
         }
        })
      }

      console.log(this.allData.value);
    }
}
