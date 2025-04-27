
document.addEventListener('DOMContentLoaded', function() {
    // Get all the toggle buttons
    const toggleButtons = document.querySelectorAll('.ToggleBtn');
    
    // Get all the containers
    const containers = document.querySelectorAll('.container');
    
    // Function to collapse all containers
    function collapseAll() {
        containers.forEach(container => {
            container.classList.remove('active');
        });
    }

    // Add event listeners to each button
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const container = this.closest('.container');  // Find the parent container of the clicked button
            
            if(container.classList.contains('active')) {
                // Clicking on open container, remove that only
                container.classList.remove('active');
            } else {
                // New button clickd, close all and then open
                collapseAll();
                container.classList.add('active');
            }
        });
    });

    // Get all the topic cards
    const topicCards = document.querySelectorAll('.topicCard');

    // Add event listeners to each topic card
    topicCards.forEach(topic => {
        topic.addEventListener('click', () => {
            window.open(topic.getAttribute('data-url'), '_blank'); // Open URL in a new tab
        });
    });
});





//  The Old Repetetive code

// document.addEventListener('DOMContentLoaded', function() {    
    // To Add link to every card
    // const topicCards = document.querySelectorAll('.topicCard');
    // topicCards.forEach(topic => {
    //     topic.addEventListener('click', () => {
    //     // window.location.href = topic.getAttribute('data-url');  opens locally
    //         window.open(topic.getAttribute('data-url'), '_blank' );
    //     });
    // });
    
    
    // // Get the buttons
    // const pyButton = document.getElementById('PyButton');
    // const jsButton = document.getElementById('JsButton');
    // const JsdomButton = document.getElementById('JsdomButton');
    // const CdsButton = document.getElementById('CdsButton');
    
    
    
    // // Get the containers of topic cards
    // const pythonContainer = document.getElementById('PythonContainer');
    // const jsContainer = document.getElementById('JsContainer');
    // const JsdomContainer = document.getElementById('JsdomContainer');
    // const CdsContainer = document.getElementById('CdsContainer');    
    
     
    // pyButton.addEventListener('click', function() {
    //     pythonContainer.classList.toggle('active');
    // });
    // jsButton.addEventListener('click', function() {
    //     jsContainer.classList.toggle('active');
    // });
    
    // JsdomButton.addEventListener('click', function() {
    //     JsdomContainer.classList.toggle('active');
    // });
    
    // CdsButton.addEventListener('click', function() {
    //     CdsContainer.classList.toggle('active');
    // });
    

    // Toggle the JavaScript topic cards visibility when JsButton is clicked
    // jsButton.addEventListener('click', function() {
    //     if (jsContainer.classList.contains('active')) {
    //         jsContainer.classList.remove('active');
    //     } else {
    //         jsContainer.classList.add('active');
    //     }
    // });

    
    // Toggle the Python topic cards visibility when PyButton is clicked
    // pyButton.addEventListener('click', function() {
    //     if (pythonContainer.classList.contains('active')) {
    //         pythonContainer.classList.remove('active');
    //     } else {
    //         pythonContainer.classList.add('active');
    //     }
    // });
   
    // // Toggle the Jsdom topic cards visibility when JsdomButton is clicked
    // JsdomButton.addEventListener('click', function() {
    //     if (JsdomContainer.classList.contains('active')) {
    //         JsdomContainer.classList.remove('active');
    //     } else {
    //         JsdomContainer.classList.add('active');
    //     }
    // });  
    
    // // Toggle the Cds topic cards visibility when CdsButton is clicked
    // CdsButton.addEventListener('click', function() {
    //     if (CdsContainer.classList.contains('active')) {
    //         CdsContainer.classList.remove('active');
    //     } else {
    //         CdsContainer.classList.add('active');
    //     }
    // });  
    
    
// });