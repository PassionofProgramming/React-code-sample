export default class path {

    // static environment = "dev";
    // static environment = "prod";
    static baseUrl = "http://23.92.29.110:3000/api/v1";
    static localbaseUrl = "http://192.168.100.30:3000/api/v1";
    // this.environment === "dev" ? "" :

    //authentication URL
    static SIGNUP = //path.localbaseUrl + "/users"; // POST  
        path.baseUrl + "/users"; // POST 
    static LOGIN =  //path.localbaseUrl + "/auth/local" // POST 
        path.baseUrl + "/auth/local"; // POST
    static PASSWORDRECOVERY =  //path.localbaseUrl + "/recovery/password"; 
        path.baseUrl + "/recovery/password"; // POST
    static STEPTWO = //path.localbaseUrl + "/patient_preferences";
        path.baseUrl + "/patient_preferences";
    static ADDEXERCISE = //path.localbaseUrl + "/exercises"; // POST
        path.baseUrl + "/exercise" // POST
    static EXERCISELOG = //path.localbaseUrl + "/exercise_log";    //POST
        path.baseUrl + "/exercise" // POST
    static FAVORITE = //path.localbaseUrl + "/favorite"; // GET
        path.baseUrl + "/favorite" // GET
} 