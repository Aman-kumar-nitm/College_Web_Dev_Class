
        
        function submitQuiz() {
            
            let confirmSubmission = confirm("Are you sure you want to submit the quiz?");
            
            if (confirmSubmission) {
                
                let password = prompt("Please enter your password to confirm submission:");

                
                if (password) {
                    alert("Your quiz has been submitted successfully!"); 
                    window.location.href = "index2.html"; 
                } else {
                    alert("Submission cancelled. You did not enter a password.");
                }
            } else {
                alert("Submission cancelled.");
            }
        }
