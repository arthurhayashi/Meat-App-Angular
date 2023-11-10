export class User{
    constructor(public email:string,
                public name:string,
                private password:string){   }
    matches(another:User):boolean{
        return another !== undefined &&
         another.email == this.email &&
         another.password == this.password
    }
}

export const users: {[key:string]:User}={
    "jul@gmail.com":new User('jul@gmail.com','juliana','j12'),
    "art@gmail.com":new User('art@gmail.com','arthur','12345'),
}