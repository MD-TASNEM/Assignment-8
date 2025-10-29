import { useState, useEffect } from 'react'

export default function InstallButton({app}){
  const [installed, setInstalled] = useState(false)

  useEffect(()=>{
    const installedList = JSON.parse(localStorage.getItem('installed')|| '[]')
    setInstalled(installedList.some(a=> a.id === app.id))
  },[app.id])

  function handleInstall(){
    const installedList = JSON.parse(localStorage.getItem('installed')|| '[]')
    if(!installedList.some(a=> a.id === app.id)){
      installedList.push(app)
      localStorage.setItem('installed', JSON.stringify(installedList))
      setInstalled(true)
      // success toast (simple)
      alert(`${app.title} installed successfully!`)
    }
  }

  return (
    <button onClick={handleInstall} disabled={installed} className={`px-3 py-1 rounded ${installed? 'bg-gray-300':'bg-blue-600 text-white'}`}>
      {installed? 'Installed':'Install'}
    </button>
  )
}