import { View, Text } from "react-native";
import { IconMapPin, IconQrcode,IconTicket } from "@tabler/icons-react-native";
import { s } from "./styles";
import { Step } from "../step";

export function Steps(){
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja Como funciona:</Text>

      {/* <Step icon={IconMapPin} title="Encontre estabelecimentos" description="Veja locais pertos de você que são parceiros Nearby!"/>

      <Step icon={IconMapPin} title="Ative o cupom com QR Code" description="Escaneie o código no estabelecimento para usar o benefício."/>

      <Step icon={IconMapPin} title="Garante vantagens perto de você!" description="Ative cupons aonde estiver, em diferentes tipos de estabelecimento"/> */}
    </View>
  )
}