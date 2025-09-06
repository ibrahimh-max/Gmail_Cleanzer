# Gmail Cleanzer 🚀

Delete unnecessary and unwanted emails (Promotions, Social, Updates) in one go using Google Apps Script.

---

## ⚡ Features
- Delete emails from **Promotions**, **Social**, and **Updates** tabs.
- Run directly inside Google Apps Script, no extra setup required.
- Safe: You can preview before deleting.

---

## 🛠️ Step-by-Step Setup

### 1. Open Google Apps Script
- Go to [Google Apps Script](https://script.google.com/).
- Click on **New Project**.

### 2. Copy the Code
- In the editor, create new files and copy-paste the code from this repo:
  - `promotions_cleaner.gs`
  - `social_cleaner.gs`
  - `updates_cleaner.gs`
  - `onopen.gs`
- Replace `appsscript.json` with the one from this repo (to configure menus).

### 3. Save & Authorize
- Click **File → Save**.
- Run any function (e.g., `deletePromotions`).
- Google will ask for permissions → approve.

### 4. Run the Cleaner
- After authorization, go to the **Gmail Cleaner** menu (in the top bar).
- Choose:
  - `Delete Promotions`
  - `Delete Social`
  - `Delete Updates`
- The script will process emails in bulk and move them to Trash.

---

## ⚠️ Notes
- Deleted emails go to **Trash** (they will be permanently removed after 30 days).
- To stop midway, click the red stop button in Apps Script.
- You can edit the script to change how many days back it deletes.

---

## 💡 Contribution
Pull requests welcome! If you have improvements (like better filters, automatic scheduling, etc.), feel free to submit.

---

## 📜 License
MIT License

