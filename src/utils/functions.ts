export const convertMeterInKM = (value: number | undefined) => {
    //convert meter per second in km per hour
    if(value === undefined) return ''

    return (value * 3.6).toFixed(2)
}