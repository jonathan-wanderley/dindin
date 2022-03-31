const cursos = document.querySelectorAll('.item');
const botoes = document.querySelectorAll('.botao-modal');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.close');

cursos.forEach(curso => {
    const botao = curso.querySelector('.botao-modal');
    botao.addEventListener('click', (e) => {
        e.preventDefault();

        let titulo = curso.querySelector('.text h2').innerHTML;
        modal.querySelector('.text h3').innerHTML = titulo;

        let imagem = curso.querySelector('img').getAttribute('src');
        modal.querySelector('img').setAttribute('src', imagem);

        modal.style.display = 'flex';
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
})