function contactsScreen(mainID){
	var appScreen = mainID;
	var initialized = false;
	obj = {
		init : function(){
			document.getElementById('addContact').addEventListener("click", function(event){
				event.preventDefault();
				document.getElementById('contactDetails').style.display = 'block';
			})

			var times = document.getElementsByTagName('time');
			for(var i = 0; i < times.length; i++){
				times[i].addEventListener('mouseenter', function(event){
						event.target.nextElementSibling.style.display = 'block';
					});
				times[i].addEventListener('mouseleave', function(event){
						event.target.nextElementSibling.style.display = 'none';
					});
			}

			if( initialized === true ){
				return;
			}
			initialized = true;

			var contactName = document.getElementById('contactName')
            contactName.oninvalid = function(e) {
	            e.target.setCustomValidity("");
	            if (e.target.validity.valid == false) {
	            	if (e.target.value.length == 0) {
	               	    e.target.setCustomValidity("Contact name is required.");
		           } 
		           else if (e.target.value.length < 5) {
			           e.target.setCustomValidity("Contact name must be at least 5 characters."); 
		           }
	           }
            };
 
            var email = document.getElementById('emailAddress')
            email.oninvalid = function(e) {
	            e.target.setCustomValidity("");
	            if (e.target.validity.valid == false) {
		            if (e.target.value.length == 0) {
			            e.target.setCustomValidity("Email is required.");
		             } 
		             else {
			              e.target.setCustomValidity("Please enter a valid email address."); 
		             }
	            }
            }
            
		}
	};
	return obj;
}
