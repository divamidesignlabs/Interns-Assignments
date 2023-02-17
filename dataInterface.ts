export interface dataInterface{
    [key:string]:string,
    id:string,
    name:string,
    age:string,
    gender:string
}
export interface popupInterface{
    alertImg?:string,
    heading?:string,
    question?:string,
    userName?:string,
    confirmation?:string,
    list?:Array<string>,
    buttons?:Array<string>
    
  }