// este script despliega el título del header al iniciar la página
const heading = 'MEET OUR ESSENTIAL´S TEAM';
let i = 0;

const typing = () => {
	if(i < heading.length){
		document.querySelector('.header').innerHTML += heading.charAt(i);
		i++;
		setTimeout(typing, 100);
	}
}

typing();