$("#btn1").click(function(){

    const div = document.createElement("div")
    document.body.appendChild(div)


    $("div").addClass("div1")
    $("#btn1").hide(2000)

    const heading = document.createElement("h1")
    div.appendChild(heading)

    const text1 = document.createTextNode("Last Task In JQuery")
    heading.appendChild(text1)


    const para = document.createElement("p")
    div.appendChild(para)

    const text3 = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque officiis laborum eius nesciunt nihil repellat aliquam minus ab minima, sapiente maiores doloribus, rerum tenetur quod nisi voluptatum, autem fugiat.")
    para.appendChild(text3)

    const btn = document.createElement("button")
    div.appendChild(btn)

    const text2 = document.createTextNode("Click here")
    btn.appendChild(text2)

    $("button").addClass("btn1")
    
    
})




