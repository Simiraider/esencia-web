import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { Nav } from './components/Nav'
import { PageTransition } from './components/PageTransition'
import { ScrollToTop } from './components/ScrollToTop'
import { OrderProvider } from './context/OrderContext'
import { Home } from './pages/Home'
import { Order } from './pages/Order'
import { Whatsapp } from './pages/Whatsapp'

function Shell() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollToTop />
      <PageTransition />
      <div className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">
          <div key={pathname} className="page-in">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pedido" element={<Order />} />
              <Route path="/whatsapp" element={<Whatsapp />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  )
}

export function App() {
  return (
    <OrderProvider>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </OrderProvider>
  )
}
