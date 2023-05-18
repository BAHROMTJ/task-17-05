function detectWord(str) {
	return str.match( /[a-z]/g).join("")
}



function potatoes(str) {
	return str.match(/potato/g).length
}


function charCount(myChar, str) {
	return str.split("").filter(a=>a==myChar).length
}


function fixImport(s) {4
    let atr=[]
    let b= s.split(" ")
    atr.push(b[2],b[3],b[0],b[1])
    return atr.join(" ")
    }



    function sortDrinkByPrice(drinks) {
        return drinks.sort((a,b)=>a.price-b.price)
    }



function testJackpot(result) {
	return result.every((a,b) =>a==result[0] )
}



function tuckIn(arr1, arr2) {
    let b=[arr1[0], ...arr2,arr1[1] ]
    return b
}



function calculateDifference(obj, limit) {
    return	Object.values(obj).reduce((a,b)=>a+b)-limit
    }




    function isAvgWhole(arr) {
        return Number.isInteger(arr.reduce((a,b)=>a+b)/arr.length)
    }


    function getAbsSum(arr) {
        return arr.length==1?Math.abs(arr[0]) :arr.reduce((a,b)=>Math.abs(a)+Math.abs(b))
    }



    const str = `({ one=1, two } = { two : 2 }).toString()`




    function nSidedShape(n) {
        let obj={
    1:"circle",
    2:	"semi-circle",
    3:	"triangle",
    4	:"square",
    5	:"pentagon",
    6	:"hexagon",
    7	:"heptagon",
    8	:"octagon",
    9	:"nonagon",
    10	:"decagon",
            
        }
        return obj[n]
    }





    function isInRange(num, range) {
        return num>=range.min&&num<=range.max
    }


    function makeCopy(obj) {
        let obj1=Object.assign({},obj)
        return obj1
        }



        function sayWhat(obj) {
            obj[4]=obj[2]
               return Object.values(obj).join(' ')
           }



           function lessThanOrEqualToZero(num) {
            return num<=0
        }



        function isSameNum(num1, num2) {
            return num1===num2
        }




        function profitableGamble(prob, prize, pay) {
            return prob * prize > pay
        }



        function greeting(name) {
 
            if(name == "Mubashir") {
              return "Hello, my Love!";
            } return "Hello, " + name + "!";
          }


          function makesTen(a, b) {
            return a===10||b===10||a+b===10
        }



        function comp(str1, str2) {
            return str1.length===str2.length
        }

        