export interface notify{
    nameType:string,
    confirmation:string,
    nameOf:string,
    unableTo:string,
    unableData:Array<string>,
    button1:string,
    button2:string
}

export interface tabsLabel{
    label:string
}

export interface toast{
    toastTitle:string,
    toastMessage:string,
    toastTime:number
}

export interface projectStat{

    imgSrc:string,
    projectContext:string
}