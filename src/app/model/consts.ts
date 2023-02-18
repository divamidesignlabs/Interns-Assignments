
export interface Alert{
    alert:string;
    question:string;
    label:string;
    content:string;
    descr:Array<string>;
}

export interface Toast{
    type: 'success' | 'error' | 'info';
    msg:string;
    time:number;
}
export interface UserDetails{
    id:number;
    name:string;
    mail:string;
    phoneNo:string;
}