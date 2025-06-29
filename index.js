// Add your code here
function submitData(name, email) {
  const formData = { name, email };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      // data contains { name, email, id }
      const p = document.createElement("p");
      p.textContent = `User ID: ${data.id}`;
      document.body.appendChild(p);
    })
    .catch(error => {
      const p = document.createElement("p");
      p.textContent = `Error: ${error.message}`;
      document.body.appendChild(p);
    });
}
