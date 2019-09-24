type resIf = {
    id: number,
    date: string,
    day: string,
    hour: string,
    period: string,
    addressOne: string,
    addressTwo: string,
    cost: string,
    number: string
}

export default (dat:any) => {
    let result: resIf[] = []
     dat.map((el:any, index:string) => {
         
        let date:string = `${el.date[8]}${el.date[9]}`;
        let h:any = parseInt(`${el.time[0]}${el.time[1]}`)
        let minute:string = `${el.time[3]}${el.time[4]}`
        let period:string = ''
        let id: number = el.id
        let number: string = el.number
        let cost: string = el.cost
        let addressOne: string = el.addressOne
        let addressTwo: string = el.addressTwo
        let day: string = el.day
        let hour: string

         if(h > 12){
            period = 'PM'
            hour = (h-12).toString()
        }else{
            period ='AM'
            hour = h.toString()
        }
        hour = `${hour}:${minute}`
        result.push({
            id: id,
            date: date,
            day: day,
            hour: hour,
            period: period,
            addressOne: addressOne,
            addressTwo: addressTwo,
            cost: cost,
            number: number
        }) 
        return result
    })
    
    return result
}