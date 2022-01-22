const box = document.getElementById("bText");

const callAbout = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')

    if(res.status === 200)
    {
        const data = await res.json();
        const msg = data.body.split(`\n`).join(`<br>`);
        // console.log(msg);
        box.innerHTML = msg;
    }
}

callAbout();