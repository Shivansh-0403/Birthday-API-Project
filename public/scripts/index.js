function turnPage() {
    const notebook = document.getElementById('notebook');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    page1.style.transform = 'rotateY(-180deg)';
    document.getElementById('form').style.transform = 'rotateY(180deg)';

    setTimeout(() => {
        document.getElementById('form').display = 'none';
        page1.style.display = 'none';
        page2.style.display = 'block';
    }, 1000);
}
