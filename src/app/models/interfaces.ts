// model model for alert tab component
export interface Alert{
    alert_type:string,
    label:string,
    toConfirmMessage:string,
    content:string,
    rightsGoingToLoss:string[]
}

// model for common tab component
export interface TabHorizontalItems{
    item:string,
    isSelected:boolean
}

// model for common toast component
// timeout in milliseconds (eg: 5000 means 5 seconds)
export interface Toast{
    msg:string;
    type: "" | "success" | "error" | "info" ;
    timeout:number
    
}

//model for common data table common
export interface TableData{
    columnNames?:string[],
    rowData:Array<Object> | string;
}

// model for common card component

export interface Card{
    image_path:string,
    title:string
}


