export interface AlertInfo{
    label:string,
    toConfirmMessage:string,
    content:string,
    looseAccessOver:string[],
    alertType:string[],
}

export interface tabsInfo
{
    tabNames:string[];
}

export interface toastInfo
{
    toastType:string,
    messagetoDisplay:string,
    toastDisplayTime:number
}

export interface containerInfo
{
    imgSrc:string,
    contentoDisplay:string;
}