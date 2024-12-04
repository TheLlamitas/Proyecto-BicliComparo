import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { deleteProduct } from '../utils/db'; // Importa la función

const OpcionesDatos = ({ product, onSelect, fetchProducts }) => {
  const handleDelete = async (productId) => {
    Alert.alert(
      'Confirmar eliminación',
      `¿Estás seguro de que deseas eliminar el producto "${product.name}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          onPress: async () => {
            try {
              await deleteProduct(productId);
              Alert.alert('Éxito', `Producto "${product.name}" eliminado correctamente.`);
              fetchProducts(); // Actualiza la lista después de eliminar
            } catch (error) {
              console.error(error);
              Alert.alert('Error', 'No se pudo eliminar el producto. Inténtalo de nuevo.');
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{product.name}</Text>
      <View style={styles.actionButtons}>
        <Button title="Update" onPress={() => onSelect(product)} />
        <Button
          title="Delete"
          color="red"
          onPress={() => handleDelete(product.id)} // Llama a handleDelete
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productName: { fontSize: 16, flex: 1 },
  actionButtons: { flexDirection: 'row', gap: 10 },
});

export default OpcionesDatos;
