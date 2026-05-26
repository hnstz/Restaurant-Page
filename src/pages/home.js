
export default function HomePage() {
    const homeDiv = document.createElement('div');
    homeDiv.innerHTML = `
    <div id="content">
        <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" 
             alt="Minimalist Table Setting" 
             class="hero-image">
        
        <h1>RESTAURANT</h1>
        <div class="divider"></div>
        
        <p class="description">
            Experience the harmony of seasonal simplicity and culinary precision. 
            Located in the heart of the city, we offer an private journey through 
            flavors that speak for themselves.
        </p>

        <p style="margin-top: 40px; font-size: 0.9rem; color: #888;">
            EST. 2026 — NOIR COLLECTION
        </p>
    </div>
    `;
    return homeDiv;
}