import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { fadeIn } from '../../../components/animation';
import { UploadService } from '../../../services/upload.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'admin-edit',
  templateUrl: './edit.component.html',
  animations:[
    fadeIn
  ]
})
export class EditComponent implements OnInit{
  
  public title:string;
  public user: User;
  isError: boolean = false;
  mensajeError: string = "";
  status: boolean;
  roles = [
    { name: 'administrador'},
    { name: 'usuario'},
    ];    
  public urlImage: string;
  public idUser: string;

  public filesToUpload: Array<File>;

  constructor(private route: ActivatedRoute, 
    private userService: UserService,
    private router: Router,
    private uploadService: UploadService){
      this.title = "Actualizar datos del usuario."
      this.urlImage = `${environment.URL_API}/user/`;
    }

    ngOnInit(){
      console.log("Componete registrar iniciado...");
      this.getUsuarioById();
    }
    getUsuarioById(){
      this.route.params.forEach((params: Params) => {
        this.idUser = params['id'];
        if(!this.idUser){
          this.router.navigateByUrl('/usuarios/listado');
        }
        this.userService.getUsuarioById(this.idUser).subscribe(res => {
          this.user = res;
        },
        err =>{
          console.log(err);
        })
      })      
    }
    guardar(){
      this.mensajeError = '';
      this.isError = false;
      this.userService.updateUser(this.user).subscribe(res => {
        if(!res._id){
          this.isError = true;
        }else{
          this.status = true;
          if(!this.filesToUpload){
            this.router.navigate(['/usuarios/detalle', this.user._id]);
          }else{
            this.uploadService.makeFileRequest(this.idUser,[], this.filesToUpload, 'image')
            .then((res: User) => {
              this.user.image = res.image;
              this.router.navigate(['/usuarios/detalle', this.user._id]);
            })
            .catch(err => {
              console.log(err);
            });
          }                   
        }        
      },
      err => {
        this.isError = true;
        if(err.error.status){
          this.mensajeError = `${err.error.status} : ${err.error.message}`;
        }else{
          this.mensajeError = `El servicio no se ecuentra disponible.`;
        } 
      })      
    }

    fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
    }
}