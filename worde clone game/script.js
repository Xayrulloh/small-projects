let height = 6, width = 5, row = 0, col = 0, gameOver = false;

let word = ['hello', 'world', "Aargh","Adieu","Adios","Alack","Aloha","Avast","Bakaw","Basta","Begad","Bless","Blige","Brava","Bravo","Bring","Chook","Damme","Dildo","Ditto","Frick","Fudge","Golly","Gratz","Hallo","Hasta","Havoc","Hella","Hello","Howay","Howdy","Hullo","Huzza","Jesus","Kapow","Loose","Lordy","Marry","Mercy","Night","Plonk","Psych","Quite","Salve","Skoal","Sniff","Sooey","There","Thiam","Thwap","Tough","Twirp","Viola","Vivat","Wacko","Wahey","Whist","Wilma","Wirra","Woops","Wowie","Yecch","Yeeha","Yeesh","Yowch","Zowie",'Abaft','Aboon','About','Above','Adown','Afore','After','Along','Aloof','Among','Below','Circa','Cross','Furth','Minus','Neath','Round','Since','Spite','Under','Until','Abuse','Adult','Agent','Anger','Apple','Award','Basis','Beach','Birth','Block','Blood','Board','Brain','Bread','Break','Brown','Buyer','Cause','Chain','Chair','Chest','Chief','Child','China','Claim','Class','Clock','Coach','Coast','Court','Cover','Cream','Crime','Cross','Crowd','Crown','Cycle','Dance','Death','Depth','Doubt','Draft','Drama','Dream','Dress','Drink','Drive','Earth','Enemy','Entry','Error','Event','Faith','Fault','Field','Fight','Final','Floor','Focus','Force','Frame','Frank','Front','Fruit','Glass','Grant','Grass','Green','Group','Guide','Heart','Henry','Horse','Hotel','House','Image','Index','Input','Issue','Japan','Jones','Judge','Knife','Laura','Layer','Level','Lewis','Light','Limit','Lunch','Major','March','Match','Metal','Model','Money','Month','Motor','Mouth','Music','Night','Noise','North','Novel','Nurse','Offer','Order'
,'Other','Owner','Panel','Paper','Party','Peace','Peter','Phase','Phone','Piece','Pilot','Pitch','Place','Plane','Plant','Plate','Point','Pound','Power','Press','Price','Pride','Prize','Proof','Queen','Radio','Range','Ratio','Reply','Right','River','Round','Route','Rugby','Scale','Scene','Scope','Score','Sense','Shape','Share','Sheep','Sheet','Shift','Shirt','Shock','Sight','Simon','Skill','Sleep','Smile','Smith','Smoke','Sound','South','Space','Speed','Spite','Sport','Squad','Staff','Stage','Start','State','Steam','Steel','Stock','Stone','Store','Study','Stuff','Style','Sugar','Table','Taste','Terry','Theme','Thing','Title','Total','Touch','Tower','Track','Trade','Train','Trend','Trial','Trust','Truth','Uncle','Union','Unity','Value','Video','Visit','Voice','Waste','Watch','Water','While','White','Whole','Woman','World','Youth','Alcon','Aught','Hella','One’s','Ought','Thame','There','Thine','Thine','Where','Which','Whose','Whoso','Yours','Yours','Admit','Adopt','Agree','Allow','Alter','Apply','Argue','Arise','Avoid','Begin','Blame','Break','Bring','Build','Burst','Carry','Catch','Cause','Check','Claim','Clean','Clear','Climb','Close','Count','Cover','Cross','Dance','Doubt'
,'Drink','Drive','Enjoy','Enter','Exist','Fight','Focus','Force','Guess','Imply','Issue','Judge','Laugh','Learn','Leave','Let’s','Limit','Marry','Match','Occur','Offer','Order','Phone','Place','Point','Press','Prove','Raise','Reach','Refer','Relax','Serve','Shall','Share','Shift','Shoot','Sleep','Solve','Sound','Speak','Spend','Split','Stand','Start','State','Stick','Study','Teach','Thank','Think','Throw','Touch','Train','Treat','Trust','Visit','Voice','Waste','Watch','Worry','Would','Write','Above','Acute','Alive','Alone','Angry','Aware','Awful','Basic','Black','Blind','Brave','Brief','Broad','Brown','Cheap','Chief','Civil','Clean','Clear','Close','Crazy','Daily','Dirty','Early','Empty','Equal','Exact','Extra','Faint','False','Fifth','Final','First','Fresh','Front','Funny','Giant','Grand','Great','Green','Gross','Happy','Harsh','Heavy','Human','Ideal','Inner','Joint','Large','Legal','Level','Light','Local','Loose','Lucky','Magic','Major','Minor','Moral','Naked','Nasty','Naval','Other','Outer','Plain','Prime','Prior','Proud','Quick','Quiet','Rapid','Ready','Right','Roman','Rough','Round','Royal','Rural','Sharp','Sheer','Short','Silly','Sixth','Small','Smart','Solid','Sorry','Spare','Steep','Still','Super','Sweet','Thick','Third','Tight','Total','Tough','Upper','Upset','Urban','Usual','Vague','Valid','Vital','White','Whole','Wrong','Young','Afore','After','Bothe','Other','Since','Slash','Until','Where','While','Aback','Abaft','Aboon'
,'About','Above','Accel','Adown','Afoot','Afore','Afoul','After','Again','Agape','Agogo','Agone','Ahead','Ahull','Alife','Alike','Aline','Aloft','Alone','Along','Aloof','Aloud','Amiss','Amply','Amuck','Apace','Apart','Aptly','Arear','Aside','Askew','Awful','Badly','Bally','Below','Canny','Cheap','Clean','Clear','Coyly','Daily','Dimly','Dirty','Ditto','Drily','Dryly','Dully','Early','Extra','False','Fatly','Feyly','First','Fitly','Forte','Forth','Fresh','Fully','Funny','Gaily','Gayly','Godly','Great','Haply','Heavy','Hella','Hence','Hotly','Icily','Infra','Intl.','Jildi','Jolly','Laxly','Lento','Light','Lowly','Madly','Maybe','Never','Newly','Nobly','Oddly','Often','Other','Ought','Party','Piano','Plain','Plonk','Plumb','Prior','Queer','Quick','Quite','Ramen','Rapid','Redly','Right','Rough','Round','Sadly','Secus','Selly','Sharp','Sheer','Shily','Short','Shyly','Silly','Since','Sleek','Slyly','Small','So-So','Sound','Spang','Srsly','Stark','Still','Stone','Stour','Super','Tally','Tanto','There','Thick','Tight','Today','Tomoz','Truly','Twice','Under','Utter','Verry','Wanly','Wetly','Where','Wrong','Wryly'];
word = word[(Math.random() * word.length) | 0].toUpperCase()

