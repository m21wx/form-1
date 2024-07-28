
		


		
		
		let btnUser=  document.querySelector('.btn');
		btnUser.addEventListener('click',(e)=>{
			console.log(e)
			
			e.preventDefault()
		})
		
		
		
		let input = document.querySelectorAll('.input');
		
		

		
		input.forEach(e=>{	
		let parentInput = e.parentElement;	
			e.addEventListener('input',()=>{
				let value = e.value;
				let span = e.nextElementSibling;
			
				
			
			  
				if(value.length < 4  ){
					span.style.color='red';
					let textNode= document.createTextNode('لا يقل عدد العروف عن 4')
	
				
				}else{
					span.style.color='green';
				}
				if(e.type=='email'){
					let email = e.value;
					let checkEmail =/\w+@\w+.(com)/g;
						if(checkEmail.test(email)){
							e.style.color='green'
							e.style.background='#ddd'
						}else{
							span.style.color='red';
						
					
			
						}
					
				}
		
		
				
			})	
		
			if(e.type=='password'){
				let spanPass = e.nextElementSibling;
				spanPass.addEventListener('click',()=>{
					e.type='text';
					spanPass.innerHTML=`<i class="fa-solid fa-eye"></i>`
					
					
					setTimeout(()=>{
						e.type='password';
					spanPass.innerHTML=`<i class="fa-solid fa-eye-slash"></i>`
					
					},1000)
				})
			
			
			
			}
		})
		
		
		
		
		
		
		
		

		
		
		
		
		
		
		
		
		
		