// This class is a model for the login functionlity
export class Login{
//properties  
    private userName : string = "";
    private userPassword : string = "";
//constructor  
    // constructor(username:string, password:string){
    //     this._username = username;
    //     this._password = password;
    // }
//getters and setters
    public get username(){
        return this.userName;
    }
    
    public set username(username:string){
        this.userName = username
    }

    public get password(){
        return this.userPassword;
    }
    
    public set password(password:string){
        this.userPassword = password;
    }
}


