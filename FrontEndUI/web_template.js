window.onload = function () {
    const username ="Hi "+ localStorage.getItem('email');
    if (username) {
        document.getElementById('username').textContent = username;
    } else {
        document.getElementById('username').textContent = 'Guest';
    }
};

function openCustomizationForm(url, id) {
	console.log("id received is :",id);
	localStorage.setItem("template_Id",id);
  // Open the specified URL in the same tab
  window.location.href = url;
}