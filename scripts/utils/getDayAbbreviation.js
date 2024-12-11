function getDayAbbreviation(dateString = undefined) {
    const date = dateString ? new Date(dateString) : new Date();
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];  // Array of abbreviated weekdays
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}