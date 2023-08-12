import React, {useState} from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native'

import styles from './popularjobs.style'
import {COLORS, SIZES} from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import {useFetch} from "../../../hook/useFetch";
import {useRouter} from "expo-router";

const Popularjobs = () => {
    const router = useRouter();
    const [selectedJob, setSelectedJob] = useState();

    const {isLoading, error, data} = useFetch(
        'search', {
            query: 'React developer',
            num_pages: 1,
        })

    const handleCardPress = (item) => {
        router.push(`/job-details/${item.job_id}`);
        setSelectedJob(item.job_id);
    }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Popular Jobs</Text>
            <TouchableOpacity>
                <Text style={styles.headerBtn}>View All</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
            {isLoading ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <FlatList
                    data={data}
                    renderItem={({item}) => (
                        <PopularJobCard
                            item = {item}
                            selectedJob = {selectedJob}
							handleCardPress={() => {handleCardPress(item)}}
                            />
                    )}
                    keyExtractor={(item) => item?.job_id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{columnGap: SIZES.medium}}
                />
            )}
        </View>
    </View>
  )
}

export default Popularjobs