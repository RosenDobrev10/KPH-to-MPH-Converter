const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');
    output.value = Math.round(input * 0.62137119223733);
});
