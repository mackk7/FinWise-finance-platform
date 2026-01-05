# FinWise - Smart Finance Dashboard

FinWise is a modern, responsive personal finance application designed to help users track expenses, manage budgets, and visualize their financial health.

[**🔴 Live Demo**](https://finwise-your-project.vercel.app)

![Dashboard Screenshot](/public/banner.jpeg)

## 🚀 Features

* **📊 Visual Analytics:** Interactive charts for monthly expenses and income trends (Recharts).
* **💰 Budget Management:** Set and track monthly budgets with visual progress indicators.
* **📝 Transaction Tracking:** Detailed logs with filtering, sorting, and categorization.
* **🧾 Receipt Scanning:** UI for uploading and parsing receipts (AI integration ready).
* **📱 Fully Responsive:** Optimized for mobile, tablet, and desktop views.
* **🔐 Secure Auth:** Integrated Clerk authentication flow.

## 🛠️ Tech Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Components:** [Shadcn UI](https://ui.shadcn.com/)
* **Charts:** [Recharts](https://recharts.org/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Forms:** React Hook Form + Zod Validation

## ⚡ Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/YOUR_USERNAME/finwise-finance-platform.git](https://github.com/YOUR_USERNAME/finwise-finance-platform.git)
    cd finwise-finance-platform
    ```

2.  **Install dependencies:**

    ```bash
    # Use legacy-peer-deps to resolve React 19 conflicts
    npm install --legacy-peer-deps
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚧 Status & Architecture

This project currently operates in **Frontend Prototype Mode**.

* It uses sophisticated **Mock Data** and simulated API delays to demonstrate the full UI/UX flow without requiring a live backend connection.
* **Why?** To demonstrate frontend proficiency with Next.js App Router, Shadcn UI architecture, and complex state management before implementing the microservices backend.
* The next phase of development involves integrating a custom Express.js + MongoDB backend.

## 📄 License

MIT License. Feel free to use this code for your own portfolio!

---

### Reference

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
