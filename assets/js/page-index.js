document.addEventListener('DOMContentLoaded',()=>{const next=KEEP_DATA.anniversaries.find(x=>x.date);const el=document.querySelector('.hero + .notice');if(next)Keep.toast('已读取一个纪念日')});
