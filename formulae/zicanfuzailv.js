function zicanfuzailv(){
  var c_debt = document.getElementById("zicanfuzailv_input_debt_01");
  var c_total_assets = document.getElementById("zicanfuzailv_input_total_assets_01");
  var c_savemargin= document.getElementById("zicanfuzailv_td_savemargin_01");
  var c_result= document.getElementById("zicanfuzailv_td_result_01");
  var c_suggestion= document.getElementById("zicanfuzailv_td_suggestion_01");
  var debt = c_debt.value;
  var total_assets = c_total_assets.value;
  var sum = ((debt/total_assets)*10000)/100;
  var key, suggestion;
  sum = sum.toFixed(2);
  if(sum<50)
  {
    key = '安全';
    suggestion = '1.保持50%以下';
  }
  else
  {
    key = '不安全';
    suggestion = '1.减少负债<br>2.增加流动现金';
  }
  c_savemargin.innerHTML= key;
  c_suggestion.innerHTML=suggestion;
  c_result.innerHTML = sum+'%';
  
}