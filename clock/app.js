setInterval(() =>{
    const showDay = document.getElementById('day')
    const month = document.getElementById('month')
    const todayNum = document.getElementById('date')

    date = new Date();
    
    let dayNum = date.getDate()
    let day = date.getDay();
    let presentMonth = date.getMonth();
    let hour = date.getHours();
    
    let  minute = date.getMinutes();
    if(minute <= 9){
        minute = `0${minute}`
    }

    let second = date.getSeconds();
    if(second <= 9){
        second = `0${second}`
    }

    const hours = document.getElementById('hour').innerHTML = `${hour} :`
    const minutes = document.getElementById('minutes').innerHTML = minute
    const seconds = document.getElementById('seconds').innerHTML = second

    // Am OR Pm
    if(hours < 12){
        document.getElementById('period').innerHTML = 'am';
    } else{
        document.getElementById('period').innerHTML = 'pm';
    }


    let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    let weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    showDay.innerHTML = weekDays[day]

    month.innerHTML = months[presentMonth]

    todayNum.innerHTML = dayNum

}, 1000); 