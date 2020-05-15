/*
function threadoremail(){
 
  var threads = GmailApp.search('subject:"sujet 1" -in:trash');
  Logger.log("----- BEFORE -----");
  loggerthreads(threads);
  
  var filtered = threads_getridoftrashedmessages(threads);
  Logger.log("----- AFTER -----" );
  Logger.log("Filtered:" );
  Logger.log(filtered);

 // loggerthreads(filtered);
  
  return 1;
}  


function threads_getridoftrashedmessages(threads){
    Logger.log("a" );

   var filtered = [ ];
  // var filtered[] = GmailApp.GmailThread;
  // const carré = new Rectangle(10, 10);
    Logger.log("ac" );

  var i =0;
  
      Logger.log("acc" );

  while(threads[i]){

    Logger.log("accc" );
    
   filtered[i] = GmailApp.GmailThread;

    var thread = threads[i];
    filtered[i] = thread_getridoftrashedmessages(thread);
    
    i++;
  }
    Logger.log("acccc" );
  
  return filtered;
}


function thread_getridoftrashedmessages(thread){
   Logger.log("b" );
  //var filtered = [ ];
  var filtered = GmailApp.GmailThread;
   Logger.log("bc" );

  var i =0;
  while(thread[i]){
     Logger.log("bcc" );

    var message = thread[i];
    var message_isintrash = message.isInTrash();
    Logger.log("--- message is in trash  " + message_isintrash );
    if( ! message_isintrash ) {
      filtered[i] = message;
      Logger.log("--- message added to filtered" );
      exit;
    }
    i++;    Logger.log("bccc" );

  }
   Logger.log("bcccc" );

  return filtered;
}
 
// -----------------------------------------------------------------------------
// Log a thread of messages.
function loggerthread(thread){
  var i = 0;
    
    while(thread[i]){
      
      var message = thread[i];
      Logger.log("-- MESSAGE number  " + i);
      
      var message_isintrash = message.isInTrash();
      Logger.log("--- message is in trash  " + message_isintrash );
          
      i++;
    }
  
}


// -----------------------------------------------------------------------------
// Log threads.
function loggerthreads(threads){

  // -----------------------------------------------------------------------------
  // https://developers.google.com/apps-script/reference/gmail/gmail-app#searchquery
  // Return folder id String from the folder path String.
  // search(query)
  // Search Gmail with the given query.
  // This call will fail when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, please use the 'paged' call, and specify ranges of the threads to retrieve in each call.
  // Find starred messages with subject IMPORTANT

  // var threads = GmailApp.search('is:starred subject:"IMPORTANT"');

  // Parameters
  // Name	Type	Description
  // query	String	the search query, as you would type it into Gmail
  // Return
  // GmailThread[] — an array of Gmail threads matching this query


  var i =0;
  while(threads[i]){
    
    var thread = threads[i];
    Logger.log("THREAD number  " + i);
    
    var thread_isintrash = thread.isInTrash();
    Logger.log("- thread is in trash  " + thread_isintrash );
    if ( thread_isintrash ) {
          Logger.log("Which means that at least one message of the thread is in Trash");
    }
    
    var thread_isinbox = thread.isInTrash();
    Logger.log("- thread is in inbox  " + thread_isinbox );

    // -----------------------------------------------------------------------------
    // https://developers.google.com/apps-script/reference/gmail/gmail-thread
    // https://developers.google.com/apps-script/reference/gmail/gmail-thread#getMessageCount()
    // GmailApp.GmailThread.getMessageCount()    
    
    var numberofmail = thread.getMessageCount();
    Logger.log("- nb of mails there  " + numberofmail);
    
    // -----------------------------------------------------------------------------
    // https://developers.google.com/apps-script/reference/gmail/gmail-thread#getMessages()
    // getMessages()
    // Gets the messages in this thread.
    
    // Log the subjects of the messages in the thread
    // var firstThread = GmailApp.getInboxThreads(0,1)[0];
    // var messages = firstThread.getMessages();
    // for (var i = 0; i < messages.length; i++) {
    // Logger.log(messages[i].getSubject());
    // }
    
    // Return
    // GmailMessage[] — an array of Gmail messages in this thread   
    
    var messages = thread.getMessages();
    
    loggerthread(messages);
    
    i++;
  }

  return 1;
}
*/





