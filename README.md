# PhiShield

**PhiShield** is a phishing detection web application designed to help users identify, prevent, and learn about phishing attempts. It combines modern web technologies to provide a secure, intuitive, and educational platform for users to stay safe online.

---

## Project Description

Phishing remains one of the most common cybersecurity threats, tricking users into sharing sensitive information such as login credentials, financial details, or personal data. PhiShield aims to combat this by providing:

* **Real-time detection tools**: Identify potentially malicious links and suspicious email content.
* **Educational resources**: Help users understand phishing techniques and how to avoid them.
* **User-friendly experience**: Accessible web interface with clear insights and guidance.
* **Secure user accounts**: Protect user data and personalize the experience through strong authentication and encryption.

PhiShield is built with the following stack:

* **Frontend:** React (modern and responsive UI)
* **Backend:** Node.js
* **Database:** MySQL (user accounts, detection logs, learning modules)

The system is designed with a focus on **security, scalability, and usability**, making it suitable for both individual users and organizations that want to educate their members about phishing risks.

---

## Key Features

* **User Authentication & Security**

  * Secure registration and login with encrypted credentials
  * JWT-based authentication with httpOnly cookies
* **Phishing Link Checker**

  * Submit a URL and receive feedback on potential risks
  * Integration with phishing detection algorithms and external APIs
* **Dashboard**

  * View detection history, flagged attempts, and personal stats
* **Learning Hub**

  * Educational content, quizzes, and interactive guides about phishing
* **Admin Tools** (future)

  * Manage users and monitor phishing detection reports

---

## Goals

1. Provide a **safe environment** for users to test and verify suspicious links.
2. Improve **awareness and education** around phishing tactics.
3. Deliver a **secure and scalable** system with modern best practices.
4. Create a foundation for expanding into broader cybersecurity awareness tools.

---

## Tech Stack

* **Frontend**: React
* **Backend**: Node.js
* **Database**: MySQL (with `mysql2` driver)
* **Dev Tools**: Nodemon, ESLint, Git/GitHub

---

## Installation (Development Setup)

### Prerequisites

* Node.js v18+
* MySQL Server
* Git

### Steps

```bash
# Clone repository
git clone https://github.com/your-username/PhiShield.git
cd PhiShield

# Backend setup
cd backend
npm install
cp .env.example .env   # fill in DB and JWT details
npm run dev

# Frontend setup
cd ../frontend
npm install
cp .env.example .env.local   # set API URL
npm run dev
```

---

## Roadmap

* [x] Setup project structure (frontend, backend, database)
* [x] Implement secure authentication system
* [ ] Add phishing link analysis feature
* [ ] Build user dashboard with detection logs
* [ ] Create learning hub with quizzes and guides
* [ ] Add admin panel
* [ ] Deployment and production hardening

---

## Contributing

1. Fork the repository
2. Create a new branch (`feature/your-feature-name`)
3. Commit your changes
4. Push to your fork and open a Pull Request

---

## License

This project is licensed under the MIT License.
