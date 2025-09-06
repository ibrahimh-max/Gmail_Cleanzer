function deleteSpamEmails() {
  var threads = GmailApp.search("label:spam", 0, 500);
  for (var i = 0; i < threads.length; i++) {
    threads[i].moveToTrash();
  }
  Logger.log("Moved " + threads.length + " spam threads to Trash.");
}
