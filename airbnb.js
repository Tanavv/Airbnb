function submitform(){
	var where=document.getElementById('where').value;
	var check_in=document.getElementById('Check-in').value;
	var check_out=document.getElementById('Check-out').value;
	var dropdown=document.getElementById('dropdown').value;
	var map= {w:where, ci:check_in, check_out, d:dropdown};
	var storage_data=localStorage.getItem("Travel")
	if (storage_data===null)
	{
		var list=[]
	} else
	{
		var list= JSON.parse(storage_data)
	}
	list.push(list)
	localStorage.setItem("Travel", JSON.stringify(list))
}
