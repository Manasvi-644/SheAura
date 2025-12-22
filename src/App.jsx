import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import { products } from './data'


export default function App() {
return (
<div style={{ fontFamily: 'Arial, sans-serif' }}>
<Navbar />


<h2 style={{ textAlign: 'center', margin: '20px 0', color: '#e80071', fontFamily: '"Playfair Display", serif',fontWeight: '900'}}>
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