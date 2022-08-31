

function generateColor() {

    const btn = document.getElementById('card-background')

    let r = Math.trunc( Math.random() * 255)
    let g = Math.trunc( Math.random() * 255)
    let b = Math.trunc( Math.random() * 255)

    btn.style.backgroundColor = `rgb(${r},${g},${b})`
}