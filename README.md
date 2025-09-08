Gmail Cleanzer 🚀

Delete unnecessary and unwanted emails (Promotions, Social, Updates) in one go using Google Apps Script.

⚡ Features

Delete emails from Promotions, Social, and Updates tabs.

Run directly inside Google Apps Script, no extra software needed.

Safe: You can preview before deleting.

Works with Gmail + Google Sheets (easy setup).

🛠️ Step-by-Step Setup
1. Create a Google Sheet

Open Google Sheets
.

Create a new spreadsheet (name it e.g., Gmail Cleanzer).

2. Open Apps Script

In your sheet, click Extensions → Apps Script.

This will open the Apps Script editor in a new tab.

3. Copy the Code

In the editor, create new files and copy-paste the code from this repo:

promotions_cleaner.gs

social_cleaner.gs

updates_cleaner.gs

onopen.gs

4. Save & Authorize

Click File → Save.

Run any function (e.g., deletePromotions).

You will see a Google Authorization screen.

🔐 Authorization Process

You may see a warning: “Google hasn’t verified this app.”

Click Advanced.

Click Go to Gmail Cleanzer (unsafe).

Google will ask for permissions to access Gmail.

Click Allow.

👉 This only happens the first time.

5. Run the Cleaner

Go back to your Google Sheet.

At the top menu bar, you should now see 📧 Gmail Cleaner.

Choose one of the options:

Delete Promotions

Delete Social

Delete Updates

The script will process emails in batches and move them to Trash.

⚠️ Notes

Deleted emails go to Trash (auto-deleted permanently after 30 days).

To stop midway, click the red stop button in Apps Script.

By default, only 500 emails are processed per run to keep things safe.

You can edit the number inside the script if needed.

💡 Contribution

Pull requests welcome!
If you have improvements (better filters, scheduling, auto-cleanup), feel free to submit.

📜 License

MIT License
