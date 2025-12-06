import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { ShoppingCart, Search, User, Menu } from "lucide-react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white px-5 pt-10">
      <View className="bg-[#3ECB23] w-full h-44 rounded-b-3xl absolute top-0 left-0" />

      <View className="flex-row justify-between items-center mt-3">
        <TouchableOpacity>
          <Menu size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <User size={32} color="white" />
        </TouchableOpacity>
      </View>

      <Text className="text-3xl font-bold text-blue-900 mt-6">IFarmácia</Text>

      <View className="flex-row items-center mt-5">
        <View className="flex-1 flex-row items-center bg-[#3ECB23] rounded-full px-4 py-3">
          <Search color="white" size={22} />
          <TextInput
            placeholder="Buscar..."
            placeholderTextColor="#e9e9e9"
            className="ml-2 text-white flex-1"
          />
        </View>
        <TouchableOpacity className="bg-[#3ECB23] ml-3 p-3 rounded-full">
          <ShoppingCart color="white" size={22} />
        </TouchableOpacity>
      </View>

      <Text className="text-lg font-semibold mt-8 mb-3">Buscar por categoria</Text>
      <View className="flex-row justify-between">
        {[
          { label: "Medicamentos", icon: require("../assets/med.png") },
          { label: "Produtos de Beleza", icon: require("../assets/beleza.png") },
          { label: "Suplementos", icon: require("../assets/suplemento.png") },
          { label: "Higiene", icon: require("../assets/higiene.png") }
        ].map((item, index) => (
          <View key={index} className="items-center w-20">
            <View className="bg-[#3ECB23] p-3 rounded-full">
              <Image source={item.icon} className="w-8 h-8" />
            </View>
            <Text className="text-center text-xs mt-2">{item.label}</Text>
          </View>
        ))}
      </View>

      <Text className="text-lg font-semibold mt-10 mb-3">Produtos populares</Text>
      <View className="flex-row justify-between mb-8">
        {[1, 2].map((item) => (
          <View key={item} className="bg-[#3ECB23] w-[45%] rounded-3xl p-3 items-center">
            <Image
              source={require("../assets/dipirona.png")}
              className="w-20 h-28"
              resizeMode="contain"
            />
            <Text className="font-semibold text-white mt-2">Dipirona Monoidrata</Text>
            <Text className="text-white text-sm">Disponível</Text>
            <Text className="text-white mt-1 font-bold">R$ 8,99</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
