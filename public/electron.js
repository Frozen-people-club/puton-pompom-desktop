const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

let win

function createWindow () {
  win = new BrowserWindow({
    maxWidth: 950,
    maxHeight: 700,
    resizable: false,
    //icon: path.join(__dirname, '..public/index.html'),
    title: "Avocether",
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '..build/index.html')}`)

  win.on('closed', () => {
    win = null
  })
  win.show()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => { 
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})