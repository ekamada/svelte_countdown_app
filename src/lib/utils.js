

export function get_time_remaining(target_time) {
    let now = new Date().getTime()
    let difference = target_time-now
    
    // converting from ms to units that are easier to understand 
    const days    = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours   = Math.floor(difference % (1000 * 60 * 60 * 24)/(1000 * 60 * 60))
    const minutes = Math.floor(difference % (1000 * 60 * 60)/(1000 * 60))
    const seconds = Math.floor(difference % (1000 * 60 )/(1000))
    
    return days +"d : "+ hours +"h : "+ minutes +"m : "+ seconds + "s "
    // console.log(remaining)
        
}
