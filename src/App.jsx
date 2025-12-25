import CategoryBar from "./components/CategoryBar";
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import { products } from './data'
import "./App.css"


export default function App() {
return (
    
<div style={{ fontFamily: 'Arial, sans-serif' }}>
<Navbar />

<div>
      <CategoryBar />
</div>


<h2 style={{ textAlign: 'center', margin: '20px 0', color: 'rgba(2, 2, 2, 1)', fontFamily: '"Playfair Display", serif',fontWeight: '900'}}>
Beauty Products
</h2>


<div style={gridStyle}>
{products.map(p => (
<ProductCard key={p.id} product={p} />
))}
</div>








<Footer />
</div>
)
}


const gridStyle = {
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
gap: '20px',
padding: '20px'
}


