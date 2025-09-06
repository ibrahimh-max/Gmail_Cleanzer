function deleteUpdatesCategoryEmails() {
  var query = "category:updates";
  var batchSize = 500;
  var totalDeleted = 0;

  while (true) {
    var threads = GmailApp.search(query, 0, batchSize);
    if (!threads || threads.length === 0) break;
    for (var i = 0; i < threads.length; i++) {
      threads[i].moveToTrash();
    }
    totalDeleted += threads.length;
    Logger.log("Deleted batch: " + threads.length + " (total " + totalDeleted + ")");
  }
  Logger.log("Finished! Total Updates emails moved to Trash: " + totalDeleted);
}
