export class AppDomain {
  
   SERVER_DOMAIN: string = "localhost:8080/api/v1";


  getImagesUrl(): string {
    return this.SERVER_DOMAIN + "/images"; 
  }
  
}
