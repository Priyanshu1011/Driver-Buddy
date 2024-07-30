document
  .getElementById("fileUploadForm")
  .addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the file input element and the selected file
    const fileInput = document.getElementById("audioFileInput");
    const file = fileInput.files[0];
    // console.log(file); no error here

    if (file) {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append("audioFile", file);
      //   console.log(formData);
      window.location.href = "../buddy-interface/buddy-interface.html";

      // Send the file using a POST request to the API endpoint
      const API_ENPOINT = "";
      //   fetch(API_ENPOINT, {
      //     method: "POST",
      //     body: formData,
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       console.log("Success: ", data);
      //       // Redirect to the split.html page
      //       //   window.location.href = "split.html";
      //     })
      //     .catch((error) => {
      //       console.error("Error: ", error);
      //     });
    } else {
      alert("Oops! You forgot to select a voice recording!");
    }
  });
