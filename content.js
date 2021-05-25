fetch('./content.json')
  .then(response => {
    return response.json()
  })
  .then(
    data =>
      (document.getElementById('text').innerHTML = `
<h1><span id="title">${data.content.title}</span><a id="linkedin" href="https://www.linkedin.com/in/josefa-castillo/" target="_blank">${data.content.linkedin}</a></h1>
<p id="firstParagraph">${data.content.firstParagraph}</p>
<p id="secondPragraph">${data.content.secondPragraph}</p>
<p><a id="mail" href="mailto:yyycayyystillo.joyyseyyfa@pm.yyme" onmouseover="this.href=this.href.replace(/y/g,'');">Write me</a></p>
`)
  )
