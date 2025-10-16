function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
    .setTitle("AMAT - Biglietti")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}