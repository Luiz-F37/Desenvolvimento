import {FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import { Product } from "../components/Product";


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

    }

    function handleProductRemove(name : string){
        console.log(`Você clicou no botão de remover produto ${name}`)
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

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor : "#EAEAEA",
        padding: 24 
    },
    title: {
        color: "#000",
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 28.8,
        marginTop: 48,

    },
    todaysDate: { 
        color: "#000",
        fontSize: 24,
        fontWeight: "normal",
        lineHeight: 28.8,
    },
    input: {
        flex: 1,
        height: 56,
        padding: 16,
        backgroundColor: "#FFF",
        borderRadius: 5,
        marginRight: 16,
    },
    form: {
        width:"100%",
        flexDirection: "row",
        marginTop: 18,

        marginBottom: 36
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: "#31C667",
        borderRadius: 5,

        alignItems: "center",
        justifyContent: "center"
    },
    textButton: {
        color: "#FFF",
        fontSize: 24,
    },
    listTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 24,
        marginBottom: 16,
    },
    listEmptyText: {
        fontSize: 16,
        fontWeight: 'normal',
        lineHeight: 19.2,
        textAlign: "center"
    },
    list: {
        flex: 1,
        justifyContent: 'center',
    }
});