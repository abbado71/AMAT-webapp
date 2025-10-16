// Endpoint JSON per fetch dal frontend
function getMessage() {
  return { message: "Ciao dal backend!" };
}

function doGet(e) {
  // Se vuoi servire l'HTML
  return HtmlService.createHtmlOutputFromFile("index")
    .setTitle("AMAT - Biglietti")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Endpoint JSON esposto come Web App
function doGetJson(e) {
  const output = { message: "Ciao dal backend!" };
  return ContentService
    .createTextOutput(JSON.stringify(output))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*");
}
