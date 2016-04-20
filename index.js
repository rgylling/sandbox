$(runDemo(window)); // jQuery's "onDocReady"



function runDemo(my) {
  // DOM elements
  var $cmd   = $('#cmd');
  var $dbOut = $('#dbOut');
  var $rmLog = $('#rmLog');
  var $loadingZone = $('#loadingZone');
  var $but1 = $('#butt1');
  var $but2 = $('#butt2');
  var $but3 = $('#butt3');
  var $but4 = $('#butt4');

  clearLog();

  my.articles = [];
  var articlesURL = 'articles.json';
  var fragmentName = '';

  // Render articles. Data must exist at this point!
  my.showArticles = function(A) {
    var articles = A;
    console.log('Async: Near top of showArticles(): articles='+articles);
    $.each(articles, function(i, a) {
      console.log('  a=' + a);
      var $row = $('<tr>');
      var $cell0 = $('<td>').text(a.author); $row.append($cell0);
      var $cell1 = $('<td>').text(a['title']); $row.append($cell1);
      var $cell2 = $('<td>').text(a['body']); $row.append($cell2);
      $dbOut.append($row);
    });
  };

  // Init SQL database. Wipe it clean; this is a demo and not Lab #8
  webDB.init();
  model.setupTable();

  // This is what the blog app would do on a localStorage cache miss
  // Get external data
  my.processJSON = function(data) {
    data.forEach(webDB.insertRecord);
    webDB.getAllArticles(my.showArticles);
  };
  $.getJSON(articlesURL, my.processJSON);

  my.checksemi = function() {
    var cv = $cmd.val();
    // Run SQL cmd if at least one semicolon is in the text area
    if (cv.match(/.+;/)) { webDB.runSQLcmd(cv); }
  };

  $rmLog.on('click', clearLog);

  // Check for semicolon on each textarea content change
  $cmd.on('input', my.checksemi);

  $but1.on('click', function(){
    var entry = {
      author:'Something Useful',
      title: 'This is our title',
      body: 'Here is our body'
    };
    webDB.insertRecord(entry);
  });

  $but2.on('click', function(){
    console.log('butt2 pressed');
    var command = 'DELETE FROM articles WHERE author = "Something Useful"';
    webDB.runSQLcmd(command);
  });

  $but3.on('click', function(){
    console.log('butt3 pressed');
    var command = 'CREATE TABLE publication (Articleid INT, magazine VARCHAR(50), year INT)';
    webDB.runSQLcmd(command);
  });

  $but4.on('click', function(){
    console.log('butt3 pressed');
    var command = 'INSERT INTO publication VALUES (4, "High Times", 2016)';
    webDB.runSQLcmd(command);
  });
};
