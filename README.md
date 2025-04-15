# My Portfolio

A modern, responsive portfolio website built with React and Three.js, featuring interactive 3D elements, animations, and a clean design aesthetic.

## 🚀 Technologies Used

- **Frontend Framework**
  - React 19.0.0
  - Vite 6.2.0
  - TailwindCSS 4.1.3

- **3D Graphics & Animation**
  - Three.js
  - @react-three/fiber
  - @react-three/drei
  - @react-three/postprocessing
  - GSAP for animations

- **Additional Libraries**
  - EmailJS for contact form
  - React CountUp for animated statistics
  - React Responsive for responsive design

## ✨ Features

- Interactive 3D room scene in hero section
- Smooth scrolling animations using GSAP
- Responsive design that works on all devices
- Dynamic project showcase section
- Real-time form validation
- Animated statistics and counters
- Testimonials section with glowing cards
- Tech stack visualization with 3D models
- Professional experience timeline
- Dark theme with modern UI elements

## 🛠️ Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/harshitxrajput/portfolio.git
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with your EmailJS credentials:
```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server
```bash
npm run dev
```

## 🏗️ Project Structure

```
portfolio/
├── public/
│   ├── images/
│   └── models/
├── src/
│   ├── components/
│   ├── sections/
│   ├── constants/
│   └── app.jsx
├── .env
└── package.json
```

## 🌟 Performance Optimizations

- Lazy loading of 3D models
- Optimized asset loading
- Efficient state management
- Debounced scroll handlers
- Compressed textures and models

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px to 1023px)
- Mobile (below 768px)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any queries or suggestions, feel free to reach out:
- Email: your.email@example.com
- LinkedIn: [Harshit Rajput](https://linkedin.com/in/harshit-rajput-11a23b2b7)
- Twitter: [@harshitxrajput](https://twitter.com/harshitxrajput)

---

⭐ If you found this project helpful, please consider giving it a star!
