const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const submit = document.getElementById('submitBtn');

function checkPasswordMatch() {
	if (password.value !== passwordConfirm.value) {
		alert('비밀번호가 일치하지 않습니다.');
	} else {
		submit();
	}
}
submit.addEventListener('click',checkPasswordMatch());
var submit = () => {
	alert('가입되신 걸 축하드립니다! 페이지로 이동합니다.');
}

