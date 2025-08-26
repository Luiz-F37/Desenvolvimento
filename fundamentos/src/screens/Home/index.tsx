import {FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import { Product } from "../../components/Product";
import { Alert } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export  function Home(){
    const [productName, setProductName] = useState(""); // 'usestate()' Controla o estado da variavel
    const [products, setProducts] = useState<string[]>([])
 
    function handleAddProduct(){
        if (products.includes(productName)){
        return Alert.alert("Produto já cadastrado", "Já existe um produto na lista com esse nome");
        }

        setProducts([... products, productName]);
        setProductName("");
    } 

    function handleProductRemove(name : string){
        Alert.alert("Remover", `deseja remover o produto ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setProducts(products.filter(product => product !== name))
            },
            {
                text: 'Não',
                style: 'cancel' 
            }
        ]);
    }
    return (
        <View style = {styles.container}>
            <Text style={styles.title}>Lista de Compras</Text>
            <Text style={styles.todaysDate}>Quarta-feira, 17 de Julho de 2025</Text>

            <View style={styles.form}> 
             <TextInput
             style={styles.input}
             placeholder= "Nome do Produto"
             placeholderTextColor= "#BDBABA" 
             keyboardType="default"
             onChangeText={setProductName}
             value={productName}
             />

             <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
              <Text style={styles.textButton}>+</Text>
             </TouchableOpacity>
            </View>

            <Text style={styles.listTitle}>Compras pendente</Text>
            
              <FlatList
                data={products} 
                keyExtractor={(item) => item}
                contentContainerStyle={styles.list}
                renderItem={({item}) => <Product name={item} onRemove={() => handleProductRemove(item)}/>} 
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Comprou todos os produtos? Adicione produtos a sua lista de compras
                    </Text>
                )}
            
                
              />
            </View>
    )
}
