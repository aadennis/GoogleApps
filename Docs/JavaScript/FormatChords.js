// Format chords in a Google Doc to be blue bold.
// See UsingFormatChords.js for an example of how to use this function.

function formatChordsInBlueBold() {
    var doc = DocumentApp.getActiveDocument();
    var body = doc.getBody();
    var text = body.getText();
    
    var regex = /\[[A-G][#b]?m?(maj|min|dim|aug|sus[24])?\d?\]/g; // Matches chord patterns
  
    var matches = text.matchAll(regex);
    
    for (let match of matches) {
      let start = match.index;
      let end = start + match[0].length;
      let range = body.editAsText();
      
      // Apply blue bold formatting
      range.setBold(start, end - 1, true);
      range.setForegroundColor(start, end - 1, "#0000FF");
    }
  }
  