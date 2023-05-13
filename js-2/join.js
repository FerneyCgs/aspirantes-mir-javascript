function join(arr) {
    if (arr.length === 0) {
    return "";
    }
    let result = "" + arr[0];
    for (let i = 1; i < arr.length; i++) {
    result += " " + arr[i];
    }
    return result;
}







