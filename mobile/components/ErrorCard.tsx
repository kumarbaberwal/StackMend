import { View, Text, TouchableOpacity } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Image } from 'expo-image'

// Load the plugin
dayjs.extend(relativeTime);

export default function ErrorCard({
    _id,
    title,
    description,
    language,
    tags,
    userId,
    votes,
    views,
    createdAt,
}: Error) {
    return (
        <View className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-5 m-3">

            {/* Top Section: Profile & Time */}
            <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                    <Image
                        source={{ uri: userId.profileImage }}
                        style={{
                            width: 48,  // equivalent to Tailwind w-12 (12 * 4 = 48px)
                            height: 48, // equivalent to Tailwind h-12 (12 * 4 = 48px)
                            borderRadius: 24, // half of width/height for perfect circle
                            backgroundColor: '#d4d4d4', // neutral-300 (#d4d4d4 in Tailwind)
                        }}
                        cachePolicy={'memory'}
                        contentFit={'contain'}
                    />
                    <View className="ml-1">
                        <Text className="text-base font-semibold text-black">@{userId.username}</Text>
                        <Text className="text-xs text-neutral-500 mt-1">{userId.role}</Text>
                    </View>
                </View>
                <Text className="text-xs text-neutral-400">asked {dayjs(createdAt).fromNow()}</Text>
            </View>

            {/* Title & Description */}
            <View className="mt-5">
                <Text numberOfLines={2} className="text-lg font-semibold text-black leading-snug">
                    {title}
                </Text>
                <Text className="text-sm text-rose-500 font-medium mt-2">{language}</Text>
                <Text numberOfLines={3} className="text-sm text-neutral-600 leading-relaxed mt-2">
                    {description}
                </Text>
            </View>

            {/* Tags */}
            <View className="flex-row flex-wrap mt-5">
                {tags.map((tag, index) => (
                    <View
                        key={index}
                        className="bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200 mr-2 mb-2"
                    >
                        <Text className="text-xs text-neutral-700">{tag}</Text>
                    </View>
                ))}
            </View>

            {/* Stats */}
            <View className="flex-row justify-end mt-4">
                <View className="border border-neutral-300 rounded-full px-4 py-1 mr-3">
                    <Text className="text-sm text-black">{votes} votes</Text>
                </View>
                <View className="border border-neutral-300 rounded-full px-4 py-1">
                    <Text className="text-sm text-black">{views} views</Text>
                </View>
            </View>

        </View>
    );
}
