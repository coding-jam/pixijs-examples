import { Application, loader, Sprite } from 'pixi.js'

// Create the renderer
const app = new Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x323B44})

// Fullscreen
app.renderer.autoResize = true
app.renderer.resize(window.innerWidth, window.innerHeight)
document.body.appendChild(app.view)

// Loading data
const LOGO_URL = 'logo.png'

loader.add(LOGO_URL).load(() => {
  const logo = new Sprite(loader.resources[LOGO_URL].texture)

  // Center image
  logo.x = (app.renderer.width - logo.width) / 2
  logo.y = (app.renderer.height - logo.height) / 2

  app.stage.addChild(logo)
})
