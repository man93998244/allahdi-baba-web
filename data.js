
// Données simulées pour la démonstration (à remplacer par une vraie base de données / API)

const PRODUCTS = [
  { id: 1, name: "Montre connectée sport", price: 24.99, rating: 4.5, seller: "TechShop Dakar", country: "Sénégal", minQty: 1, img: "" },
  { id: 2, name: "Sac à dos voyage 40L", price: 18.50, rating: 4.2, seller: "Baggage Pro", country: "Côte d'Ivoire", minQty: 5, img: "" },
  { id: 3, name: "Lot de 100 t-shirts unis", price: 199.00, rating: 4.8, seller: "TextilePlus", country: "Chine", minQty: 100, img: "" },
  { id: 4, name: "Casque audio sans fil", price: 15.90, rating: 4.0, seller: "TechShop Dakar", country: "Sénégal", minQty: 1, img: "" },
  { id: 5, name: "Chaussures de sport (lot de 12)", price: 89.00, rating: 4.6, seller: "ShoeWorld", country: "Turquie", minQty: 12, img: "" },
  { id: 6, name: "Chargeur solaire portable", price: 12.30, rating: 3.9, seller: "EnergyGo", country: "Sénégal", minQty: 1, img: "" },
];

// Utilisateur courant simulé (stocké en local pour la démo)
function getCurrentUser() {
  const data = localStorage.getItem('ab_user');
  return data ? JSON.parse(data) : null;
}

function setCurrentUser(user) {
  localStorage.setItem('ab_user', JSON.stringify(user));
}

function isFirstUserEver() {
  return localStorage.getItem('ab_admin_assigned') !== 'true';
}

function markAdminAssigned() {
  localStorage.setItem('ab_admin_assigned', 'true');
}

function formatPrice(p) {
  return p.toFixed(2) + " $";
}

function renderStars(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}
