import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
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
  public product: Product;
  isError: boolean = false;
  mensajeError: string = "";
  status: boolean;  
  public urlImage: string;
  public idProduct: string;

  public filesToUpload: Array<File>;

  constructor(private route: ActivatedRoute, 
    private productService: ProductService,
    private router: Router,
    private uploadService: UploadService){
      this.title = "Actualizar datos del producto."
      this.urlImage = `${environment.URL_API}/product`;
    }

    ngOnInit(){
      console.log("Componete registrar iniciado...");
      this.getProductById();
    }
    getProductById(){
      this.route.params.forEach((params: Params) => {
        this.idProduct = params['id'];
        if(!this.idProduct){
          this.router.navigateByUrl('/productos/listado');
        }
        this.productService.getProductById(this.idProduct).subscribe(res => {
          this.product = res;
        },
        err =>{
          console.log(err);
        })
      })      
    }
    guardar(){
      this.mensajeError = '';
      this.isError = false;
      this.productService.updateProduct(this.product).subscribe(res => {
        if(!res._id){
          this.isError = true;
        }else{
          this.status = true;
          if(!this.filesToUpload){
            this.router.navigate(['/productos/detalle', this.product._id]);
          }else{
            this.uploadService.makeFileRequest('product/upload-image-product', this.idProduct,[], this.filesToUpload, 'image')
            .then((res: Product) => {
              this.product.image = res.image;
              this.router.navigate(['/productos/detalle', this.product._id]);
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