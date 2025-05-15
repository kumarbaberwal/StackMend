import ErrorCard from '@/components/ErrorCard';
import Loader from '@/components/Loader';
import { useGetAllErrorsQuery } from '@/services/errorsApi';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';

export default function ErrorList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const { data, isLoading, isFetching, refetch } = useGetAllErrorsQuery({ page: currentPage });

  const loadMore = useCallback(() => {
    if (!isFetching && data?.currentPage! < data?.totalPages!) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [isFetching, data]);

  const handleRefresh = async () => {
    setRefreshing(true);
    setCurrentPage(1);
    await refetch();
    setRefreshing(false);
  };

  const renderEmptyComponent = () => (
    <View className="items-center justify-center p-4 bg-gray-50 rounded-2xl mx-5 shadow-md">
      <MaterialIcons name='error-outline' color="#9CA3AF" size={50} />
      <Text className="text-xl font-semibold text-gray-600 mt-4">No Errors Found</Text>
      <Text className="text-base text-gray-400 mt-2 text-center">
        Everything looks good! No errors to display right now.
      </Text>
    </View>
  );

  const renderFooterComponent = () => {
    if (isFetching && data?.currentPage! < data?.totalPages!) {
      return <Loader />;
    }
    return null;
  };

  return (
    <View className="flex-1 bg-white">
      {isLoading && currentPage === 1 ? (
        <Loader />
      ) : (
        <FlatList
          data={data?.errors || []}  // ✅ Use merged data from RTK Query directly
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ErrorCard {...item} />}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          ListEmptyComponent={renderEmptyComponent}
          ListFooterComponent={renderFooterComponent}
          onEndReachedThreshold={0.1}
          onEndReached={loadMore}
          contentContainerClassName='flex-grow justify-center'
        />
      )}
    </View>
  );
}