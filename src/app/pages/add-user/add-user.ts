import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataServices } from '../../core/services/dataServices/data-services';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss'
})
export class AddUser {
    name! :FormControl;
    email! :FormControl;
    password! :FormControl;
    rePassword !: FormControl;
    phone !: FormControl;
    allData!:FormGroup;

    constructor(private dataService:DataServices) {
      this.generateFormControl();
      this.generateFormGroup();
    }


    generateFormControl(){
      this.name = new FormControl('',[Validators.required, Validators.minLength(3)]);
      this.email = new FormControl('',[Validators.required, Validators.email]);
      this.password = new FormControl('',[Validators.required, Validators.minLength(6),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]);
       this.rePassword = new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
        this.matchPassword(this.password)
      ]);
        this.phone = new FormControl('' ,  [
        Validators.required,
        Validators.pattern(/^01[0-2,5][0-9]{8}$/)
      ]);
    }

    generateFormGroup(){
      this.allData = new FormGroup({
      name :this.name,
      email :this.email,
      password :this.password,
      rePassword :this.rePassword,
      phone :this.phone,
      });
    }

      matchPassword (pass :AbstractControl){
    return (rePass : AbstractControl) =>{
    if(pass.value !== rePass.value){
      return { matchPassword:true }
    }
    else{
      return null
    }
    }
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
            console.log( err.error.message);

            alert(err.error.message);
         }
        })
      }

      console.log(this.allData.value);
    }
}
