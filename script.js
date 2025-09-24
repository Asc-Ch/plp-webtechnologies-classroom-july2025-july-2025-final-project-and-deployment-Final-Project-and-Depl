document.addEventListener('DOMContentLoaded', function() {
      const navLinks = document.querySelectorAll('.nav-link');
      const pageSections = document.querySelectorAll('.page-section');
      
      // Show home page by default
      showPage('home');
      
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetPage = this.getAttribute('href').substring(1);
          
          // Update active nav link
          navLinks.forEach(l => l.classList.remove('nav-link--active'));
          this.classList.add('nav-link--active');
          
          // Show the selected page
          showPage(targetPage);
          
          // Update body class for background
          document.body.className = targetPage + '-page';
        });
      });
      
      // Contact form handling
      const contactForm = document.getElementById('contactForm');
      const formMessage = document.getElementById('formMessage');
      
      if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Simple form validation
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;
          
          if (name && email && message) {
            formMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
            formMessage.style.color = 'green';
            contactForm.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
              formMessage.textContent = '';
            }, 5000);
          } else {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.color = 'red';
          }
        });
      }
      
      // Recipe filtering
      window.filterRecipes = function(category) {
        const recipeCards = document.querySelectorAll('.recipe-card');
        const filterButtons = document.querySelectorAll('.filters button');
        
        // Update active filter button
        filterButtons.forEach(button => {
          button.classList.remove('active');
          if (button.textContent.toLowerCase().includes(category)) {
            button.classList.add('active');
          }
        });
        
        // Show/hide recipes based on category
        recipeCards.forEach(card => {
          if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      }
    });
    
    function showPage(pageId) {
      // Hide all pages
      document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
      });
      
      // Show the selected page
      document.getElementById(pageId).classList.add('active');
    }