// public/widget.js
(function() {
  const widget = document.createElement('div')
  widget.innerHTML = `
    <button onclick="document.getElementById('feedback-modal').style.display='block'">Feedback</button>
    <div id="feedback-modal" style="display:none">
      <form id="feedback-form">
        <textarea name="content" placeholder="Your feedback..."></textarea>
        <input name="email" type="email" placeholder="Email (optional)">
        <button type="submit">Send</button>
      </form>
    </div>
  `
  document.body.appendChild(widget)
  document.getElementById('feedback-form').onsubmit = async function(e) {
    e.preventDefault()
    const content = e.target.content.value
    const email = e.target.email.value
    const projectId = "project_id_here"
    await fetch("https://yourdomain.com/api/feedback", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, email, project_id: projectId })
    })
    alert("Feedback sent!")
  }
})()

