import { Application, loader, Sprite, filters } from 'pixi.js'

// Create the renderer
const app = new Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x323B44})

let count = 0

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
  logo.filters = [new filters.ColorMatrixFilter()]

  app.ticker.add(() => {
    count += 0.01
    logo.filters[0].greyscale(Math.abs(Math.sin(count)), false)
  })

  app.stage.addChild(logo)
})
