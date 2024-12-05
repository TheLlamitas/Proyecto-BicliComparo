import axios from "axios";

const CLOUD_NAME = "dhl1xkzwc"; 
const UPLOAD_PRESET = "my_upload_preset"; 

export const uploadImageToCloudinary = async (imageUri) => {
  try {
    const fileExtension = imageUri.split('.').pop().toLowerCase(); 
    const mimeType = `image/${fileExtension}`; 

    const allowedFormats = ["jpg", "jpeg", "png", "webp"];
    if (!allowedFormats.includes(fileExtension)) {
      throw new Error("Formato de archivo no permitido. Solo se permiten JPG, JPEG, PNG y WEBP.");
    }

    const formData = new FormData();
    formData.append("file", {
      uri: imageUri,
      type: mimeType, 
      name: `image.${fileExtension}`, 
    });
    formData.append("upload_preset", UPLOAD_PRESET);

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Imagen subida con éxito:", response.data.secure_url);
    return response.data.secure_url; 
  } catch (error) {
    console.error("Error al subir la imagen:", error.message);
    throw error;
  }
};
