import { Component ,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthData } from '../../core/services/auth-data';
import { Loader } from '../../components/loader/loader';


@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule,Loader],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Auth {

  email!:FormControl;
  password!:FormControl;
  loginData!:FormGroup;
  testEmail:string="test@testdev.com";
  testPassword:string="Test@1234";
  loading!:boolean;

  constructor(private _authServices:AuthData,private router:Router) {
    this.intiFormControl();
    this.initFormGroup();
   }

  intiFormControl(){
    this.email = new FormControl('',[Validators.required, Validators.email]);
    this.password = new FormControl('',[Validators.required, Validators.minLength(8)]);
  }
  initFormGroup(){
    this.loginData=new FormGroup({
      email:this.email,
      password:this.password
    });
  }

  submit(){
    this.loading = true
    if(this.loginData.valid){
      this._authServices.login(this.loginData.value).subscribe((res:any)=>{
        localStorage.setItem('userToken',res.token);
        this.loading = false
        this.router.navigate(['admin']);
      });
    }else{
      this.loginData.markAllAsTouched();
    }
  }

}
