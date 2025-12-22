export default function Navbar() {
  return (
    <>
      <div style={navStyle}>
        <img src="src/logo.jpeg" alt="nykaa-logo" style={logoStyle} />
        <input placeholder="Search products" style={inputStyle}/>
      </div>
    </>
  );
}
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 25px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  flexWrap: "wrap", 
};
const inputStyle = {
  padding: "8px 12px",
  width: "200px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};
const logoStyle = {
  width: '100px',      // 👈 reduce size here
  height: 'auto',     
  objectFit: 'contain'
}