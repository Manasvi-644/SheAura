import { FiShoppingBag } from "react-icons/fi";

export default function Navbar() {
  return (
    <div style={navStyle}>
      {/* Left - Logo */}
      <img src="src/SheAura_logo.jpeg" alt="SheAura-logo" style={logoStyle} />
      

      {/* Right - Input + Sign In + Cart */}
      <div style={rightSectionStyle}>
        <input placeholder="Search on SheAura" style={inputStyle} />
        <button style={signInBtnStyle}>Sign In</button>

        <FiShoppingBag size={24} style={cartIconStyle} />
      </div>
    </div>
  );
}

// Styling
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
  borderRadius: "8px",
  backgroundColor: "lavender",
  color: "#4b2e83",
  border: "1px solid #4b2e83"
};

const logoStyle = {
  width: "100px",
  height: "auto",
  objectFit: "contain",
};

const rightSectionStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const signInBtnStyle = {
  padding: "8px 16px",
  backgroundColor: "lavender",
  color: "#4b2e83",
  border: "1px solid #4b2e83",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
};

const cartIconStyle = {
  cursor: "pointer",
};
