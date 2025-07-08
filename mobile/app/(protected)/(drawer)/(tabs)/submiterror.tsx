import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useSubmitErrorMutation } from '@/services/errorsApi';

export default function SubmitError() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [tagInput, setTagInput] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [submitError, { isLoading }] = useSubmitErrorMutation();

  const showToast = (message: string, isError = false) => {
    if (Platform.OS === 'ios') {
      Alert.alert(isError ? 'Error' : 'Success', message);
    } else {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  };

  const handleAddTag = () => {
    const trimmedTag = tagInput.trim();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async () => {
    console.log({ title, description, language, tags });
    if (!title.trim() || !description.trim() || !language.trim()) {
      showToast('Please fill all fields before submitting.');
      return;
    }

    try {
      const payload = {
        title: title.trim(),
        description: description.trim(),
        language: language.trim(),
        tags,
      };

      await submitError(payload).unwrap();

      showToast('Error submitted successfully!');

      // Reset form
      setTitle('');
      setDescription('');
      setLanguage('');
      setTags([]);
      setTagInput('');

    } catch (error: any) {
      console.error('Submit Error failed:', error);
      showToast(error?.data?.message || 'Something went wrong.', true);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="rounded-2xl p-5 m-4 border border-gray-200 shadow bg-white">
          {/* Header */}
          <View className="items-center mb-6">
            <Text className="text-3xl font-extrabold text-gray-800 mb-1">Submit an Error</Text>
            <Text className="text-sm text-gray-500 text-center">Get solutions from the community</Text>
          </View>

          {/* Title */}
          <View className="mb-4">
            <Text className="text-sm font-medium text-gray-700 mb-1">Error Title</Text>
            <View className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 flex-row items-center">
              <MaterialIcons name="error-outline" size={20} color="#999" style={{ marginRight: 10 }} />
              <TextInput
                placeholder="Brief and clear title"
                value={title}
                onChangeText={setTitle}
                className="flex-1 text-base"
                placeholderTextColor="#999"
                style={{ height: 40 }}
              />
            </View>
          </View>

          {/* Description */}
          <View className="mb-4">
            <Text className="text-sm font-medium text-gray-700 mb-1">Description</Text>
            <View className="rounded-lg border border-gray-300 px-4 py-3 bg-gray-50">
              <TextInput
                placeholder="Explain the error, what you tried, and when it occurs..."
                value={description}
                onChangeText={setDescription}
                multiline
                textAlignVertical="top"
                className="text-base"
                placeholderTextColor="#999"
                style={{ minHeight: 180 }}
              />
            </View>
          </View>

          {/* Language */}
          <View className="mb-4">
            <Text className="text-sm font-medium text-gray-700 mb-1">Language / Framework</Text>
            <View className="flex-row items-center rounded-lg border border-gray-300 px-3 py-2 bg-gray-50">
              <Ionicons name="code-slash-outline" size={20} color="#999" style={{ marginRight: 8 }} />
              <TextInput
                placeholder="e.g., JavaScript, Flutter"
                value={language}
                onChangeText={setLanguage}
                className="flex-1 text-base"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          {/* Tags */}
          <View className="mb-4">
            <Text className="text-sm font-medium text-gray-700 mb-1">Tags</Text>
            <View className="flex-row items-center rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 mb-2">
              <FontAwesome5 name="tags" size={16} color="#999" style={{ marginRight: 8 }} />
              <TextInput
                placeholder="Add tag and press Enter"
                value={tagInput}
                onChangeText={setTagInput}
                onSubmitEditing={handleAddTag}
                className="flex-1 text-base"
                placeholderTextColor="#999"
              />
            </View>
            <View className="flex-row flex-wrap">
              {tags.map((tag, index) => (
                <View
                  key={index}
                  className="flex-row items-center bg-blue-100 border border-blue-300 px-3 py-1 rounded-full mr-2 mb-2"
                >
                  <Text className="text-sm text-blue-700 mr-2">{tag}</Text>
                  <TouchableOpacity onPress={() => handleRemoveTag(tag)}>
                    <Ionicons name="close-circle" size={18} color="#2563EB" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            onPress={handleSubmit}
            disabled={isLoading}
            className={`py-3 rounded-xl items-center shadow-md ${isLoading ? 'bg-blue-300' : 'bg-blue-600'
              }`}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-white font-semibold text-lg">Submit</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
