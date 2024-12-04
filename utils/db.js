import axios from "axios";
import { uploadImageToCloudinary } from "../utils/uploadImageToCloudinary"; 

const BACKEND_URL = "Su realtime database";

const getProducts = async () => {
  const response = await axios.get(`${BACKEND_URL}products.json`);
  const products = [];
  for (const key in response.data) {
    const product = {
      id: key,
      category: response.data[key].category,
      description: response.data[key].description,
      gallery: response.data[key].gallery,
      mainImage: response.data[key].mainImage,
      name: response.data[key].name,
      previousPrice: response.data[key].previousPrice,
      price: response.data[key].price,
      store: response.data[key].store,
      storeLogo: response.data[key].storeLogo,
    };
    products.push(product);
  }
  console.log("Fetched products....");
  return products;
};

const getProductById = async (id) => {
  const response = await axios.get(`${BACKEND_URL}/products/${id}.json`);
  const product = {
    id: id,
    category: response.data.category,
    description: response.data.description,
    gallery: response.data.gallery,
    mainImage: response.data.mainImage,
    name: response.data.name,
    previousPrice: response.data.previousPrice,
    price: response.data.price,
    store: response.data.store,
    storeLogo: response.data.storeLogo,
  };
  return product;
};

const addProduct = async (productData, imageUris = {}) => {
    const { mainImageUri = '', storeLogoUri = '', galleryUris = [] } = imageUris;
  
    try {
      const mainImageUrl = mainImageUri ? await uploadImageToCloudinary(mainImageUri) : '';
      const storeLogoUrl = storeLogoUri ? await uploadImageToCloudinary(storeLogoUri) : '';
      const galleryUrls = [];
  
      if (galleryUris.length > 0) {
        for (const uri of galleryUris) {
          const url = await uploadImageToCloudinary(uri);
          galleryUrls.push(url);
        }
      }
  
      const productWithImages = {
        ...productData,
        mainImage: mainImageUrl,
        storeLogo: storeLogoUrl,
        gallery: galleryUrls,
      };
  
      await axios.post(`${BACKEND_URL}products.json`, productWithImages);
  
      console.log('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error.message);
      throw error;
    }
  };

  const updateProduct = async (id, updatedData, mainImageUri = null, storeLogoUri = null, galleryUris = []) => {
    try {
      const updatedImages = {};
  
      if (mainImageUri) {
        const newMainImageUrl = await uploadImageToCloudinary(mainImageUri);
        updatedImages.mainImage = newMainImageUrl;
      }
  
      if (storeLogoUri) {
        const newStoreLogoUrl = await uploadImageToCloudinary(storeLogoUri);
        updatedImages.storeLogo = newStoreLogoUrl;
      }
  
      if (galleryUris.length > 0) {
        const newGalleryUrls = await Promise.all(
          galleryUris.map((uri) => uploadImageToCloudinary(uri))
        );
        updatedImages.gallery = newGalleryUrls;
      }
  
      const productWithUpdatedImages = {
        ...updatedData,
        ...updatedImages,
      };
  
      await axios.put(`${BACKEND_URL}products/${id}.json`, productWithUpdatedImages);
  
      console.log(`Product with ID ${id} updated successfully`);
    } catch (error) {
      console.error(`Error updating product with ID ${id}:`, error.message);
      throw error;
    }
  };

const deleteProduct = async (id) => {
  try {
    await axios.delete(`${BACKEND_URL}products/${id}.json`);
    console.log(`Product with ID ${id} deleted successfully`);
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error.message);
    throw error;
  }
};

export { getProducts, getProductById, addProduct, updateProduct, deleteProduct };
