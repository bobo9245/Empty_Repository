
function submit(){
	const name = document.getElementById('name').value;
	console.log(name==='');
	const id=document.getElementById('id').value;
	const pw=document.getElementById('pw').value;
	const pw_validate = document.getElementById('pw_validate').value;
	const telephone = document.getElementById('telephone').value;
	if(name===''||id===''||pw===''||pw_validate==''||telephone==='')
		alert('값을 모두 입력해 주세요.');
	else if(pw!==pw_validate)
		alert('비밀번호가 일치하지 않습니다.');
	else if(telephone.length!=11)
		alert('알맞은 전화번호 양식으로 입력해 주세요.');
	else{
		const data = [id,pw,telephone];
		window.localStorage.setItem(name,JSON.stringify(data));
		alert('회원가입이 완료되었습니다.');
	}
}