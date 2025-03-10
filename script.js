// Add smooth scrolling or animations if needed
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
const modal = document.getElementById('contactModal');
const eventNameSpan = document.getElementById('eventName');
const contactPersonSpan = document.getElementById('contactPerson');
const contactPhoneSpan = document.getElementById('contactPhone');
const contactEmailSpan = document.getElementById('contactEmail');
const closeBtn = document.querySelector('.close');

// Contact details for each event
const contactDetails = {
    "PAPER PRESENTATION": {
        person: "Mohamed Ashraf Ali M, Sudharsan V",
        phone: "7867978474,9843658792", 
        More_Details: "Download Event PDF"

    
    },
    "CODE DEBUGGING": {
        person: "Kaviya Priya K,Ezhilarasi A",
        phone: "6369384956,6383477918",
        More_Details: "Download Event PDF"
    
    },
    "WEB DESIGN": {
        person: "Sharmila ,Srinithi",
        phone: "9342970994,9003734104",
        More_Details: "Download Event PDF"

    },
    "MIND MAZE": {
        person: "Kaviya K,Swetha B",
        phone: "9994512731,9361381541",
        More_Details: "Download Event PDF"
    
    },
    "BLENDER ANIMATION": {
        person: "Sanjay G,Prasanna K",
        phone: "7904383409,9361776193",
        More_Details: "Download Event PDF"
    
    },
    "FREE FIRE": {
        person: "Dinesh,Arun",
        phone: "8825857567,9363616906",
        More_Details: "Download Event PDF"
        
    },
    "IPL AUCTION": {
        person: "Malik S.B,ArulKumar",
        phone: "9943532760,9994167485",
        More_Details: "Download Event PDF"
    
    },
    
    "TAMGLISH HUNT": {
        person: "Monisha R.K,sathiyavathi S",
        phone: "9345712018,9344218679",
        More_Details: "Download Event PDF"
    },
    "BLOW & GRAB": {
        person: "Kanishka K,Pavithra K",
        phone: "6380880968,8838628949",
        More_Details: "Download Event PDF"
    }
};

// Function to open the modal with event-specific contact details
function openModal(event) {
    const eventName = event.target.textContent;
    const details = contactDetails[eventName];

    if (details) {
        eventNameSpan.textContent = eventName;
        contactPersonSpan.textContent = details.person;
        contactPhoneSpan.textContent = details.phone;
        
       
        modal.style.display = 'block';
    }
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Add click event to all event cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', openModal);
});

// Close modal when clicking on the close button
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});