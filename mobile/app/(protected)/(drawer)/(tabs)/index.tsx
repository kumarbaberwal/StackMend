import Loader from '@/components/Loader';
import { mockErrors } from '@/constants/mockErrors';
import { useDeleteErrorMutation, useGetAllErrorsByUserQuery, useGetAllErrorsQuery } from '@/services/errorsApi';
import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';

export default function Index() {
  // const { data: errors, error, isLoading } = useGetAllErrorsQuery({ page: 1, limit: 5 });
  // const { data: errors, error, isLoading } = useGetAllErrorsByUserQuery();
  const [deleteError, { data, error, isLoading }] = useDeleteErrorMutation();
  console.log('IsLoading: ', isLoading);
  console.log('error: ', error);
  // console.log('data: ', errors);
  console.log('data: ', data);

  const handleDelete = async () => {
    try {
      await deleteError({ id: '681eff46818f02e6d778c082' }).unwrap();
    } catch (error) {
      console.log('Error deleting')
    }
  }
  // console.log('Errors: ', JSON.stringify(errors));
  // console.log('Errors: ', errors);
  return (
    <View className='flex-1 bg-white'>
      <Button title='delete' onPress={() => handleDelete()} />
      {
        // true ?
        //   <Loader /> :
        //   <FlatList
        //     data={mockErrors}
        //     keyExtractor={(item) => item._id}
        //   />
      }
      {/* <Text>{errors ? errors : "Undefined"}</Text> */}
      {/* <Button title='Get Data' onPress={ ()=> } /> */}
    </View>
  )
}