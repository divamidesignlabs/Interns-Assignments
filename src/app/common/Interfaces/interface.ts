export interface Alert{
    alert?:string;
    question:string;
    label?:string;
    content?:string;
    description?:Array<string>;
}
export interface tabLabels{
    label:string;

}
export interface toast{
    image:string;
    status:string;
    message:string;

}