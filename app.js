function pdromOneLineButNotFast(str) {
    str = str.replace(' ', '')

    let reversed = str.split('').reverse().join('')

    return reversed == str


}


function pdromLongerButBetter(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        let start = str[i]
        let end = str[str.length - 1 - i]

        if (start != end) {
            return false
        }
    }
    return true
}