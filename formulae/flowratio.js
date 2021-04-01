function flowratio(){
  var c_flowasset = document.getElementById("flowratio_input_flowasset_01");
  var c_monthly_expense = document.getElementById("flowratio_input_monthly_expense_01");
  var c_savemargin= document.getElementById("flowratio_td_savemargin_01");
  var c_result= document.getElementById("flowratio_td_result_01");
  var c_suggestion= document.getElementById("flowratio_td_suggestion_01");
  var flowasset = c_flowasset.value;
  var monthly_expense = c_monthly_expense.value;
  var sum = flowasset/monthly_expense;
  var key, suggestion;
  sum = sum.toFixed(2)
  if(sum>=3 && sum<=6)
  {
    key = '安全';
    suggestion = '1.可以适当投资，<br>确保不低于3';
  }
  else if(sum>6)
  {
    key = '太安全';
    suggestion = '1.适当加大投资<br>2.尽量往6以下<br>3.不低于3即可';
  }
  else if(sum<3)
  {
    key = '不安全';
    suggestion = '1.增加流动现金<br>2.尽量往3以上';
  }
  c_savemargin.innerHTML= key;
  c_suggestion.innerHTML=suggestion;
  c_result.innerHTML = sum;
  
}