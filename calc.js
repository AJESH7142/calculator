function displayData(n){
   if (result.value == 0||result.value == "%"||result.value == "*"||result.value == "+"||result.value == "-"||result.value == "×"||result.value == "SyntaxError") {
      result.value = n
   }
   else{
      result.value+=n
   }
}
function allClear(){
   result.value = 0
}
function evalExpression(){
   // n = result.value
   // out = eval(n)
   // result.value = out
   result.value = eval(result.value)
   
}

//string s = "fufge"

//starting index is 0, end index is -1(right to left)
//slice method-- s.slice(0,-1) == "fufg"
//"e" gets excluded because the index is -1
function backSpace() {
   s = result.value
   result.value = s.slice(0,-1)
}
