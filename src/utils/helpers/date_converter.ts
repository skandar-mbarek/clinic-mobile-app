
type DateFormats =  {
    format : "yy-mm-dd"
}


export   default function  dateFormater (date : Date , format : "yy-mm-dd" | "dd-mm-yy")  {
    let day =  date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    return `${year}-${month}-${day}`
}