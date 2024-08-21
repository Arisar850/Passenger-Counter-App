let count = 0

function increment(){
    count+=1
    document.getElementById('count').innerText = count
}

function save(){
    document.getElementById('pre-count').innerText += ' ' +  count + ' - '
    document.getElementById('count').innerText = count = 0
}