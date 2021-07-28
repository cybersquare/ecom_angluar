// This class is a model for the login functionlity
export class Login{
//properties  
    private _username : string = "";
    private _password : string = "";
//constructor  
    // constructor(username:string, password:string){
    //     this._username = username;
    //     this._password = password;
    // }
//getters and setters
    public get username(){
        return this._username;
    }
    
    public set username(username:string){
        this._username = username
    }

    public get password(){
        return this._password;
    }
    
    public set password(password:string){
        this._password = password;
    }
}


