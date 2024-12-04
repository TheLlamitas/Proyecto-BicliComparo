import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import AgregarDato from '../components/AgregarDato';
import OpcionesDatos from '../components/OpcionesDatos';
import { getProducts } from '../utils/db';

const AdminScreen = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); 

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
      Alert.alert('Error', 'No se pudo cargar la lista de productos.');
    }
  };

  const handleProductSelection = (product) => {
    setSelectedProduct(product); 
  };

  const clearSelection = () => {
    setSelectedProduct(null); 
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <AgregarDato
          fetchProducts={fetchProducts}
          selectedProduct={selectedProduct}
          clearSelection={clearSelection}
        />
        <Text style={styles.title}>Lista de Productos</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <OpcionesDatos
              product={item}
              fetchProducts={fetchProducts}
              onSelect={handleProductSelection}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1, paddingBottom: 20 },
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
});

export default AdminScreen;
