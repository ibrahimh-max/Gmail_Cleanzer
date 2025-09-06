function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Inbox Cleaner')
    .addItem('Preview Spam', 'listSpamToSheet')
    .addItem('Delete Marked (Preview)', 'deleteMarkedRows')
    .addItem('Delete All Social', 'deleteSocialCategoryEmails')
    .addToUi();
}
