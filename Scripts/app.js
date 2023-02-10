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
        document.getElementById("contactName").innerText = 'Name:'
        document.getElementById("contactNumber").innerText = 'Contact Number'
        document.getElementById("contactEmail").innerText = 'Email Addresss:'
        document.getElementById("shortMessage").innerText  = 'Short Message: '
        document.getElementById("submitbutton").innerText = 'Submit'

        
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
                let pathName = window.location.pathname.split('/')
                pathName.pop()
                pathName.push('index.html')

                window.location.pathname = pathName.join('/') 
            }, 3000);
            return false;
        }

    }

    function AboutUsForm(){

        document.getElementById("aboutH4Name1").innerText = 'Name'
        document.getElementById("aboutH5Name1").innerText = 'Manuel Arturo Lopez Perez'
        document.getElementById("aboutDesc1-1").innerText = 'Full Stack Developer'
        document.getElementById("aboutDesc1-2").innerText = 'Proficient in Golang and TypeScript'
        document.getElementById("aboutDesc1-3").innerText = 'Resume'
        
        
        document.getElementById("aboutH4Name2").innerText= 'Name'
        document.getElementById("aboutH5Name2").innerText = "Kinen Ocitti"
        document.getElementById("aboutDesc2-1").innerText = 'Data Analyst.'
        document.getElementById("aboutDesc2-2").innerText = "Proficient in Data Manipulation and Database Managment." 
        document.getElementById("aboutDesc2-3").innerText= "Resume"

    }

    function ProjectsForm(){
        document.getElementById("projectName1").innerText = 'Name'
        document.getElementById("projectName1-1").innerText = 'MICP - SIM'
        document.getElementById("projectDesc1-1").innerText = 'Microprecessor 8085 simulator'
        document.getElementById("projectDesc1-2").innerText = 'WebSocket connection with front-end to send current state of microprocessor'
        document.getElementById("projectDesc1-3").innerText = 'Implemented syntax highlither for assembly language'
        
        
        document.getElementById("projectName2").innerText= 'Name'
        document.getElementById("projectName2-1").innerText = "Grade Sheet Application"
        document.getElementById("projectDesc2-1").innerText = 'Used Bash Script'
        document.getElementById("projectDesc2-2").innerText = "Created an Application that Calcutated the GPA of the Student." 
        document.getElementById("projectDesc2-3").innerText= "It also Calculated the Average Percentage both Semesters of the Student"
        
        document.getElementById("projectName3").innerText = 'Name: '
        document.getElementById("projectName3-1").innerText = 'Cell Automata Visulaizer'
        document.getElementById("projectDesc3-1").innerText = 'Developed a websire to show and run 3 cell automatas'
        document.getElementById("projectDesc3-2").innerText = 'Implemented game of life '
        document.getElementById("projectDesc3-3").innerText = "Implemented Langton's ant"
        document.getElementById("projectDesc3-4").innerText = "Implemented Brian's Brain"
        
        
        document.getElementById("projectName4").innerText= 'Name: '
        document.getElementById("projectName4-1").innerText = "Client and Salesperson Application"
        document.getElementById("projectDesc4-1").innerText = 'Used PHP, CSS, and SQL.'
        document.getElementById("projectDesc4-2").innerText = "Created an Application that Had an interface for both Clients and Salespeople." 
        document.getElementById("projectDesc4-3").innerText= "Both, the Salespeople and Clients were required to Login."

    }

    function ServiceForm(){
        document.getElementById("servicesName1").innerText = 'Name of Skill:'
        document.getElementById("servicesName1-1").innerText = 'Backend-Development'
        document.getElementById("serviesDesc1-1").innerText = "Created REST and Graphql API's."
        document.getElementById("serviesDesc1-2").innerText = 'Created Realtime applications with websockets.'
        document.getElementById("serviesDesc1-3").innerText = 'Created Authentication Services with a roles model.'
        
        document.getElementById("servicesName2").innerText= 'Name of Skill:'
        document.getElementById("servicesName2-1").innerText = "Web Design"
        document.getElementById("serviesDesc2-1").innerText = 'Proficient in: PHP, HTML, CSS and JavaScript.'
        document.getElementById("serviesDesc2-2").innerText = "Creating Responsive Web Design." 
        
        document.getElementById("servicesName3").innerText = 'Name of Skill: '
        document.getElementById("servicesName3-1").innerText = 'Data Analytics and Management'
        document.getElementById("servicesDesc3-1").innerText = 'Great at Developing Statistical Modelling and Visualization.'
        document.getElementById("servicesDesc3-2").innerText = 'Implemented game of life '
        document.getElementById("servicesDesc3-3").innerText = "Implemented Langton's ant"
        
        
        document.getElementById("servicesName4").innerText= 'Name of Skill: '
        document.getElementById("servicesName4-1").innerText = "Mobile Development"
        document.getElementById("serviesDesc4-1").innerText = 'Proficient in React Native.'
        document.getElementById("serviesDesc4-2").innerText = "Responsive Desing on phones." 
        document.getElementById("servicesDesc4-3").innerText= "Both, the Salespeople and Clients were required to Login."
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
                ContactUsForm()
                break;
            case 'WEBD6201 - Lab1 - About Us':
                AboutUsForm()
                break;
            case 'WEBD6201 - Lab1 - Projects':
                ProjectsForm()
                break
            case 'WEBD6201 - Lab1 - Services':
                console.log('projects page ran')
                ServiceForm()
                break
        }

    }

    // Adding event listenr to ensure it runs after all the elements are loaded
    window.addEventListener('load', Start)
})()