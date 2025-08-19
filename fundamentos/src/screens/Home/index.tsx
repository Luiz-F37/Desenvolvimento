import {Alert, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"

import { Product } from "../../components/Product";

import { styles } from "./styles";

export  function Home(){
    const products = [
        "Arroz",
        "Feijão",
        "Macarrão",
        "Farinha de Trigo",
        "Açúcar",
        "Sal",
        "Óleo de Soja",
        "Leite",
        "Ovos",
        "Pão",
        "Café",
        "Chá",
        "Manteiga",
        "Queijo",
        "Presunto",
        "Frango",
        "Carne Bovina",
        "Peixe",
        "Frutas",
        "Legumes",
        "Verduras",
        "Batata",
        "Cebola",
        "Alho",
        "Tomate",
        "Cenoura",
        "Banana",
        "Maçã",
        "Laranja",
        "Uva",
        "Refrigerante",
        "Suco",
        "Água Mineral",
        "Biscoitos",
        "Cereais",
        "Molho de Tomate",
        "Condimentos",
        "Iogurte",
        "Sorvete",
        "Chocolate"
      ];
    function handleAddProduct(){
        if (products.includes("Arroz")){
        Alert.alert("Remover", "Já existe um produto na lista com esse nome.");
        }
    }

    function handleProductRemove(name : string){
        console.log("Remover", `deseja remover o produto ${name}`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado")
            },
            {
                text: 'Não',
                styles: 'cancel' 
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
