// Product data
const products = {
    'GREEN': {
        name: 'GREEN CEDAR',
        subtitle: 'A Velvety, Rich Wood',
        price: '€145',
        label: 'green cedar',
        heroImage: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        notes: {
            top: 'Magnolia, cardamom<br>Cypriol, gusiac wood<br>Texas and atlas mountain cedar',
            heart: 'Cypriol, gusiac wood<br>Texas and atlas mountain cedar',
            base: 'Texas and atlas mountain cedar'
        },
        mood: 'Walking through dense forest — tree-tops swaying in the wind, soft moss underfoot, fragrant sap dripping from branches overhead. Green Cedar is a genderless, woody scent both intoxicating and invigorating.',
        additionalNotes: 'Tangerine, white peach<br>Bergamot, lemon zest<br>Pink pepper, eucalyptus'
    },
    'FLORAL': {
        name: 'ROSE GARDEN',
        subtitle: 'A Delicate, Romantic Bloom',
        price: '€165',
        label: 'rose garden',
        heroImage: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        notes: {
            top: 'Bulgarian rose, peony<br>Pink pepper, bergamot<br>Fresh morning dew',
            heart: 'Damask rose, jasmine<br>White tea, lily of the valley',
            base: 'White musk, sandalwood<br>Soft amber'
        },
        mood: 'Strolling through a blooming rose garden at dawn — petals glistening with dew, the air filled with romantic florals. Rose Garden captures the essence of timeless femininity and natural beauty.',
        additionalNotes: 'Lychee, blackcurrant<br>Violet leaves, green stems<br>Soft vanilla, cedar'
    },
    'WATER': {
        name: 'OCEAN BREEZE',
        subtitle: 'A Fresh, Aquatic Escape',
        price: '€135',
        label: 'ocean breeze',
        heroImage: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        notes: {
            top: 'Sea salt, marine accord<br>Cucumber, mint leaves<br>Citrus splash',
            heart: 'Water lily, seaweed<br>Driftwood, ocean mist',
            base: 'White sand, ambergris<br>Soft musk'
        },
        mood: 'Standing on a cliff overlooking endless blue waters — waves crashing below, salt air filling your lungs, the horizon stretching infinitely. Ocean Breeze embodies freedom and tranquility.',
        additionalNotes: 'Grapefruit, lime zest<br>Seagrass, coral<br>Driftwood, clean musk'
    },
    'CITRUS': {
        name: 'GOLDEN CITRUS',
        subtitle: 'A Bright, Energizing Burst',
        price: '€125',
        label: 'golden citrus',
        heroImage: 'https://images.pexels.com/photos/1414130/pexels-photo-1414130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        notes: {
            top: 'Sicilian lemon, orange<br>Grapefruit, lime zest<br>Sparkling bergamot',
            heart: 'Neroli, petitgrain<br>Orange blossom, mint',
            base: 'White tea, cedar<br>Clean musk'
        },
        mood: 'Walking through a sun-drenched citrus grove — golden fruits hanging heavy on branches, warm Mediterranean breeze, pure sunshine captured in a bottle. Golden Citrus radiates joy and vitality.',
        additionalNotes: 'Mandarin, yuzu<br>Basil leaves, ginger<br>Light woods, soft amber'
    },
    'AMBER': {
        name: 'WARM AMBER',
        subtitle: 'A Rich, Sensual Warmth',
        price: '€175',
        label: 'warm amber',
        heroImage: 'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        notes: {
            top: 'Saffron, cardamom<br>Pink pepper, bergamot<br>Honey drops',
            heart: 'Amber resin, labdanum<br>Rose petals, oud',
            base: 'Vanilla, sandalwood<br>Patchouli, white musk'
        },
        mood: 'Sitting by a crackling fireplace on a winter evening — golden flames dancing, warm blankets, the comfort of home. Warm Amber wraps you in luxurious, intimate warmth.',
        additionalNotes: 'Cinnamon, clove<br>Frankincense, myrrh<br>Benzoin, tonka bean'
    }
};

