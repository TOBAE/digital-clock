setInterval(() =>{
    const week = document.getElementById('week')
    const month = document.getElementById('month')
    const today = document.getElementById('day')

    date = new Date();
    
    let hour = date.getHours();

    if(hour >= 12){
        document.getElementById('period').innerHTML = 'PM';
    }else{
        document.getElementById('period').innerHTML = 'AM';
    }
    
    let  minute = date.getMinutes();
    if(minute <= 9){
        minute = `0${minute}`
    }

    let second = date.getSeconds();
    if(second <= 9){
        second = `0${second}`
    }

    let currentDate = date.getDate();
    let currentWeekDay = date.getDay();
    let currentMonth = date.getMonth();
    
    document.getElementById('hour').innerHTML = `${hour} :`
    document.getElementById('minutes').innerHTML = minute
    document.getElementById('seconds').innerHTML = second


    let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    let weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    week.innerHTML = weekDays[currentWeekDay]

    month.innerHTML = months[currentMonth]

    today.innerHTML = currentDate

}, 1000); 