//変数
let url = "";
let title = "";
let url_p;
let my_url = "https://chitose1020.github.io/URLencoder/"
//リダイレクトするか判定
url_p = location.search;
console.log(url_p);
url_p  = url_p.substr( 1, url_p.length - 1 );
url_p = atob(url_p);
console.log(url_p);
if(url_p != ""){
  try {
   new URL(url_p);
   window.location.href = url_p;
  }catch{
   
  }
}
//イベント
document.getElementById("textbox").addEventListener("change", () => {
 url = textbox.value;
  try {
   new URL(url);
   document.getElementById("result").textContent = url;
   document.getElementById("text_copy").value = my_url + "?" + btoa(url);
  }catch{
   document.getElementById("result").textContent = "無効なURLです/URL is invalid";
  }
});

document.getElementById("t_copy").addEventListener("click", () => {
 var copy = document.getElementById("text_copy").value;
  if (navigator.clipboard) { 
    return navigator.clipboard.writeText(copy).then(function() { 
      alert("コピーしました/Copy to text.");
    })
  } else {
    document.getElementById("text_copy").select();
    document.execCommand('copy');
    alert("コピーしました/Copy to text.");
  }
 alert("コピーしました/Copy to text.");
});
