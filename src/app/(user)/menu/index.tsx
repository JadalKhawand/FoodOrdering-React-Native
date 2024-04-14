import { FlatList, ActivityIndicator, Text} from "react-native";
import ProductListItem from "@components/ProductListItem";
import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

export default function MenuScreen() {
const {data: products, error, isLoading} = useQuery({
  queryKey: ["product"],
  queryFn: async () => {
    const {data, error} = await supabase.from('product').select("*")
    if(error){
      throw new Error(error.message)
    }
    return data;
  }
})
if(isLoading){
  return <ActivityIndicator/>
}
if(error){
  return <Text>Failed to fetch products</Text>
}

  return (
      <FlatList
      data={products}
      renderItem={({item})=> <ProductListItem product={item}/>}
      numColumns={2}
      contentContainerStyle={{gap:10, padding:2}}
      columnWrapperStyle={{gap:10}}
      />
  );
}
