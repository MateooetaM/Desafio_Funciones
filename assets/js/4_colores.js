const div1 = document.querySelector("#id-1")
        const div2 = document.querySelector("#id-2")
        const div3 = document.querySelector("#id-3")
        const div4 = document.querySelector("#id-4")
        const keyDiv = document.querySelector("#key")
        
        const changeBackgroundColor = (event) => {
            event.target.style.backgroundColor = "black"
        }

        div1.addEventListener("click", changeBackgroundColor)
        div2.addEventListener("click", changeBackgroundColor)
        div3.addEventListener("click", changeBackgroundColor)
        div4.addEventListener("click", changeBackgroundColor)

        let color = ""
        document.addEventListener('keydown', function (event){
            if (event.key === 'a') {
                keyDiv.style.backgroundColor = "pink"
            }else if(event.key === 's') {
                keyDiv.style.backgroundColor = "orange"
            }else if(event.key === 'd') {
                keyDiv.style.backgroundColor = "skyblue"
            }else if(event.key === 'q') {
                createNewDiv("purple")
            }else if(event.key === 'w') {
                createNewDiv("gray")
            }else if(event.key === 'e') {
                createNewDiv("brown")
            }
        })

        function createNewDiv(color) {
            const newDiv = document.createElement("div")
            newDiv.style.width = "200px"
            newDiv.style.heigth = "200px"
            newDiv.style.margin = "50px"
            newDiv.style.backgroundColor = color
            document.body.appendChild(newDiv)
        }