import ErrorCard from '@/components/ErrorCard';
import Loader from '@/components/Loader';
import { errorApi, useGetAllErrorsQuery } from '@/services/errorsApi';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { RootState } from '@/store/store';

export default function ErrorList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();

  const { data, isLoading, isFetching, refetch } = useGetAllErrorsQuery({ page: currentPage });


  // ✅ Load more on scroll end
  const loadMore = useCallback(() => {
    if (!isFetching && data?.currentPage! < data?.totalPages!) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [isFetching, data]);

  // ✅ Pull to refresh
  const handleRefresh = async () => {
    setRefreshing(true);
    setCurrentPage(1);
    dispatch(errorApi.util.invalidateTags([{ type: 'Errors', id: 'LIST' }])); // Invalidate cache
    await refetch();   // Refetch fresh page 1
    setRefreshing(false);
  };

  const renderEmptyComponent = () => (
    <View className="items-center mt-5">
      <Text>No Errors found.</Text>
    </View>
  );

  const renderFooterComponent = () => {
    if (data?.currentPage! < data?.totalPages!) {
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
          data={data?.errors}
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
        />
      )}
    </View>
  );
}
