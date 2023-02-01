/*
    Full Name: Kinen Ocitti (100725411), Manuel Lopez (100622700)
    Date Completed: Feb 1 , 2023
*/

/*
Self calling anonymus functo to run when the js is loaded into the page
*/
(function(){
     
    /*
    Function to run when on the contact us html page
    adds onsubmit hadnler to the form in the contatct page 
    when clicking submit printsout all the inputs value and set a timeout that in 3 seconds redirects the user to home page
    */
    function ContactUsForm(){
        // get all the input elemtnts
        const username = document.getElementById("username")
        const contactNumber = document.getElementById("contactNumber")
        const emailAddress = document.getElementById("emailAddress")
        const shortMessage = document.getElementById("shortMessage")
        const form = document.getElementById("myForm")

        // add a onsubmite event listner
        form.onsubmit = (e)=>{
            // prevent form from refreshing the page
            e.preventDefault()
            
            // log contact information
            console.log(`
            Contact Us Form Values:
            Name: ${username.value} 
            Contact Number: ${contactNumber.value}
            Email Addres: ${emailAddress.value}
            Short Message: ${shortMessage.value}
            `)

            // set timeput to wait 3 seconds to redirect the page
            setTimeout(() => {
               window.location.pathname = '/index.html'
            }, 3000);
            return false;
        }

    }
     /*
    Start function runs at the start of all the html pages
    Changes products to projevts in the nav bar
    Adds a human resources item in the navbar in between about us and contact us
    Adds a navbar footer at the end of the page 
    */
     function Start (e){
        // get products nav element
        const productsNav = document.getElementById("productsNav")
        // change the contects to a projects html
        productsNav.innerHTML = `<a class="nav-link"  href="./projects.html"><i class="fa-solid fa-bag-shopping"></i> Projects</a>`

        // get the abouts nav element
        const aboutUsNav = document.getElementById("aboutUsNav")
        // create the human resources li nav elemtn
        humanResourcesElement = document.createElement("li")
        // add the necesarry html to the humanrsources element
        humanResourcesElement.innerHTML = `<a class="nav-link"  href="./humanResouces.html"><i class="fa-solid fa-person"></i> Human Resources</a>`
        // add the nav-item class to the human resource element
        humanResourcesElement.classList.add("nav-item")
        // insert the human resources elemetn between the aboutus and the contact us elements
        aboutUsNav.parentNode.insertBefore(humanResourcesElement, aboutUsNav.nextSibling)


        // create footer element for the html page
        const footer = document.createElement("footer")
        footer.innerHTML = `
        <nav class="navbar fixed-bottom navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">©CopyRight 2020</a>
            </div>
        </nav>
        `

        // get the main tag element from the html page
        const main = document.getElementById("main")
        // add it before the scripts tag element
        main.parentNode.insertBefore(footer, main.nextSibling)

        // swithc to check when to run the specific page function
        switch(document.title){
            case 'WEBD6201 - Lab1 - Contact Us':
                console.log("switch ran")
                ContactUsForm()
                break;
        }

    }

    // Adding event listenr to ensure it runs after all the elements are loaded
    window.addEventListener('load', Start)
})()