window.onload = function(){
    intialize();
}
function intialize() {
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement('span')
            tile.id = r.toString() + '-' + c.toString()
            tile.classList.add('tile')
            tile.innerText = ''
            document.getElementById('board').appendChild(tile)
        }
    }

    document.addEventListener("keyup", (e) => {
        if (gameOver) return; 

        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < width) {
                let currTile = document.getElementById(row.toString() + '-' + col.toString());
                if (currTile.innerText == "") {
                    currTile.innerText = e.code[3];
                    col += 1;
                }
            }
        }
        else if (e.code == "Backspace") {
            if (0 < col && col <= width) col -=1;
            
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            currTile.innerText = "";
        }

        else if (e.code == "Enter") {
            update();
            row += 1; //start new row
            col = 0; //start at 0 for new row
        }


        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = `man oylagan soz ${word} idi topomadisku`;
        }

    })
}


function update() {
    let correct = 0, str = ''
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString()), letter = currTile.innerText;
        str += letter
        if (word[c] == letter) {
            currTile.classList.add("correct");
            correct += 1;
        } 
        else if (word.includes(letter)) currTile.classList.add("present");
        else currTile.classList.add("absent");
        if (correct == width) gameOver = true;
    }
    str == word ? document.getElementById("answer").innerText = `gap yo topib qoydisku` : ''
}