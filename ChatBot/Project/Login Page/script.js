// 랜덤한 비밀번호 생성 함수 (uppercase: 대문자 사용 여부, lowercase: 소문자 사용 여부, number: 숫자 사용 여부)
function generatePassword(length = 8, uppercase = true, lowercase = true, number = true) {
	let result = '';
	const characters = [];

	if (uppercase) {
		for (let i = 65; i <= 90; i++) {
			characters.push(String.fromCharCode(i));
		}
	}

	if (lowercase) {
		for (let i = 97; i <= 122; i++) {
			characters.push(String.fromCharCode(i));
		}
	}

	if (number) {
		for (let i = 48; i <= 57; i++) {
			characters.push(String.fromCharCode(i));
		}
	}

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters[randomIndex];
	}

	return "비밀번호로ㅤ"+result+"ㅤ는 어떠세요?";
}

window.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.password-field').addEventListener('focus', () => {
		const passwordField = document.querySelector('.password-field');
		const displayArea = document.querySelector('.password-display');
		const passwordLength = 8; // 비밀번호 길이 (원하는 길이로 수정 가능)
		displayArea.innerHTML = generatePassword(passwordLength, true, true, true);
		displayArea.classList.remove('hidden');
		passwordField.addEventListener('input', () => {
			displayArea.classList.add('hidden');
		});
	});
});