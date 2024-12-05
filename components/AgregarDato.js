import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import { addProduct, updateProduct } from '../utils/db';
import * as ImagePicker from 'expo-image-picker';

const AgregarDato = ({ fetchProducts, selectedProduct, clearSelection }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [previousPrice, setPreviousPrice] = useState('');
  const [store, setStore] = useState('');
  const [mainImageUri, setMainImageUri] = useState('');
  const [storeLogoUri, setStoreLogoUri] = useState('');
  const [galleryUris, setGalleryUris] = useState([]);

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso Denegado', 'Se necesita acceso a la galería para seleccionar imágenes.');
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name || '');
      setCategory(selectedProduct.category || '');
      setDescription(selectedProduct.description || '');
      setPrice(selectedProduct.price ? String(selectedProduct.price) : '');
      setPreviousPrice(selectedProduct.previousPrice ? String(selectedProduct.previousPrice) : '');
      setStore(selectedProduct.store || '');
      setMainImageUri(selectedProduct.mainImageUri || '');
      setStoreLogoUri(selectedProduct.storeLogoUri || '');
      setGalleryUris(selectedProduct.galleryUris || []);
    } else {
      setName('');
      setCategory('');
      setDescription('');
      setPrice('');
      setPreviousPrice('');
      setStore('');
      setMainImageUri('');
      setStoreLogoUri('');
      setGalleryUris([]);
    }
  }, [selectedProduct]);

  const selectImage = async (setImageUri) => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    } else {
      Alert.alert('Error', 'No se seleccionó ninguna imagen.');
    }
  };

  const selectMultipleImages = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedUris = result.assets.map((item) => item.uri);
      setGalleryUris((prev) => [...prev, ...selectedUris]);
    } else {
      Alert.alert('Error', 'No se seleccionaron imágenes.');
    }
  };

  const handleAddOrUpdateProduct = async () => {
    if (!name || !category || !description || !price || !store || !mainImageUri || !storeLogoUri) {
      Alert.alert('Error', 'Por favor, completa todos los campos requeridos e incluye las imágenes.');
      return;
    }
  
    const productData = {
      name,
      category,
      description,
      price: parseFloat(price),
      previousPrice: parseFloat(previousPrice) || 0,
      store,
    };
  
    try {
      if (selectedProduct) {
        await updateProduct(selectedProduct.id, productData, mainImageUri, storeLogoUri, galleryUris);
        Alert.alert('Éxito', `Producto "${name}" actualizado correctamente.`);
      } else {
        await addProduct(productData, {
          mainImageUri,
          storeLogoUri,
          galleryUris,
        });
        Alert.alert('Éxito', `Producto "${name}" añadido correctamente.`);
      }
  
      clearSelection();
      fetchProducts();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo procesar la solicitud. Inténtalo de nuevo.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{selectedProduct ? 'Actualizar Producto' : 'Agregar Producto'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del producto"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoría"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio actual"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio anterior (opcional)"
        keyboardType="numeric"
        value={previousPrice}
        onChangeText={setPreviousPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre de la tienda"
        value={store}
        onChangeText={setStore}
      />

      <Text style={styles.label}>Imagen Principal</Text>
      <TouchableOpacity onPress={() => selectImage(setMainImageUri)} style={styles.imagePicker}>
        {mainImageUri ? <Image source={{ uri: mainImageUri }} style={styles.imagePreview} /> : <Text>Seleccionar Imagen</Text>}
      </TouchableOpacity>

      <Text style={styles.label}>Logo de la Tienda</Text>
      <TouchableOpacity onPress={() => selectImage(setStoreLogoUri)} style={styles.imagePicker}>
        {storeLogoUri ? <Image source={{ uri: storeLogoUri }} style={styles.imagePreview} /> : <Text>Seleccionar Imagen</Text>}
      </TouchableOpacity>

      <Text style={styles.label}>Galería</Text>
      <TouchableOpacity onPress={selectMultipleImages} style={styles.imagePicker}>
        <Text>Seleccionar Imágenes</Text>
      </TouchableOpacity>
      <ScrollView horizontal>
        {galleryUris.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.galleryImagePreview} />
        ))}
      </ScrollView>

      <Button
        title={selectedProduct ? 'Actualizar Producto' : 'Agregar Producto'}
        onPress={handleAddOrUpdateProduct}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 20, padding: 10 },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  label: { fontWeight: 'bold', marginVertical: 10 },
  imagePicker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  imagePreview: { width: 100, height: 100, borderRadius: 5 },
  galleryImagePreview: { width: 80, height: 80, marginHorizontal: 5, borderRadius: 5 },
});

export default AgregarDato;
