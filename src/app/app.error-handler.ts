import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from "@angular/common/http";

export class ErrorHandler{
    static handleError(error:HttpErrorResponse|any){
        let errMsg:string;
        if(error instanceof HttpErrorResponse){
            const body = error.error
            errMsg = `Erro ${error.status} ao obter a URL ${error.url} - ${body}`;
        }else{
            errMsg = error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}