 export const valid = (title,adress) => {

    // navbar validator

    if(!title || !adress)
    return "You have to fill all inputs"

    if(title.length > 15 || adress.length < 0 )
    return "Validation Error"

}

export const aboutvalid = (name,job,description) => {
    // About Page validator

    if(name.length > 30 || job.length > 30 || description.length > 200)
    return "Validation Error"
    
    if(!name || !job || !description)
    return "Please fill all inputs"
}