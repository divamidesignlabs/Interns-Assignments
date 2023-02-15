export interface AlertInterface{
    Optiontype:string;
    question:string;
    label:string;
    decription:string;
    description_points:Array<string>;
}
export interface Toast{
    type:string;
    msg:string;
}