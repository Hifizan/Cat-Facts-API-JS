let btn = document.querySelector('button');


let url = "https://catfact.ninja/fact";

btn.addEventListener('click', async ()=>{
    let op = await getFacts();
    console.log(op);
    let p = document.querySelector(".output");
    p.innerText = op;
})


async function getFacts() {
    try{
        let res = await axios.get(url); // this returns a promise - so we have to use await otherwise if API took time console will not show anything.
        return res.data.fact; 
    }
    catch(e){
        console.log(e);
        return "FACT NOT FOUND"
    }
}