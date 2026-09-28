# 📊 Prachi Jain — Portfolio & GitHub Profile Showcase

Personal portfolio website and GitHub profile kit tailored for **Prachi Jain** (Data Analytics Specialist & Data Scientist).

---

## 📁 Project Structure

```text
├── index.html            # Main portfolio website tailored for Prachi Jain
├── style.css             # Modern styling with Dark/Light themes, glassmorphism & responsive layout
├── script.js             # Interactive behavior: theme toggle, project filter, architecture modal, toast
├── PROFILE_README.md     # Ready-to-use README for your personal GitHub Profile (github.com/PrachiJain123)
└── README.md             # This guide on running locally & deploying to GitHub
```

---

## 💻 1. How to Preview the Portfolio Locally

Open PowerShell in this folder and run:
```powershell
python -m http.server 8000
```
Then visit:
👉 **`http://localhost:8000`**

*(If running from your home folder, access: `http://localhost:8000/OneDrive/Desktop/project_after_uber/`)*

---

## 🌐 2. Step-by-Step: Deploy to GitHub Pages (Free Hosting)

This will host your portfolio live on the internet at **`https://prachijain123.github.io`**!

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click the **+** icon in the top right and select **New repository**.
3. Name the repository: `prachijain123.github.io`.
4. Set it to **Public** and leave "Add a README" **unchecked**.
5. Click **Create repository**.

### Step 2: Push from Your Local Terminal
In this directory (`project_after_uber`), run:

```powershell
# Configure your Git identity (if not done yet)
git config --global user.name "Prachi Jain"
git config --global user.email "prachijain6699@gmail.com"

# Stage all files & make initial commit
git add .
git commit -m "Initial release of Prachi Jain portfolio"

# Set branch to main
git branch -M main

# Link to your new GitHub repository
git remote add origin https://github.com/PrachiJain123/prachijain123.github.io.git

# Push your code live!
git push -u origin main
```

### Step 3: Verify GitHub Pages
1. Go to your repository `prachijain123.github.io` on GitHub.
2. Click **Settings** ➡️ **Pages** (on the left menu).
3. Under **Build and deployment**:
   - **Source**: Deploy from a branch.
   - **Branch**: `main` and `/ (root)`.
   - Click **Save**.
4. In ~1 minute, your portfolio will be live at:  
   👉 **`https://prachijain123.github.io`**

---

## 👤 3. How to Set Up Your GitHub Profile README

To make your GitHub profile (`github.com/PrachiJain123`) look ultra-professional:

1. Go to [github.com/new](https://github.com/new).
2. Set the repository name to your exact username: **`PrachiJain123`**.
3. GitHub will show a banner: *"You found a secret! PrachiJain123/PrachiJain123 is a special repository..."*
4. Make sure it is **Public** and check **Add a README file**.
5. Open `PROFILE_README.md` from this folder, copy all contents, paste it into that repository's `README.md`, and commit!
