import { Observable } from "rxjs/Observable";
import { Response } from "@angular/http";

export class ErrorHandler{
    static handleError(error:Response|any){
        let errMsg:string;
        if(error instanceof Response){
            errMsg = `Erro ${error.status} ao obter a URL ${error.url} - ${error.status}`;
        }else{
            errMsg = error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}