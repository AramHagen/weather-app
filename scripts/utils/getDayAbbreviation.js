function getDayAbbreviation(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];  // Array of abbreviated weekdays
    const dayIndex = date.getUTCDay();
    return daysOfWeek[dayIndex];
}