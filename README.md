# Michael Fontanella's Blog

A modern, sleek personal blog with gradient backgrounds, glassmorphism effects, and smooth animations.

## Features

- 🎨 Beautiful gradient color scheme (deep blues, purples, cyan)
- 🌓 Dark/Light mode toggle with smooth transitions
- 🏷️ Category filtering (Tech, Philosophy, Personal, Crypto)
- ✨ Glassmorphism card effects with hover animations
- 📱 Fully responsive design
- ⚡ Fast and lightweight (static HTML/CSS/JS)

## Color Scheme

### Dark Mode
- Deep navy backgrounds (#0a0e27, #151932)
- Cyan accent (#00d9ff)
- Purple accent (#7c3aed)
- Pink accent (#ec4899)

### Light Mode
- Clean white backgrounds
- Sky blue accent (#0ea5e9)
- Purple accent (#8b5cf6)
- Pink accent (#ec4899)

## How to Deploy to Cloudflare Pages

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. In your terminal, navigate to this folder and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Log into Cloudflare Dashboard
2. Go to **Workers & Pages**
3. Click **Create application** → **Pages** → **Connect to Git**
4. Select your GitHub repository
5. Configure settings:
   - **Production branch:** main
   - **Build command:** (leave empty)
   - **Build output directory:** / (or leave empty)
6. Click **Save and Deploy**

Your site will be live at `https://your-project.pages.dev` in about a minute!

### Step 3: Add Your Custom Domain

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your Namecheap domain
4. In Namecheap, update your nameservers to Cloudflare's (they'll provide these)
5. Wait 24-48 hours for DNS propagation

## How to Add New Blog Posts

Open `script.js` and add a new post object to the `posts` array at the top:

```javascript
{
    date: "2025 Oct 27",
    title: "Your New Post Title",
    category: "tech", // tech, philosophy, personal, or crypto
    excerpt: "A brief description of your post that appears on the homepage."
}
```

Then commit and push to GitHub - Cloudflare Pages will automatically redeploy!

```bash
git add .
git commit -m "Add new blog post"
git push
```

## Creating Individual Post Pages (Optional)

To create full blog post pages:

1. Create a `posts` folder
2. Create HTML files like `posts/your-post-title.html`
3. Copy the structure from `index.html` but replace the posts grid with your article content
4. Update the click handler in `script.js` to navigate to the actual post page

Example post page structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Post Title - Michael Fontanella</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1><a href="../index.html">← Back to Home</a></h1>
        </div>
    </header>
    <main class="container">
        <article>
            <h1>Your Post Title</h1>
            <p>Your post content here...</p>
        </article>
    </main>
</body>
</html>
```

## File Structure

```
michael-blog/
├── index.html      # Homepage with post listings
├── styles.css      # All styling and animations
├── script.js       # Post data and interactivity
└── README.md       # This file
```

## Customization

### Change Colors
Edit the CSS variables in `styles.css` under `:root` for dark mode and `[data-theme="light"]` for light mode.

### Modify Categories
1. Update category buttons in `index.html`
2. Add corresponding CSS in `styles.css` (search for `.category-`)
3. Use new category names in your posts in `script.js`

### Adjust Animations
Animation timings and effects can be modified in `styles.css` under the `@keyframes` section and `transition` properties.

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

## License

Free to use and modify for your personal blog!

---

Built with ❤️ by Michael Fontanella