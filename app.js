// 1. Initial Data (Imagine this comes from Supabase later)
const coupons = [
    {
        id: 1,
        logo: '☕',
        name: 'The Hot Chocolate Spot',
        offer: '15% OFF!',
        details: 'Any Hot Chocolate or Pastry. Valid until Nov 30.',
        color: 'bg-blue-600'
    },
    {
        id: 2,
        logo: '🌮',
        name: 'Tacos & More',
        offer: 'BUY 2 TACOS, GET 1 FREE',
        details: 'Tuesdays Only. Mention this ad.',
        color: 'bg-green-600'
    }
];

// 2. DOM Elements
const feed = document.getElementById('coupon-feed');
const addBtn = document.getElementById('add-btn');
const modal = document.getElementById('add-modal');
const closeBtn = document.getElementById('close-modal');
const saveBtn = document.getElementById('save-coupon');

// 3. Function to render coupons
function renderCoupons() {
    feed.innerHTML = ''; // Clear current feed
    coupons.forEach(coupon => {
        const card = `
            <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform transition-all hover:scale-105">
                <div class="flex items-center mb-4">
                    <div class="text-4xl mr-4">${coupon.logo}</div>
                    <div>
                        <h3 class="text-xl font-bold text-gray-900">${coupon.name}</h3>
                        <p class="text-sm text-gray-600">${coupon.details}</p>
                    </div>
                </div>
                <div class="bg-gray-50 border-l-4 border-blue-600 p-4 mb-4 rounded">
                    <p class="text-2xl font-extrabold text-blue-900">${coupon.offer}</p>
                </div>
                <button onclick="redeemCoupon('${coupon.name}')" 
                        class="w-full ${coupon.color} text-white font-bold py-3 px-4 rounded-lg shadow hover:opacity-90 transition duration-150 flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clip-rule="evenodd" />
                    </svg>
                    REDEEM DEAL
                </button>
            </div>
        `;
        feed.innerHTML += card;
    });
}

// 4. Placeholder Redeem Function
function redeemCoupon(bizName) {
    alert(`Visit ${bizName} now and show this screen to claim the discount!`);
}

// 5. Simple Admin Modal Logic
addBtn.addEventListener('click', () => {
    // In a real app, add a password prompt here
    const password = prompt("Enter Admin Password (hint: 1234):");
    if (password === '1234') {
        modal.classList.remove('hidden');
    } else {
        alert('Incorrect Password');
    }
});

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

saveBtn.addEventListener('click', () => {
    const name = document.getElementById('biz-name').value;
    const offer = document.getElementById('biz-offer').value;
    const details = document.getElementById('biz-details').value;

    if (name && offer && details) {
        const newCoupon = {
            id: Date.now(),
            logo: '📍', // Default generic icon
            name: name,
            offer: offer,
            details: details,
            color: 'bg-purple-600' // New color for added deals
        };
        
        coupons.push(newCoupon);
        renderCoupons();
        
        // Reset form and close modal
        document.getElementById('biz-name').value = '';
        document.getElementById('biz-offer').value = '';
        document.getElementById('biz-details').value = '';
        modal.classList.add('hidden');
    } else {
        alert('Please fill in all fields.');
    }
});

// Initial Render
renderCoupons();
