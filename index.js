const form = document.getElementById("form");
const answer = document.getElementById("answer")
const submit = document.getElementById("submit");

/*let randomNum = Math.floor(Math.random() * 1000);
let correctNum = randomNum.toString().padStart(3, '0');
console.log(correctNum);
let firstCharacter = correctNum.charAt(0);
let secondCharacter = correctNum.charAt(1);
let thirdCharacter = correctNum.charAt(2);

//回答回数
index = 0;*/

//答えの作成
let randomNum = Math.floor(Math.random() * 1000);
let correctNum = randomNum.toString().padStart(3, '0');
console.log(correctNum);
let firstCharacter = correctNum.charAt(0);
let secondCharacter = correctNum.charAt(1);
let thirdCharacter = correctNum.charAt(2);

//回答回数
index = 0;

//
form.addEventListener("submit",(e)=>{
    e.preventDefault(); // ページのリロードを防ぐ
    
    let bite = 0;
    let eat = 0;

    const num = answer.value;
    console.log(num);
    index++;

    const afirstCharacter = num.charAt(0);
    const asecondCharacter = num.charAt(1);
    const athirdCharacter = num.charAt(2);


    if(num === correctNum){
        alert(`正解!回答数は${index}回！`);
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(paragraphs =>{
            paragraphs.remove();
        });
        // ページをリロード
        location.reload();    
    }else{
        if(afirstCharacter === firstCharacter){
            eat+=1;
        }
        if(afirstCharacter === secondCharacter || afirstCharacter === thirdCharacter){
            bite+= 1;
        }
        if(asecondCharacter === secondCharacter){
            eat+=1;
        }
        if(asecondCharacter === thirdCharacter || asecondCharacter === firstCharacter){
            bite+=1;
        }
        if(athirdCharacter === thirdCharacter){
            eat+=1;
        }
        if(athirdCharacter === secondCharacter || athirdCharacter === firstCharacter){
            bite+=1;
        }
        
        let historyLog = document.getElementById("historyLog");
        let history = document.createElement("p");
        history.textContent = `${num} b:${bite} e:${eat}`;
        console.log(history);
        historyLog.appendChild(history);
        
    }
    form.reset();
});

//memo


