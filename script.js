async function getData(){
    try{
        const response=await fetch("https://api.github.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data=await response.json();

        let parent=document.querySelector("#first");


        for(let user of data){
            let element=document.createElement("div");

            let image=document.createElement("img");
            image.src=user.avatar_url;
            image.alt = user.login;

            let username=document.createElement("h2");
            username.textContent=user.login;

            let link=document.createElement("a");
            link.href=user.html_url;
            link.textContent="View Profile";
            link.target = "_blank";

            element.append(image,username,link);
            parent.append(element);
        }
    }catch(err){
        console.log(err.message);
    }


}

getData();