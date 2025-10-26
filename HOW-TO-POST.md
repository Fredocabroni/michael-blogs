# How to Create Blog Posts - Complete Guide

## Quick Start

Your blog now has a full post system! Click on "The Future of Decentralized AI" on your homepage to see an example.

## Creating a New Blog Post - Step by Step

### Method 1: Copy the Template (Easiest)

1. **Duplicate the template file:**
   - Go to the `posts/` folder
   - Copy `post-template.html`
   - Rename it to match your post (e.g., `my-new-post.html`)
   - Use lowercase and hyphens (e.g., `game-theory-basics.html`)

2. **Edit the HTML file:**
   - Open it in VS Code
   - Update the `<title>` tag
   - Update the `<meta name="description">` tag
   - Change the category badge class (`category-tech`, `category-philosophy`, etc.)
   - Update the date
   - Change the post title and subtitle
   - Write your content in the `<div class="post-body">` section
   - Update tags in the footer

3. **Add to homepage:**
   - Open `script.js`
   - Add your post to the TOP of the `posts` array:
   ```javascript
   {
       date: "2025 Oct 27",
       title: "Your Post Title",
       category: "tech",
       excerpt: "Brief description...",
       slug: "my-new-post"  // Must match the filename (without .html)
   }
   ```

4. **Deploy:**
   ```bash
   cd ~/Documents/michael-blog
   git add .
   git commit -m "Add new post: Your Post Title"
   git push
   ```

---

## Method 2: Use the Example as Reference

Look at `posts/decentralized-ai.html` - it's a fully written example post showing:
- Proper HTML structure
- How to format headings, paragraphs, lists
- Blockquotes for emphasis
- Code blocks
- Images (optional)
- Tags and sharing

Just copy this file, rename it, and replace the content!

---

## Writing Tips

### Structure Your Post

```
1. Compelling introduction (2-3 paragraphs)
2. Main sections with H2 headings
3. Subsections with H3 headings if needed
4. Conclusion that summarizes key points
```

### Use Formatting

- **Bold** for emphasis: `<strong>text</strong>`
- *Italic* for quotes or emphasis: `<em>text</em>`
- Links: `<a href="url">text</a>`
- Lists for scannable content
- Blockquotes for important quotes
- Code blocks for technical content

### Categories

Available categories:
- **tech** - Technology, programming, tools
- **philosophy** - Deep thinking, ethics, big ideas
- **theory** - Academic concepts, frameworks
- **economics** - Markets, money, value
- **crypto** - Blockchain, Web3, DeFi
- **fun** - Personal stories, lighter content

---

## HTML Elements You Can Use

### Headings
```html
<h2>Major Section</h2>
<h3>Subsection</h3>
```

### Paragraphs
```html
<p>Your text here...</p>
```

### Lists
```html
<ul>
    <li>Bullet point</li>
    <li>Another point</li>
</ul>

<ol>
    <li>Numbered item</li>
    <li>Another item</li>
</ol>
```

### Blockquotes
```html
<blockquote>
    "An important quote or key insight."
</blockquote>
```

### Code
```html
<code>inline code</code>

<pre><code>
function multiline() {
    return "code block";
}
</code></pre>
```

### Images (Optional)
```html
<figure class="post-image">
    <img src="../images/your-image.jpg" alt="Description">
    <figcaption>Caption explaining the image</figcaption>
</figure>
```

### Links
```html
<a href="https://example.com">Link text</a>
```

---

## Category CSS Classes

When you set the category badge, use these classes:

- `category-tech` - Cyan
- `category-philosophy` - Purple
- `category-theory` - Indigo
- `category-economics` - Amber/Orange
- `category-crypto` - Green
- `category-fun` - Pink

Example:
```html
<span class="post-category category-tech">Tech</span>
```

---

## SEO Tips

1. **Write good titles** - Clear, descriptive, under 60 characters
2. **Meta descriptions** - Compelling summary, 150-160 characters
3. **Use headings** - H2 and H3 for structure
4. **Add alt text** - Describe images for accessibility
5. **Internal links** - Link to other posts when relevant

---

## File Naming Convention

✅ **Good:**
- `decentralized-ai.html`
- `game-theory-basics.html`
- `my-crypto-journey.html`

❌ **Bad:**
- `Post 1.html`
- `new_post.html`
- `MyPost.html`

Always use lowercase and hyphens!

---

## Deployment Checklist

Before you push:

- [ ] Post HTML file is in `posts/` folder
- [ ] Post is added to `script.js` with correct slug
- [ ] Title and meta description are filled in
- [ ] Category is correct
- [ ] Date is accurate
- [ ] Tags are relevant
- [ ] Links work
- [ ] Preview locally (open HTML file in browser)

Then deploy:
```bash
git add .
git commit -m "Add new post: [Title]"
git push
```

---

## Quick Template

Here's the minimum HTML you need:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Title - Michael Fontanella</title>
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../post-styles.css">
</head>
<body>
    <div class="scroll-progress" id="scrollProgress"></div>
    <div class="background-gradient"></div>
    
    <nav class="post-nav">
        <div class="container">
            <a href="../index.html" class="back-link">← Back to Home</a>
            <button class="theme-toggle" id="themeToggle"></button>
        </div>
    </nav>

    <article class="post-article">
        <div class="container post-container">
            <header class="post-header-content">
                <div class="post-meta-top">
                    <span class="post-category category-tech">Tech</span>
                    <span class="post-date">October 27, 2025</span>
                </div>
                <h1 class="post-title-main">Your Title</h1>
                <p class="post-subtitle-main">Your subtitle</p>
            </header>

            <div class="post-body">
                <!-- YOUR CONTENT HERE -->
            </div>

            <footer class="post-footer">
                <a href="../index.html" class="back-to-home">← Back to all posts</a>
            </footer>
        </div>
    </article>

    <script src="../post-script.js"></script>
</body>
</html>
```

---

## Need Help?

- **See examples:** Look at `posts/decentralized-ai.html`
- **Use the template:** `posts/post-template.html`
- **Test locally:** Just open the HTML file in your browser before pushing

You've got everything you need to start blogging! 🚀