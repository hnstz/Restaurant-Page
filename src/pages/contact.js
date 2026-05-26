export default function ContactPage() {
    const contactDiv = document.createElement('div');
    contactDiv.innerHTML = `
            
        <div class="contact-container">
            <div class="contact-section">
                <h2>LOCATION</h2>
                <p>128 ELEGANCE BOULEVARD</p>
                <p>NEW YORK, NY 10012</p>
            </div>

            <div class="contact-section">
                <h2>HOURS</h2>
                <p>TUESDAY — SUNDAY</p>
                <p>18:00 — 23:00</p>
            </div>

            <div class="contact-section">
                <h2>INQUIRIES</h2>
                <p>PHONE: +1 (555) 012-3456</p>
                <p>EMAIL: INFO@LESSENCE.COM</p>
            </div>
        </div>

        <div class="map-placeholder">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200(https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200)" alt="District Map">
        </div>

        <p class="menu-footer">FOLLOW THE ESSENCE</p>
    `
    return contactDiv;
}