import axios from "axios";

export function ImageUpload(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET!);

    axios
      .post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDNAME}/image/upload`, data)
      .then((response) => {
        console.log(response.data.secure_url);
        console.log(response.data);
        resolve(response.data.secure_url);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        reject(error);
      });
  });
}
