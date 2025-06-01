<script>
// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    document.getElementById('reviewForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const review = {
    text: e.target[0].value,
    name: e.target[1].value,
  };
  console.log("Review submitted:", review);
  // Ideally, you’d send this to a database/server
});
  });
});

// Simple form validation and feedback
document.querySelector("button[type='submit']").addEventListener("click", function(e) {
  e.preventDefault();

  const name = document.querySelector("input[placeholder='Full Name']").value.trim();
  const email = document.querySelector("input[placeholder='Email Address']").value.trim();
  const phone = document.querySelector("input[placeholder='Phone Number']").value.trim();
  const date = document.querySelector("input[type='date']").value;
  const message = document.querySelector("textarea").value.trim();

  if (!name || !email || !phone ||date) {
    alert("Please fill in all required fields.");
    return;
  }

  // Example success feedback
  alert(Thank you, ${name}! Your booking for ${date} has been submitted.);
  
  // Optionally reset form
  document.querySelector(".booking").reset();
});
</script>