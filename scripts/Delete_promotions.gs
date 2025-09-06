function deletePromotions() {
  var threads = GmailApp.search('category:promotions', 0, 500); // one batch
  if (threads.length > 0) {
    GmailApp.moveThreadsToTrash(threads);
    Logger.log("Deleted " + threads.length + " promotional emails.");
  } else {
    Logger.log("No promotional emails found.");
  }
}
