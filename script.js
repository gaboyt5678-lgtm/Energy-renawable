function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

function toggleFAQ(btn) {
  const content = btn.nextElementSibling;
  content.style.display = content.style.display === "block" ? "none" : "block";
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill in all fields");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}

function scrollTopPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
