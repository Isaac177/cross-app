import {SafeAreaView, Text} from 'react-native';
import {Stack, useRouter, useSearchParams} from "expo-router";
import {useFetch} from "../../hook/useFetch";
import {COLORS} from "../../constants";
import {useState} from "react";


const JobDetails = () => {
    const [refreshing, setRefreshing] = useState(false);
    const params = useSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params.id
    })

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen>

            </Stack.Screen>
        </SafeAreaView>
    );
}

export default JobDetails;