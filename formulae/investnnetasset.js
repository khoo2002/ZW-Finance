function investnnetasset(){
  var c_investasset = document.getElementById("investnnetasset_input_investasset_01");
  var c_netasset = document.getElementById("investnnetasset_input_netasset_01");
  var c_savemargin= document.getElementById("investnnetasset_td_savemargin_01");
  var c_result= document.getElementById("investnnetasset_td_result_01");
  var c_suggestion= document.getElementById("investnnetasset_td_suggestion_01");
  var investasset = c_investasset.value;
  var netasset = c_netasset.value;
  var sum = ((investasset/netasset)*10000)/100;
  var key, suggestion;
  sum = sum.toFixed(2);
  if(sum>=50)
  {
    key = '安全';
    suggestion = '1.保持50%以上，<br>确保净资产增长';
  }
  else
  {
    key = '不安全';
    suggestion = '1.适当加大投资<br>2.尽量往50%以上';
  }
  c_savemargin.innerHTML= key;
  c_suggestion.innerHTML=suggestion;
  c_result.innerHTML = sum+'%';
  
}