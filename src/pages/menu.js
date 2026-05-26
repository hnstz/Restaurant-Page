export default function MenuPage() {
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `
        <div class="menu-section">
            <div class="menu-item">
                <div class="item-header">
                    <span>WILD MUSHROOM VELOUTÉ</span>
                    <span>18</span>
                </div>
                <p class="item-description">Truffle essence, chive oil, toasted sourdough</p>
            </div>

            <div class="menu-item">
                <div class="item-header">
                    <span>BLACK COD & MISO</span>
                    <span>42</span>
                </div>
                <p class="item-description">Pickled ginger, bok choy, dashi reduction</p>
            </div>

            <div class="menu-item">
                <div class="item-header">
                    <span>AGED RIBEYE STEAK</span>
                    <span>56</span>
                </div>
                <p class="item-description">Bone marrow butter, smoked sea salt, charred leeks</p>
            </div>

            <div class="menu-item">
                <div class="item-header">
                    <span>DARK CHOCOLATE NOIR</span>
                    <span>15</span>
                </div>
                <p class="item-description">70% cacao, gold leaf, sea salt caramel</p>
            </div>
        </div>

        <p class="menu-footer">SEASONAL CURATION</p> 
    `
    return menuDiv;
}
