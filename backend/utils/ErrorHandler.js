class ErrorHandler extends Error {
    constructor(message,ststusCode){
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this,this.constuctor);
    }
}

module.exports=ErrorHandler;