// HighOrderFunction -> A function Which take another function as an arguument or return a function from it

function callbacFunction(){
    console.log('I am a callback function')
}

// callbacFunction()

//High order function
function highOrderFunction(func){
    console.log("I am a High order Function")
    func()
}

highOrderFunction(callbacFunction)

