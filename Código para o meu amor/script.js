const questionDiv = document.getElementById('content');
const questionText = document.getElementById('question');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');

btnYes.addEventListener('click', () => {
    questionText.textContent = "Então você libera o Cuzinho hoje? :D";
    btnYes.textContent = "Sim";
    btnNo.textContent = "Não";
    btnNo.disabled = false;

    btnNo.addEventListener('click', () => {
        if (!btnNo.disabled) {
            const randomX = Math.random() * (window.innerWidth - 100);
            const randomY = Math.random() * (window.innerHeight - 100);
            questionDiv.style.left = `${randomX}px`;
            questionDiv.style.top = `${randomY}px`;
            btnNo.disabled = true; 
        }
    });

    btnYes.addEventListener('click', () => {
        questionText.textContent = "Hoje tem ;p";
        btnYes.style.display = 'none';
        btnNo.style.display = 'none';
    });
});

btnNo.addEventListener('click', () => {
    if (questionText.textContent === "Então você libera o Cuzinho hoje? :D") {
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 100);
        questionDiv.style.left = `${randomX}px`;
        questionDiv.style.top = `${randomY}px`;
        btnNo.disabled = true; 
    } else {
        questionText.textContent = "Aff, sem graça, me ama ou não?";
    }
    
    btnNo.disabled = true;
});




