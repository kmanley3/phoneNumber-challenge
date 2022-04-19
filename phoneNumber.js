// const phoneNumber = ["(",")", " ", "-"]

// const createPhoneNumber = arr =>{
//     arr.unshift(phoneNumber[0])
//     arr.splice(4,0,phoneNumber[1])
//     // console.log(arr)
//     arr.splice(5,0,phoneNumber[2])
//     arr.splice(9,0,phoneNumber[3])
//     return arr.join('')
// }


const createPhoneNumber = arr =>{
    let format = "(xxx) xxx-xxxx"
    for(let i = 0; i<arr.length; i++){
        format = format.replace('x', arr[i])
    }
    return format
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))