import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";

export default function Medicamentos() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#42C91C",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#ffffff", fontSize: 22 }}>←</Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: -35,
          }}
        >
          Medicamentos
        </Text>
      </View>

      <View
        style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#42C91C",
            height: 45,
            borderRadius: 25,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>🔍</Text>
          <TextInput
            placeholder="Buscar..."
            placeholderTextColor="#e0e0e0"
            style={{ marginLeft: 10, color: "#fff", flex: 1 }}
          />
        </View>

        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#42C91C",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>🛒</Text>
        </TouchableOpacity>
      </View>
      {[
        {
          nome: "Dipirona monoidratada",
          desc: "10 comprimidos",
          preco: "R$8,99",
          antigo: "R$11,99",
        },
        {
          nome: "Paracetamol",
          desc: "20 comprimidos",
          preco: "R$3,99",
          antigo: "R$6,00",
        },
        {
          nome: "Cardo mariano",
          desc: "30 pílulas",
          preco: "R$39,99",
          antigo: "R$46,99",
          quantidade: 1,
        },
        {
          nome: "Clenbuterol",
          desc: "1 frasco 500mL\n+ 1 dosador oral",
          preco: "R$169,99",
          antigo: "R$199,99",
        },
      ].map((item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "#42C91C",
            marginHorizontal: 20,
            padding: 15,
            borderRadius: 30,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Image
            source={{ uri: "https://via.placeholder.com/80" }}
            style={{ width: 70, height: 70, borderRadius: 10, marginRight: 15 }}
          />

          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "#fff" }}>
              {item.nome}
            </Text>
            <Text style={{ color: "#fff", marginBottom: 5 }}>{item.desc}</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#fff", fontSize: 16 }}>{item.preco}</Text>
              <Text
                style={{
                  color: "#e0e0e0",
                  fontSize: 14,
                  textDecorationLine: "line-through",
                  marginLeft: 10,
                }}
              >
                {item.antigo}
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item.quantidade ? (
              <View
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <TouchableOpacity>
                  <Text style={{ fontSize: 26, color: "#fff" }}>+</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 18, color: "#fff", marginVertical: 5 }}>
                  {item.quantidade}
                </Text>
                <TouchableOpacity>
                  <Text style={{ fontSize: 30, color: "#fff" }}>−</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity>
                <Text style={{ fontSize: 30, color: "#fff" }}>+</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
