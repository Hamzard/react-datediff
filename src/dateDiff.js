export function dateDiffInDays(d1, d2) {

    // converts both dates into universal time
    var utc1 = Date.UTC(d1.get('year'), d1.get('month'), d1.get('date'))
    var utc2 = Date.UTC(d2.get('year'), d2.get('month'), d2.get('date'))
  
    // calculate difference in milliseconds and convert it into days
    return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24))
}
