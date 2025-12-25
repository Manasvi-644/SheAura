export default function ProductCard({ product }) {
return (
<div style={cardStyle}>
<img
src={product.image}
alt={product.name}
style={imgStyle}
/>
<h4>{product.name}</h4>
<button style={btnStyle}>See More</button>
</div>
)
}


const cardStyle = {
border: '1px solid #ddd',
padding: '15px',
borderRadius: '8px',
textAlign: 'center'
}


const imgStyle = {
width: '100%',
height: '200px',
objectFit: 'cover'
}


const btnStyle = {
backgroundColor: 'rgba(195, 139, 220, 1)',
color: '#fbf5f5ff',
border: 'none',
padding: '8px 12px',
cursor: 'pointer',
borderRadius: '4px'
}