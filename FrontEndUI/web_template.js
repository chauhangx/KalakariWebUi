function openCustomizationForm(url,id) {
	console.log("id received is :",id);
	localStorage.setItem("template_Id",id);
  // Open the specified URL in the same tab
  window.location.href = url;
}