function previewImage() {
  const input = document.getElementById("imageInput");
  const img = document.getElementById("uploadedImage");
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      img.src = e.target.result;
      img.style.display = "block";
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    img.style.display = "none";
  }
}

async function uploadImage() {
  const input = document.getElementById("imageInput");
  if (!input.files[0]) {
    alert("Please select a file!");
    return;
  }
  const file = input.files[0];
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("http://127.0.0.1:8000/predict-image/", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    document.getElementById(
      "predictionResult"
    ).textContent = `Prediction: ${result.prediction}`;
  } catch (error) {
    console.error(error);
    alert("Failed!");
  }
}
