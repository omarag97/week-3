const container = document.getElementById("container");

window.addEventListener("keydown", (e) =>{
    console.log(e);
    const { key, keyCode, code } = e;

    container.innerHTML = `
    <div class="key">
    ${key}
    <small>event.key</small>
    </div>
    <div class="key">
    ${keyCode}
    <small>event.which</small>
    </div>
    <div class="key">
    ${code}
    <small>event.code</small>
    </div>
    `;
})













