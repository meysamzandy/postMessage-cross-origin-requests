// Origin of The iFramed content
var ORIGIN = "https://meysamzandy.ir";

//listen for messages coming from the Origin Site 
function listener(event){
  if(event.origin !== ORIGIN){
    return;
  }
  console.log(event);

  var response = JSON.parse(event.data);
  document.getElementById("Iframe_response").innerHTML = "ارتفاع  : "+response['newHeight']+"px از طرف سایت منشا : "+event.origin+" دریافت شد.";
  document.getElementById("submit_id").style.background= response['new_btn_color'];
}

//listener for when postMessage calls come in
if (window.addEventListener){
  addEventListener("message", listener, false);
 //addEventListener("onmessage", listener, false);
}else{
  attachEvent("onmessage", listener);
}

//Functions that send messages into iFrame.
document.getElementById("form").onsubmit = function(e){

  var win = document.getElementById("iframe_id").contentWindow;
  
  console.log("درحال انتقال: "+document.getElementById("input_id").value);

  //JSON.stringify() to send text
  win.postMessage(JSON.stringify({ 'newMessage': document.getElementById("input_id").value }), ORIGIN);
  return false;
};