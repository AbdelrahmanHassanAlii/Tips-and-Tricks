// 1 - Using Fetch
fetch("https://fakestoreapi.com/products")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Fetch Result:", data);
  })
  .catch((error) => {
    console.error("Fetch Error:", error);
  });

//2 - Using Axios
import axios from "axios";
axios
  .get("https://fakestoreapi.com/products")
  .then((response) => {
    console.log("Axios Result:", response.data);
  })
  .catch((error) => {
    console.error("Axios Error:", error);
  });
