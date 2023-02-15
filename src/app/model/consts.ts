
export interface Alert{
    alert:string;
    question:string;
    label:string;
    content:string;
    descr:Array<string>;
}

export interface Toast{
    type:string;
    msg:string;
    time:number;
}