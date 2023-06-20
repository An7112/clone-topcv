var url = new URL(window.location.href);
var queryString = url.href.split('?')[1];
var params = new URLSearchParams(queryString);
var valueURL = params.get('congviec');
var tinhURL = decodeURIComponent(params.get('tinh'));

var vieclam = document.getElementById('nav__vieclam')
var heading = document.getElementById('breadcrumb-heading')
vieclam.innerText = `Việc làm ${valueURL}`
heading.innerText = `Tìm việc làm ${valueURL} tại ${tinhURL}, tuyển dụng ${valueURL} tại ${tinhURL}`