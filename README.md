# Gmail Cleanzer 🚀  

Delete unnecessary and unwanted emails (**Promotions, Social, Updates**) in one go using Google Apps Script.  

---

## ⚡ Features  
- Delete emails from **Promotions**, **Social**, and **Updates** tabs.  
- Run directly inside Google Apps Script, no extra setup required.  
- Safe: You can preview before deleting.  
- Works with Gmail + Google Sheets (easy setup).  

---

## 🛠️ Step-by-Step Setup  

### 1️⃣ Create a Google Sheet  
- Open [Google Sheets](https://sheets.google.com).  
- Create a new spreadsheet (name it e.g., **Gmail Cleanzer**).  

### 2️⃣ Open Apps Script  
- In your Sheet, click **Extensions → Apps Script**.  
- This opens the Apps Script editor in a new tab.  

### 3️⃣ Copy the Code  
- In the editor, create new files and copy-paste the code from this repo:  
  - `promotions_cleaner.gs`  
  - `social_cleaner.gs`  
  - `updates_cleaner.gs`  
  - `onopen.gs`  
- Replace the default `appsscript.json` with the one in this repo (this configures the custom menu).  

### 4️⃣ Save & Authorize  
- Click **File → Save**.  
- Run any function (e.g., `deletePromotions`).  
- You will be prompted with a Google Authorization screen.  

#### 🔐 Authorization Process  
1. You may see a warning: **“Google hasn’t verified this app.”**  
   - Click **Advanced**.  
   - Click **Go to Gmail Cleanzer (unsafe)**.  
2. Google will ask for permissions to access Gmail.  
   - Click **Allow**.  

👉 This only happens once during first-time setup.  

### 5️⃣ Run the Cleaner  
- Go back to your **Google Sheet**.  
- At the top menu bar, you should now see a new menu → **📧 Gmail Cleaner**.  
- From there, choose:  
  - `Delete Promotions`  
  - `Delete Social`  
  - `Delete Updates`  
- The script will process up to **500 emails per run** and move them to Trash.  

---

## ⚠️ Notes  
- Deleted emails go to **Trash** (auto-deleted permanently after 30 days).  
- To stop midway, click the red stop button in Apps Script.  
- Default: **500 emails per run** (you can edit the script to change this).  

---

## 💡 Contribution  
Pull requests are welcome!  
If you have improvements (better filters, scheduling, auto-cleanup), feel free to submit.  

---

## 📜 License  
MIT License  
