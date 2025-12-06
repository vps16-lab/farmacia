import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

export default function Carrinho() {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Dipirona monoidratada",
      description: "10 comprimidos",
      price: 8.99,
      qty: 1,
      image: "https://via.placeholder.com/80",
    },
    {
      id: "2",
      name: "Paracetamol",
      description: "10 comprimidos",
      price: 8.99,
      qty: 1,
      image: "https://via.placeholder.com/80",
    },
  ]);

  const increase = (id) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it)));
  };

  const decrease = (id) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it))
    );
  };

  const remove = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const total = items.reduce((s, it) => s + it.price * it.qty, 0).toFixed(2);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerWrap}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Carrinho</Text>
      </View>

      {items.map((item) => (
        <View key={item.id} style={styles.itemCard}>
          <Image source={{ uri: item.image }} style={styles.itemImage} />

          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDesc}>{item.description}</Text>
            <Text style={styles.itemPrice}>R$ {item.price.toFixed(2).replace('.', ',')}</Text>
          </View>

          <View style={styles.controls}>
            <TouchableOpacity onPress={() => increase(item.id)} style={styles.controlButton}>
              <Text style={styles.controlText}>+</Text>
            </TouchableOpacity>

            <Text style={styles.qtyText}>{item.qty} unidade{item.qty > 1 ? 's' : ''}</Text>

            <TouchableOpacity onPress={() => decrease(item.id)} style={styles.controlButton}>
              <Text style={styles.controlText}>−</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => remove(item.id)} style={styles.removeButton}>
              <Text style={styles.removeText}>✕</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

    
      <View style={{ height: 30 }} />

      
      <View style={styles.totalWrap}>
        <View style={styles.totalBox}>
          <Text style={styles.totalLabel}>TOTAL R$ {String(total).replace('.', ',')}</Text>
        </View>

        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Finalizar compra</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  content: { paddingBottom: 40 },
  headerWrap: { padding: 20 },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#42C91C',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: { color: '#ffffff', fontSize: 22 },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: -35,
    color: '#0b4f7a',
  },
  itemCard: {
    backgroundColor: '#42C91C',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemImage: { width: 60, height: 60, borderRadius: 10, marginRight: 15 },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: '700', color: '#fff' },
  itemDesc: { color: '#fff', marginTop: 4 },
  itemPrice: { color: '#fff', marginTop: 6 },
  controls: { flexDirection: 'column', alignItems: 'center', marginLeft: 10 },
  controlButton: { padding: 6 },
  controlText: { fontSize: 20, color: '#fff' },
  qtyText: { fontSize: 14, color: '#fff', marginVertical: 6 },
  removeButton: { padding: 6 },
  removeText: { color: '#fff', fontSize: 18 },
  totalWrap: {
    backgroundColor: '#42C91C',
    paddingVertical: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
  },
  totalBox: {
    backgroundColor: '#7BE85A',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 15,
  },
  totalLabel: { color: '#fff', fontSize: 18, fontWeight: '700' },
  checkoutButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  checkoutText: { color: '#42C91C', fontWeight: '700', fontSize: 18 },
});
