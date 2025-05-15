import { logoutUser } from '@/features/auth/authSlice';
import { useDeleteErrorMutation, useGetAllErrorsByUserQuery } from '@/services/errorsApi';
import { RootState, useAppDispatch } from '@/store/store';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Platform, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Image } from 'expo-image';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import AlertModal from '@/components/AlertModal';
import { useRouter } from 'expo-router';

dayjs.extend(relativeTime);

const ListEmpty = ({ onReport }: { onReport: () => void }) => (
  <View className="flex-1 justify-center items-center py-20">
    <Ionicons name="alert-circle-outline" size={72} color="#9ca3af" />
    <Text className="text-gray-400 text-xl mt-6 mb-8">No errors found</Text>
    <TouchableOpacity
      onPress={onReport}
      className="bg-indigo-600 rounded-full px-8 py-4 shadow-md"
      activeOpacity={0.75}
    >
      <Text className="text-white font-semibold text-lg">Report Your First Error</Text>
    </TouchableOpacity>
  </View>
);

export default function Dashboard() {
  const router = useRouter();

  const [modal, setModal] = useState<'logout' | 'delete' | null>(null);
  const [selectedErrorId, setSelectedErrorId] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const { data, isLoading } = useGetAllErrorsByUserQuery();
  const [deleteError, { isLoading: isDeleting }] = useDeleteErrorMutation();

  const showToast = (message: string, isError = false) => {
    if (Platform.OS === 'ios') {
      Alert.alert(isError ? 'Error' : 'Success', message);
    } else {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  };

  const handleDelete = async () => {
    if (!selectedErrorId) return;

    try {
      await deleteError({ id: selectedErrorId }).unwrap();
      showToast('Deleted successfully');
    } catch (err: any) {
      console.error('Delete Error: ', err);
      showToast(err?.message || 'Failed to delete. Please try again.', true);
    } finally {
      setModal(null);
      setSelectedErrorId(null);
    }
  };

  const renderErrorItem = ({ item }: any) => {
    const isItemDeleting = isDeleting && selectedErrorId === item._id;
    return (
      <View className="flex-row bg-white rounded-2xl p-5 shadow-md mb-5 items-start">
        <View className="w-1 h-full rounded-l-2xl mr-4 bg-yellow-400" />
        <View className="flex-1">
          <Text className="text-xl font-semibold text-gray-900 mb-1" numberOfLines={2}>
            {item.title}
          </Text>
          <Text className="text-gray-700 mb-3 text-base leading-snug" numberOfLines={3}>
            {item.description}
          </Text>
          {item.language && (
            <View className="bg-green-100 rounded-full px-3 py-1 mb-2 self-start">
              <Text className="text-xs text-green-800 font-medium">{item.language}</Text>
            </View>
          )}
          <View className="flex-row flex-wrap mb-3">
            {item.tags.map((tag: string) => (
              <View key={tag} className="bg-blue-100 rounded-full px-4 py-1 mr-3 mb-2">
                <Text className="text-xs text-blue-800 font-semibold">{tag}</Text>
              </View>
            ))}
          </View>
          <Text className="text-xs text-gray-400 italic">
            Created {dayjs(item.createdAt).fromNow()}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setSelectedErrorId(item._id);
            setModal('delete');
          }}
          className="ml-4 justify-center items-center rounded-full p-2"
          style={{ width: 44, height: 44 }}
          activeOpacity={0.7}
        >
          {isItemDeleting ? (
            <ActivityIndicator size="small" color="#2563eb" />
          ) : (
            <Ionicons name="trash-outline" size={26} color="#2563eb" />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-gray-50 p-5">
      {user && (
        <View className="flex-row items-center bg-white rounded-3xl p-5 mb-8 shadow-lg border border-gray-200">
          <Image
            source={{ uri: user.profileImage }}
            style={{ width: 96, height: 96, borderRadius: 48, marginRight: 24, borderWidth: 3, borderColor: '#6366F1' }}
            cachePolicy="memory"
            contentFit="cover"
          />
          <View className="flex-1">
            <Text className="text-3xl font-extrabold text-gray-900 mb-1">{user.username}</Text>
            <Text className="text-lg text-gray-600 mb-1">{user.email}</Text>
            <Text className="text-sm text-gray-500 italic">
              🗓 Joined {dayjs(user.createdAt).fromNow()}
            </Text>
          </View>
        </View>
      )}

      <TouchableOpacity
        activeOpacity={0.75}
        className="flex-row items-center justify-center rounded-xl bg-red-600 py-3 mb-8 shadow-md"
        onPress={() => setModal('logout')}
      >
        <Ionicons name="log-out-outline" size={22} color="white" />
        <Text className="ml-3 text-white font-semibold text-lg">Logout</Text>
      </TouchableOpacity>

      {data && (
        <View className="flex-row justify-between items-center mb-6 px-1">
          <Text className="text-2xl font-extrabold text-gray-900">Your Submissions</Text>
          <View className="bg-red-100 rounded-full px-4 py-1 min-w-[36px] items-center justify-center">
            <Text className="text-red-700 font-semibold text-lg">{data.length} errors</Text>
          </View>
        </View>
      )}

      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={renderErrorItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => isLoading ? null : <ListEmpty onReport={() => router.push('/(protected)/(drawer)/(tabs)/submiterror')} />}

      />

      <AlertModal
        visible={modal === 'logout'}
        title="Are you sure you want to logout?"
        subTitle="This will end your current session."
        onCancel={() => setModal(null)}
        onSubmit={() => {
          dispatch(logoutUser());
          setModal(null);
        }}
      />

      <AlertModal
        visible={modal === 'delete'}
        title="Confirm Delete"
        subTitle="Are you sure you want to delete this error?"
        onCancel={() => setModal(null)}
        onSubmit={handleDelete}
      />
    </View>
  );
}
