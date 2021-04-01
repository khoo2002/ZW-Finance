function fuzaishourubilv(){
  var c_debt = document.getElementById("fuzaishourubilv_input_debt_01");
  var c_income = document.getElementById("fuzaishourubilv_input_income_01");
  var c_savemargin= document.getElementById("fuzaishourubilv_td_savemargin_01");
  var c_result= document.getElementById("fuzaishourubilv_td_result_01");
  var c_suggestion= document.getElementById("fuzaishourubilv_td_suggestion_01");
  var debt = c_debt.value;
  var income = c_income.value;
  var sum = ((debt/income)*10000)/100;
  var key, suggestion;
  sum = sum.toFixed(2);
  if(sum<=40)
  {
    key = '安全';
    suggestion = '1.尽量接近36%,<br>以保持财务流动';
  }
  else
  {
    key = '不安全';
    suggestion = '1.分析资产结构<br>2.尽量往40%以下';
  }
  c_savemargin.innerHTML= key;
  c_suggestion.innerHTML=suggestion;
  c_result.innerHTML = sum+'%';
  
}