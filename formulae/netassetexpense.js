function netassetexpense(){
  var c_netasset = document.getElementById("netassetexpense_input_netasset_01");
  var c_totalasset = document.getElementById("netassetexpense_input_totalasset_01");
  var c_savemargin= document.getElementById("netassetexpense_td_savemargin_01");
  var c_result= document.getElementById("netassetexpense_td_result_01");
  var c_suggestion= document.getElementById("netassetexpense_td_suggestion_01");
  var netasset = c_netasset.value;
  var totalasset = c_totalasset.value;
  var sum = ((netasset/totalasset)*10000)/100;
  var key, suggestion;
  sum = sum.toFixed(2)
  if(sum>=70 && sum<=80)
  {
    key = '安全';
    suggestion = '1.可以适当投资，<br>确保不低于70';
  }
  else if(sum>80)
  {
    key = '太安全';
    suggestion = '1.适当利用信用额度<br>2.尽量往80以下<br>3.不低于70即可';
  }
  else if(sum<70)
  {
    key = '不安全';
    suggestion = '1.减少负债<br>2.尽量往70以上';
  }
  c_savemargin.innerHTML= key;
  c_suggestion.innerHTML=suggestion;
  c_result.innerHTML = sum+"%";
  
}