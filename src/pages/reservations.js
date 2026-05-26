export default function ReservationsPage(){
    const reservationDiv = document.createElement('div');
    reservationDiv.innerHTML = `
    <div class="reservation-container">
    <p class="description">To ensure an private dining experience, we welcome guests by appointment only.</p>
    
    <form id="reservation-form">
        <div class="form-group">
            <input type="text" placeholder="FULL NAME">
        </div>
        
        <div class="form-group">
            <input type="email" placeholder="EMAIL ADDRESS">
        </div>

        <div class="form-row">
            <input type="date">
            <input type="time">
            <select>
                <option value="2">2 GUESTS</option>
                <option value="3">3 GUESTS</option>
                <option value="4">4 GUESTS</option>
                <option value="more">LARGE PARTY</option>
            </select>
        </div>

        <div class="form-group">
            <textarea placeholder="SPECIAL REQUESTS OR ALLERGIES"></textarea>
        </div>

        <button type="submit" class="submit-btn">REQUEST TABLE</button>
    </form>
    </div>

    <p class="menu-footer">DRESS CODE: ELEGANT ATTIRE</p>
    `
    return reservationDiv;
}