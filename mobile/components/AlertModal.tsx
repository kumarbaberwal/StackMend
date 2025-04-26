import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

interface AlertModalProps {
  visible: boolean;
  title: string;
  subTitle: string;
  onCancel: () => void;
  onSubmit: () => void;
}


export default function AlertModal({ visible, title, subTitle, onCancel, onSubmit }: AlertModalProps) {
  return (
    <Modal
      transparent
      animationType={'fade'}
      visible={visible}
    >
      {/* <BlurView intensity={40} tint="dark" className="flex-1 justify-center items-center"> */}
      <View className="flex-1 bg-black/30 justify-center items-center">
        <View className="bg-white w-11/12 max-w-md rounded-2xl p-6 shadow-2xl">
          <Text className="text-black text-xl font-semibold text-center mb-2">
            {title}
          </Text>
          <Text className="text-gray-500 text-base text-center mb-6">
            {subTitle}
          </Text>

          <View className="flex-row space-x-3">
            <TouchableOpacity
              onPress={onCancel}
              className="flex-1 bg-gray-100 py-3 rounded-3xl"
            >
              <Text className="text-center text-red-500 font-medium text-base">
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onSubmit}
              className="flex-1 bg-blue-500 py-3 rounded-full"
            >
              <Text className="text-center text-white font-medium text-base">
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </BlurView> */}
    </Modal>
  );
}
