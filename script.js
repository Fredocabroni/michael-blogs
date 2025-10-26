// Blog posts data - Start adding your posts here!
const posts = [
    // Example format (delete this comment and add your real posts):
    // {
    //     date: "2025 Oct 27",
    //     title: "Your Post Title",
    //     category: "tech",
    //     excerpt: "Brief description of your post...",
    //     slug: "your-post-slug"
    // }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderPosts(posts);
    initCategoryFilter();
    initThemeToggle();
    initScrollProgress();
    initCursorGlow();
    checkEmptyState();
});

// Theme management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
}

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Cursor glow effect
function initCursorGlow() {
    const cursorGlow = document.getElementById('cursorGlow');
    let timeout;
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.style.opacity = '1';
        
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cursorGlow.style.opacity = '0';
        }, 3000);
    });
    
    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });
}

// Render posts
function renderPosts(postsToRender) {
    const container = document.getElementById('postsContainer');
    container.innerHTML = '';
    
    postsToRender.forEach((post, index) => {
        const postCard = createPostCard(post, index);
        container.appendChild(postCard);
    });
}

function createPostCard(post, index) {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.setAttribute('data-category', post.category);
    
    card.innerHTML = `
        <div class="post-header">
            <span class="post-date">${post.date}</span>
            <span class="post-category category-${post.category}">${post.category}</span>
        </div>
        <h2 class="post-title">${post.title}</h2>
        <p class="post-excerpt">${post.excerpt}</p>
    `;
    
    // Add click handler for navigating to individual post pages
    card.addEventListener('click', () => {
        if (post.slug) {
            window.location.href = `posts/${post.slug}.html`;
        } else {
            alert(`Post page for "${post.title}" coming soon! Use the template in posts/post-template.html to create it.`);
        }
    });
    
    return card;
}

// Check if posts are empty and show empty state
function checkEmptyState() {
    const emptyState = document.getElementById('emptyState');
    const postsContainer = document.getElementById('postsContainer');
    
    if (posts.length === 0) {
        emptyState.classList.add('show');
        postsContainer.style.display = 'none';
    } else {
        emptyState.classList.remove('show');
        postsContainer.style.display = 'grid';
    }
}

// Category filtering
function initCategoryFilter() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter posts
            const category = button.getAttribute('data-category');
            filterPosts(category);
        });
    });
}

function filterPosts(category) {
    const filteredPosts = category === 'all' 
        ? posts 
        : posts.filter(post => post.category === category);
    
    renderPosts(filteredPosts);
    checkEmptyState();
}

// Scroll progress indicator
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        
        progressBar.style.width = progress + '%';
    });
}

// Smooth scroll reveal
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.post-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        
        if (cardTop < window.innerHeight && cardBottom > 0) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});