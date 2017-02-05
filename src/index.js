import { Application } from 'pixi.js'

// Create the renderer
const app = new Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x323B44})

// Fullscreen
app.renderer.autoResize = true
app.renderer.resize(window.innerWidth, window.innerHeight)
document.body.appendChild(app.view)
