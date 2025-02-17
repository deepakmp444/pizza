# PizzaHub - Modern Pizza Landing Page

A modern, responsive pizza landing page built with Next.js and Tailwind CSS. This project showcases a beautiful and functional website for a pizza restaurant, complete with menu, ordering system, and customer reviews.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-first approach
- 🍕 Interactive menu with beautiful cards
- ⭐ Customer reviews and testimonials
- 📝 Contact form
- 🚀 Fast and optimized performance
- 🎯 SEO friendly

## Tech Stack

- Next.js 14
- Tailwind CSS
- Headless UI
- Hero Icons
- Google Fonts

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pizza-landing-page.git
   cd pizza-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
pizza-landing-page/
├── app/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Menu.js
│   │   ├── About.js
│   │   ├── Reviews.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── page.js
│   ├── layout.js
│   └── globals.css
├── public/
│   └── images/
├── tailwind.config.js
└── package.json
```

## Customization

### Colors
The project uses a custom color palette that can be modified in `tailwind.config.js`. The primary color scheme is based on red tones, but you can easily change this to match your brand.

### Images
Replace the images in the `public/images` directory with your own images. Make sure to maintain the same filenames or update the references in the components.

### Content
Update the content in each component to match your restaurant's information:
- Menu items and prices in `Menu.js`
- About section content in `About.js`
- Customer reviews in `Reviews.js`
- Contact information in `Contact.js`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
