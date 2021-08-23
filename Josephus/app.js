const showOnPage = function(text, type) { 
    if ((typeof process !== 'undefined') && 
    (process.release.name.search(/node|io.js/) !== -1)) {
    } else {
        if(type == 1){
            let newParagraph = document.createElement("p")
            newParagraph.innerHTML = text
            let outputDiv = document.getElementById("output")
            outputDiv.append(newParagraph)
        }else if(type == 2) {
            let newParagraph = document.createElement('strong')
            newParagraph.innerHTML = text
            let outputDiv = document.getElementById("output")
            outputDiv.append(newParagraph)
        } else if(type == 3) {
            let newParagraph = document.createElement('hr')
            let outputDiv = document.getElementById("output")
            outputDiv.append(newParagraph)
        }
    }
}

let josephus = {
    display: function (knight, skips, start) {
        console.log(`This is using ${knight} knights, ${skips+1} with skips, starting at (index) knight ${start}`)
        showOnPage(`This is using ${knight} knights, ${skips+1} with skips, starting at (index) knight ${start}`,2)

    },
    line: function () {
        console.log("+==================+")
        showOnPage('',3)
    },
    solution: function (knight, skips, start) {
        //Declarations
        this.display(knight, skips, start)
        let data = []
        if(knight < 2){
            console.log(`${knight} IS INVAILD NUMBER OF KNIGHTS! PLEASE USE USE VALUE GREATER THAN 0!`)
            showOnPage(`${knight} IS INVAILD NUMBER OF KNIGHTS! PLEASE USE USE VALUE GREATER THAN 0!`, 1)
        }
        if (skips < 0) {
            console.log(`${skips} IS INVAILD NUMBER OF SKIPS! PLEASE USE USE VALUE GREATER THAN 0!`)
            showOnPage(`${skips} IS INVAILD NUMBER OF SKIPS! PLEASE USE USE VALUE GREATER THAN 0!`, 1)
        }
        if (start < 0) {
            console.log(`${start} IS INVAILD NUMBER FOR START! PLEASE USE POSTIVE NUMBERS`)
            showOnPage(`${start} IS INVAILD NUMBER FOR START! PLEASE USE POSTIVE NUMBERS`, 1)
        }
        start = start % knight
        //Generation code
        for(let i = 0; i < knight; i++) {
            data.push(i)
        }
        //Start
        let iterator = 0
        iterator = start
        console.log(`Eliminated knight: ${data[iterator]}`)
        showOnPage(`Eliminated knight: ${data[iterator]}`, 1)
        data.splice(iterator, 1)
        //Repeats
        while (data.length != 1) {
            for(let i = 0; i < skips; i++){
                iterator += 1 
                //loop around check
                if(iterator == data.length) {
                    iterator = 0
                }
            }
            console.log(`Eliminated knight: ${data[iterator]}`)
            showOnPage(`Eliminated knight: ${data[iterator]}`, 1)
            data.splice(iterator, 1)
            //loop around check
            if(iterator == data.length) {
                iterator = 0
            }
            if (data.length == 1) {
                break;
            }
        }
        console.log(`Winning knight is a index: ${data[0]}`)
        showOnPage(`Winning knight is a index: ${data[0]}`, 2)
        this.line();
    }
} 


josephus.solution(2,23,47)
josephus.solution(14, 1, 0)
josephus.solution(11,2,1)