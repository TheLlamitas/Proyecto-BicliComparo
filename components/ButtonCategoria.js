import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

const categories = [
    { name: 'Bicicletas', icon: 'directions-bike', library: 'MaterialIcons' },
    { name: 'Accesorios', icon: 'hand-holding-water', library: 'FontAwesome5' },
    { name: 'Ropas', icon: 'tshirt', library: 'FontAwesome5' },
    { name: 'Zapatos', icon: 'shoe-prints', library: 'FontAwesome5' }, 
    { name: 'Repuestos', icon: 'settings', library: 'MaterialIcons' },
    { name: 'Talleres', icon: 'construction', library: 'MaterialIcons' },
];

const ButtonCategoria = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.categoriesContainer}>
                {categories.map((category, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={styles.categoryButton} 
                        onPress={() => navigation.navigate('Categoria', { category: category.name.toLowerCase() })}>
                        {category.library === 'MaterialIcons' ? (
                            <MaterialIcons
                                name={category.icon}
                                size={48}
                                color="black"
                                style={styles.icon}
                            />
                        ) : (
                            <FontAwesome5
                                name={category.icon}
                                size={48}
                                color="black"
                                style={styles.icon}
                            />
                        )}
                        <Text style={styles.categoryText}>{category.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 3,
    },
    categoryButton: {
        width: '47%',
        backgroundColor: '#fff',
        borderRadius: 40,
        padding: 15,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'darkred',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 70, 
    },
    icon: {
        marginBottom: 10,
    },
    categoryText: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default ButtonCategoria;
