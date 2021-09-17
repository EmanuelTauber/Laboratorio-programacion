(() => {
    const $fetch = document.getElementById("fetchusuarios"),
    $fragmento = document.createDocumentFragment();


fetch("http://jsonplaceholder.typicode.com/users")

    .then((res) => {

        console.log(res)

        return res.ok?res.json():Promise.reject(res);

    })

    .then((data) => {

        console.log(data)

        data.forEach(element => {
            const $li=document.createElement("li");
            $li.innerHTML = `${element.name}--${element.email}--${element.username}`
            $fragmento.appenChild($li)
            console.log($fragmento)
        });
    
        $fetch.appendChild($fragmento);

    })

    .catch(err=>{
        fetch.innerHTML=`ERROR ${err.status}: ocurrio in error`;
    })

    .finally(()=>
        console.log("Esta lienes se imprime igual")
    )
})();