// code your solution here
function superbowlWin(array){const win = array.find(({result}) => result === "W");
    if(win){
        return win.year;
    }
    else{
        return undefined;
    }
}
