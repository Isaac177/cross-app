import React from 'react'
import {View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import styles from './welcome.style'
import {useRouter} from "expo-router";
import { icons, SIZES} from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];
const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
    const router = useRouter();
    const [activeJobType, setActiveJobType] = React.useState(jobTypes[0]);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome,
            <Text style={styles.userName}>John Doe</Text>
        </Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    value={searchTerm}
                    onChangeText={(text)=> setSearchTerm(text)}
                    placeholder="Search for job"
                />
            </View>
            <TouchableOpacity style={styles.searchBtn} onPress={() => handleClick()}>
                <Image style={styles.searchBtnImage} source={icons.search} resizeMode="contain" />
            </TouchableOpacity>
        </View>
        <View style={styles.tabsContainer}>
            <FlatList data={jobTypes} renderItem={({item}) => (
                <TouchableOpacity
                    style={styles.tab(activeJobType, item)}
                    onPress={() => {setActiveJobType(item);
                        router.push(`/search/${item}`)
                    }}
                >
                    <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
                </TouchableOpacity>
            )}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{columnGap: SIZES.small}}
            />
        </View>
    </View>
  )
}

export default Welcome