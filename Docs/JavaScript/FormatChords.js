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
    range.setForegroundColor(start, end - 1, '#0000FF');
  }
}

function transposeChords() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  var chordMap = {
    C: 'G',
    G: 'D',
    Am: 'Em',
    F: 'C',
  };

  var text = body.getText();

  // Ensure only whole words (chords) are matched and replaced
  var regex = /\b(C|G|Am|F)\b/g;

  // Replace chords with their transposed versions and wrap them in square brackets
  text = text.replace(regex, function (match) {
    return '[' + chordMap[match] + ']';
  });

  // Set the modified text back to the document
  body.setText(text);
}

function boldChordsInBrackets() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var text = body.editAsText();

  var regex = /\[[^\]]+\]/g; // Matches anything inside square brackets, inclusive

  var matches = text.getText().matchAll(regex);

  for (let match of matches) {
    let start = match.index;
    let end = start + match[0].length - 1;

    text.setBold(start, end, true);
  }
}

function setAllTextToRobotoSlab19pt() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var text = body.editAsText();

  // Apply font and size to the entire text
  text.setFontFamily('Roboto Slab');
  text.setFontSize(19);
}

// This function deletes spaces after chords in the selected text
// It assumes chords are formatted like [C], [G], etc. and removes spaces after the closing bracket
function deleteSpacesAfterChordsInSelection() {
  const selection = DocumentApp.getActiveDocument().getSelection();
  if (!selection) {
    DocumentApp.getUi().alert('Please select some text first.');
    return;
  }

  const elements = selection.getRangeElements();

  for (const el of elements) {
    if (el.getElement().editAsText) {
      const textEl = el.getElement().editAsText();
      const start = el.getStartOffset();
      const end = el.getEndOffsetInclusive();

      if (start !== -1 && end !== -1) {
        const original = textEl.getText().substring(start, end + 1);
        const cleaned = original.replace(/\]( +)/g, ']');
        textEl.deleteText(start, end);
        textEl.insertText(start, cleaned);
      }
    }
  }
}

// This function creates a custom menu in Google Docs to access the chord formatting tools
function onOpen() {
  DocumentApp.getUi()
    .createMenu('Chords Tools')
    .addItem('Clean Up Chord Spacing', 'deleteSpacesAfterChordsInSelection')
    .addToUi();
}
