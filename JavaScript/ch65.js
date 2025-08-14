function compareDates(date1, date2) {
    if (date1.getTime() === date2.getTime()) return "Equal";
    return date1 < date2 ? "Before" : "After";
}
