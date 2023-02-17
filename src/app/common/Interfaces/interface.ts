export interface header{
    image:string;
    alt:string;
    label:string;
}
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
export interface projectRoot{
    image:string
    blockType:string
}
