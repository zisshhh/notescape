import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Navbaar } from './components/Navbaar'
import { Home } from './components/Home'
import { Paste } from './components/Paste'
import { ViewPage } from './components/ViewPaste'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
      <div>
        <Navbaar />
        <Home />
      </div>
    },
    {
      path: "/pastes",
      element: 
      <div>
        <Navbaar />
        <Paste />
      </div>
    },
    {
      path: "/pastes/:id",
      element: 
      <div>
        <Navbaar />
        <ViewPage />
      </div>
    },
  ]
)

function App() {

  return (
    <>
    <RouterProvider router={router} />
    <Toaster />
    </>
  )
}

export default App
