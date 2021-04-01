function banksavingratio(){
  var c_netprofit = document.getElementById("banksavingratio_input_netprofit_01");
  var c_profit = document.getElementById("banksavingratio_input_profit_01");
  var c_savemargin= document.getElementById("banksavingratio_td_savemargin_01");
  var c_result= document.getElementById("banksavingratio_td_result_01");
  var c_suggestion= document.getElementById("banksavingratio_td_suggestion_01");
  var netprofit = c_netprofit.value;
  var profit = c_profit.value;
  var sum = ((netprofit/profit)*10000)/100;
  var key, suggestion;
  sum = sum.toFixed(2)
  if(sum>=20)
  {
    key = '安全';
    suggestion = '1.适当投资储蓄，<br>确保不低于20';
  }
  else
  {
    key = '不安全';
    suggestion = '1.增加收入<br>2.减少支出<br>3.尽量往20以上';
  }
  c_savemargin.innerHTML= key;
  c_suggestion.innerHTML=suggestion;
  c_result.innerHTML = sum+"%";
  
}