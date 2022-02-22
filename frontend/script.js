function loadEvent(){

    const rootElement = document.getElementById("root")

    const days2022 = [
        {
            name: "January",
            number: 1,
            days: 31
        },

        {
            name: "February",
            number: 2,
            days: 28
        },

        {
            name: "March",
            number: 3,
            days: 31
        },

        {
            name: "April",
            number: 4,
            days: 30
        },

        {
            name: "May",
            number: 5,
            days: 31
        },

        {
            name: "June",
            number: 6,
            days: 30
        },

        {
            name: "July",
            number: 7,
            days: 31
        },

        {
            name: "August",
            number: 8,
            days: 31
        },

        {
            name: "September",
            number: 9,
            days: 30
        },

        {
            name: "October",
            number: 10,
            days: 31
        },

        {
            name: "November",
            number: 11,
            days: 30
        },

        {
            name: "December",
            number: 12,
            days: 31
        }
    ]

    
    for (const month of days2022) {

        console.log(month.name)
        
        let monthSection = ""

        let days =""

        for (let i = 1; i <= month.days; i++) {
            console.log(i);

            let twoDigitsMonthNumber = month.number.toString().padStart(2, "0");
            let twoDigitsDayNumber = i.toString().padStart(2, "0")

            days += `
            <div class="card">
                <time datetime="2022">2022</time>
                <time datetime="${twoDigitsMonthNumber}">${twoDigitsMonthNumber}</time>
                <time datetime="${twoDigitsDayNumber}">${twoDigitsDayNumber}</time>
            </div>
            `
            
        }
    
        console.log(days);

        monthSection += `
        <section id=${month.name}>${days}</section>
        `
        rootElement.insertAdjacentHTML("beforeend", monthSection)
    }
}

window.addEventListener("load", loadEvent);