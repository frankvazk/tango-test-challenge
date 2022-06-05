import { Request, Response } from "express";

const success = ( req : Request , res : Response, message :  string, status : number ) => {
    res.status( status || 200 ).send({
        error:'',
        body: message
    });
};

const error = ( req : Request , res : Response, message : string, status : number ) => {
    res.status( status || 500 ).send({
        error: message,
        body: ''
    })
};

export {
    success,
    error
}
