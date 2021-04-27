const getProperDate = (givenDate) => {
    const locale = 'en';
    const day = givenDate.toLocaleDateString(locale, { weekday: 'long' });
    const time = givenDate.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
    const newDate = `${day}: ${time}`
    return (newDate)
}

export default getProperDate;
