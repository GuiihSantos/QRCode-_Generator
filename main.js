async function generatorQRCode() {
  const qrInput = document.getElementById("qrInput").value.trim();
  const qrdImage = document.getElementById("qrCodeImage");

  if (qrInput === "") {
    document.getElementById("msgErro").innerText =
      "Please enter text or URL to generate QR code";
    return;
  }

  const apiURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    qrInput
  )}`;

  qrdImage.src = apiURL;

  document.getElementById("msgErro").innerText = "";
  document.getElementById("qrInput").value = "";
}

document
  .getElementById("generatorQRCode")
  .addEventListener("click", generatorQRCode);
