 body = document.querySelector("body")
 newDiv = document.createElement("div")
 const fetchRepos = async()=>{
    const repoURL = await fetch('https://api.github.com/users/kurtrode/repos')
    const repoJSON = await repoURL.json()
    console.log(repoJSON)
//     /*body.appendChild(newDiv)
//     newDiv.innerHTML = `<a href="${repoJSON[5].url}">${repoJSON[5].name}</a>*/`
    repoJSON.forEach(linker =>{
        body.appendChild(newDiv)
        newDiv.innerHTML += `<a href='${linker.url}' style="color:red;text-decoration:none>${linker.name}</a><br/><br/>`
    })
 }
fetchRepos()