let currentProduct = 'GREEN';

function updateProduct(category) {
    const product = products[category];
    if (!product) return;
    
    currentProduct = category;
    
    // Update product info
    document.querySelector('.product-title').textContent = product.name;
    document.querySelector('.product-subtitle').textContent = product.subtitle;
    document.querySelector('.product-price').textContent = product.price;
    document.querySelector('.bottle-label').textContent = product.label;
    
    // Update fragrance notes
    const noteRows = document.querySelectorAll('.fragrance-notes .notes-row');
    noteRows[0].querySelector('.note-description').innerHTML = product.notes.top;
    noteRows[1].querySelector('.note-description').innerHTML = product.notes.heart;
    noteRows[2].querySelector('.note-description').innerHTML = product.notes.base;
    
    // Update mood description
    document.querySelector('.mood-description').textContent = product.mood;
    
    // Update additional notes
    document.querySelector('.additional-notes .note-description').innerHTML = product.additionalNotes;
    
    // Update hero background image
    const heroImage = document.querySelector('.hero-image');
    console.log('Updating hero image to:', product.heroImage);
    heroImage.style.backgroundImage = `url('${product.heroImage}')`;
    heroImage.style.backgroundSize = 'cover';
    heroImage.style.backgroundPosition = 'center';
    heroImage.style.backgroundRepeat = 'no-repeat';
    
    // Add animation effect
    const productSection = document.querySelector('.product-section');
    productSection.style.transform = 'scale(0.95)';
    productSection.style.opacity = '0.7';
    
    setTimeout(() => {
        productSection.style.transform = 'scale(1)';
        productSection.style.opacity = '1';
    }, 150);
}

document.addEventListener('DOMContentLoaded', function() {
    // Toggle switch functionality
    const toggleSwitch = document.getElementById('toggleSwitch');
    let isActive = false;

    toggleSwitch.addEventListener('click', function() {
        isActive = !isActive;
        if (isActive) {
            toggleSwitch.classList.add('active');
        } else {
            toggleSwitch.classList.remove('active');
        }
    });

    // Navigation item interactions
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        // Hover effects
        item.addEventListener('mouseenter', function() {
            this.style.color = '#333';
        });
        
        item.addEventListener('mouseleave', function() {
            if (this.textContent !== currentProduct) {
                this.style.color = '#666';
            }
        });
        
        // Click to change product
        item.addEventListener('click', function() {
            const category = this.textContent.trim();
            
            // Remove active state from all items
            navItems.forEach(navItem => {
                navItem.style.color = '#666';
                navItem.style.fontWeight = '500';
            });
            
            // Add active state to clicked item
            this.style.color = '#333';
            this.style.fontWeight = '600';
            
            // Update product
            updateProduct(category);
        });
    });
    
    // Set initial active state for GREEN
    const greenItem = Array.from(navItems).find(item => item.textContent.trim() === 'GREEN');
    if (greenItem) {
        greenItem.style.color = '#333';
        greenItem.style.fontWeight = '600';
    }

    // Quick Add button interaction
    const quickAddBtn = document.querySelector('.quick-add-btn');
    quickAddBtn.addEventListener('click', function() {
        // Add a subtle animation feedback
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
        
        // Show which product was added
        const productName = document.querySelector('.product-title').textContent;
        console.log(`${productName} added to cart`);
        
        // You could add a toast notification here
        const originalText = this.textContent;
        this.textContent = 'ADDED!';
        this.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = '#333';
        }, 1500);
    });

    // Smooth scroll behavior for more info link
    const moreInfoLink = document.querySelector('.more-info');
    moreInfoLink.addEventListener('click', function(e) {
        e.preventDefault();
        const productName = document.querySelector('.product-title').textContent;
        console.log(`More info clicked for ${productName}`);
    });

    // Add subtle parallax effect to hero image on scroll
    window.addEventListener('scroll', function() {
        const heroImage = document.querySelector('.hero-image');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${rate}px)`;
        }
    });
});