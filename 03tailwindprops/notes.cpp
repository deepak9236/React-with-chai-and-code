Tailwind with Vita

setup vita:- https://vitejs.dev/guide/
    npm create vite@latest
    react
    JavaScript
    npm i
    npm run dev

setup Tailwind:- https://tailwindcss.com/docs/guides/vite
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

    Paste code:- tailwind.config.js
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],

    Paste code:- index.css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

    npm run dev

Pass object and array as a Props:- see in code and console
code it..