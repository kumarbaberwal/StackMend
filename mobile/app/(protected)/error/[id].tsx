import Loader from "@/components/Loader";
import { useGetDetailedErrorByIdQuery } from "@/services/errorsApi";
import { useSubmitSolutionMutation } from "@/services/solutionsApi";
import { Feather } from '@expo/vector-icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  actions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';
import { SafeAreaView } from 'react-native-safe-area-context';
import RenderHTML from 'react-native-render-html';


dayjs.extend(relativeTime);

export default function ErrorDetailsScreen() {
  const { id } = useLocalSearchParams();
  const errorId = Array.isArray(id) ? id[0] : id; // safest
  const { data, error, isLoading, refetch } = useGetDetailedErrorByIdQuery({ id: errorId })
  console.log("Data: ", data)
  console.log("Error: ", error)
  const richText = useRef<RichEditor>(null);
  const [submitSolution, { isLoading: submittingSolution }] = useSubmitSolutionMutation();
  const [solutionText, setSolutionText] = useState('');

  console.log("Solution Text: ", solutionText.trim());
  const handleSubmit = async () => {
    console.log("Solution Text: ", solutionText);
    const trimmed = solutionText.trim();
    if (!trimmed || trimmed === '<br>' || trimmed === '<div><br></div>') {
      showToast('Please enter your solution before submitting.');
      return;
    }

    try {
      const payload = {
        errorId,
        body: { solution: solutionText.trim() },
      };

      await submitSolution(payload).unwrap();

      showToast('Solution submitted successfully!');

      // Reset form
      setSolutionText('');
      await refetch();

    } catch (error: any) {
      console.error('Submit Solution failed:', error);
      showToast(error?.data?.message || 'Something went wrong.', true);
    }
  };
  const showToast = (message: string, isError = false) => {
    if (Platform.OS === 'ios') {
      Alert.alert(isError ? 'Error' : 'Success', message);
    } else {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  };

  const mockError = {
    error: {
      _id: '665a1b0ff132e37e8c40422e',
      title: 'App crashes when opening camera',
      description:
        'Whenever I try to open the camera on Android, the app crashes without any logs.',
      language: 'Dart',
      tags: ['flutter', 'camera', 'android'],
      votes: 5,
      views: 13,
      aiGeneratedSolution:
        "Make sure you've added the correct camera permissions in AndroidManifest.xml and that the CameraController is properly initialized before use.",
      createdAt: '2024-05-28T12:00:00.000Z',
      updatedAt: '2024-05-28T12:00:00.000Z',
      userId: {
        _id: '665a1a4ff132e37e8c40421c',
        username: 'john_doe',
        email: 'john@example.com',
        profileImage: 'https://i.pravatar.cc/150?img=1',
        reputation: 120,
        role: 'hostler',
      },
    },
    solutions: [
      {
        _id: '665a1f0ef132e37e8c40423a',
        errorId: '665a1b0ff132e37e8c40422e',
        comment: 'Try wrapping the CameraPreview widget in a SafeArea.',
        createdAt: '2024-05-28T13:00:00.000Z',
        userId: {
          _id: '665a1d0df132e37e8c404229',
          username: 'jane_doe',
          profileImage: 'https://i.pravatar.cc/150?img=2',
        },
        upvotes: 3,
        downvotes: 0,
      },
      {
        _id: '665a1f1ff132e37e8c40423b',
        errorId: '665a1b0ff132e37e8c40422e',
        comment:
          'Make sure you await initialization of the camera before navigating.',
        createdAt: '2024-05-28T13:05:00.000Z',
        userId: {
          _id: '665a1d1ff132e37e8c40422a',
          username: 'dev_guru',
          profileImage: 'https://i.pravatar.cc/150?img=3',
        },
        upvotes: 1,
        downvotes: 1,
      },
    ]
  };

  if (isLoading) return <Loader />

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={100}
      >
        <ScrollView
          contentContainerStyle={{ padding: 16, }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="bg-white p-6 rounded-3xl shadow-lg border border-neutral-200 mb-6">
            {/* User Info */}
            <View className="flex-row items-center mb-5">
              <Image
                source={{ uri: mockError.error.userId.profileImage }}
                style={{ width: 56, height: 56, borderRadius: 28 }}
                className="bg-neutral-300"
              />
              <View className="ml-4">
                <Text className="font-bold text-lg text-black">
                  @{data?.error.userId.username}
                </Text>
                <Text className="text-sm text-neutral-500 capitalize">
                  {data?.error.userId.role}
                </Text>
              </View>
            </View>

            {/* Title */}
            <Text className="text-xl font-extrabold text-black mb-1 leading-tight">
              {data?.error.title}
            </Text>

            {/* Language */}
            <Text className="text-sm font-semibold text-rose-600 mb-2 uppercase tracking-wide">
              {data?.error.language}
            </Text>

            {/* Description */}
            <Text className="text-base text-neutral-800 mb-3 leading-relaxed">
              {data?.error.description}
            </Text>

            {/* Timestamp */}
            <Text className="text-xs text-neutral-400 mb-4 italic">
              Asked {dayjs(data?.error.createdAt).fromNow()}
            </Text>

            {/* Tags */}
            <View className="flex-row flex-wrap gap-2 mb-4">
              {data?.error.tags.map((tag, index) => (
                <View
                  key={index}
                  className="bg-blue-50 px-3 py-1 rounded-full border border-blue-200"
                >
                  <Text className="text-xs text-blue-700 font-medium">{tag}</Text>
                </View>
              ))}
            </View>

            {/* Votes & Views */}
            <View className="flex-row justify-between items-center">
              <Text className="text-sm text-neutral-600">👍 {data?.error.votes.length} votes</Text>
              <Text className="text-sm text-neutral-600">👁️ {data?.error.views.length} views</Text>

              <View className="flex-row space-x-3">
                <TouchableOpacity className="p-2 bg-green-100 rounded-full">
                  <Feather name="thumbs-up" size={16} color="#059669" />
                </TouchableOpacity>
                <TouchableOpacity className="p-2 bg-red-100 rounded-full">
                  <Feather name="thumbs-down" size={16} color="#dc2626" />
                </TouchableOpacity>
              </View>
            </View>
          </View>


          {data?.error.aiGeneratedSolution && (
            <View className="bg-yellow-100 border-l-4 border-yellow-500 p-5 rounded-2xl shadow-md mb-6">
              <View className="flex-row items-center mb-2">
                <Text className="text-lg font-bold text-yellow-800 mr-2">💡 AI Suggestion</Text>
                <Feather name="zap" size={18} color="#ca8a04" />
              </View>
              <Text className="text-sm text-yellow-900 leading-relaxed tracking-normal">
                {data?.error.aiGeneratedSolution}
              </Text>
            </View>
          )}


          {/* Solutions */}
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-black">💬 Solutions</Text>
            <Text className="text-sm text-neutral-500">
              {data?.solutions.length} {data?.solutions.length === 1 ? 'Solution' : 'Solutions'}
            </Text>
          </View>

          {data?.solutions.map((item) => (
            <View
              key={item._id}
              className="flex-row items-start mb-5 p-4 bg-white rounded-2xl border border-neutral-200 shadow-sm"
            >
              <Image
                source={{ uri: item.userId.profileImage }}
                style={{ width: 40, height: 40, borderRadius: 20 }}
                className="bg-neutral-300"
              />
              <View className="ml-4 flex-1">
                {/* Username */}
                <Text className="text-sm font-semibold text-black mb-1">
                  @{item.userId.username}
                </Text>

                {/* Comment */}
                <Text className="text-sm text-neutral-800 leading-relaxed">
                  <RenderHTML source={{ html: item.solution }} />
                  {/* {item.solution} */}
                </Text>

                {/* Timestamp + Votes */}
                <View className="flex-row justify-between items-center mt-3">
                  <Text className="text-xs text-neutral-400 italic">
                    {dayjs(item.createdAt).fromNow()}
                  </Text>
                  <View className="flex-row space-x-3">
                    <TouchableOpacity className="p-1 bg-green-50 rounded-full">
                      <Feather name="thumbs-up" size={16} color="#10b981" />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-1 bg-red-50 rounded-full">
                      <Feather name="thumbs-down" size={16} color="#ef4444" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}


          {/* Rich Editor */}
          <View className="mt-6 bg-white p-5 border border-neutral-200 rounded-2xl shadow-md">
            {/* Heading */}
            <Text className="text-lg font-bold text-black mb-3">
              ✍️ Your Solution
            </Text>

            {/* Editor */}
            <RichEditor
              ref={richText}
              placeholder="Write your solution here..."
              onChange={setSolutionText}
              editorStyle={{
                backgroundColor: 'white',
                contentCSSText: 'color: #111827; font-size: 16px; line-height: 24px;',
                placeholderColor: '#9ca3af',
              }}
              style={{
                minHeight: 300,
                maxHeight: 300,
                borderRadius: 12,
                padding: 5,
                borderColor: '#e5e7eb',
                borderWidth: 1,
              }}
            />

            {/* Toolbar */}
            <RichToolbar
              editor={richText}
              actions={[
                actions.insertImage,
                actions.setBold,
                actions.setItalic,
                actions.insertBulletsList,
                actions.insertOrderedList,
                actions.insertLink,
                actions.keyboard,
                actions.setStrikethrough,
                actions.setUnderline,
                actions.removeFormat,
                actions.insertVideo,
                actions.checkboxList,
                actions.undo,
                actions.redo,
              ]}
              iconTint="#4b5563"
              selectedIconTint="#1e40af"
              selectedButtonStyle={{ backgroundColor: '#dbeafe', borderRadius: 6 }}
              style={{
                marginTop: 16,
                borderRadius: 10,
                backgroundColor: '#f9fafb',
                borderColor: '#e5e7eb',
                borderWidth: 1,
              }}
            />

            {/* Submit Button */}
            <TouchableOpacity
              disabled={submittingSolution}
              onPress={() => {
                handleSubmit();
                console.log('Submitted:', solutionText);
              }}
              className="mt-5 bg-blue-600 py-4 rounded-xl w-full shadow-sm active:opacity-80"
            >
              <Text className="text-white font-semibold text-center text-base">
                🚀 Submit Solution
              </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
