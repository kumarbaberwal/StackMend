import { View, Text, TouchableOpacity, Image } from 'react-native';

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
        <View className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-700 p-4 m-3">

            {/* Profile Section */}
            <View className="items-center mb-4">
                <Image
                    source={{ uri: userId.profileImage }}
                    className="w-14 h-14 rounded-full mb-2 bg-neutral-300"
                />
                <Text className="text-base font-semibold text-neutral-900 dark:text-neutral-100">{userId.username}</Text>
                <Text className="text-xs text-neutral-500 dark:text-neutral-400">{userId.role}</Text>
            </View>

            {/* Report Time */}
            <Text className="text-xs text-neutral-400 text-center mb-3">reported {createdAt}</Text>

            {/* Title & Description */}
            <View className="space-y-2">
                <Text
                    numberOfLines={2}
                    className="text-lg font-semibold text-neutral-900 dark:text-neutral-100"
                >
                    {title}
                </Text>
                <Text className="text-sm text-red-500">{language}</Text>
                <Text
                    numberOfLines={2}
                    className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed"
                >
                    {description}
                </Text>
            </View>

            {/* Tags */}
            <View className="flex-row flex-wrap mt-4 gap-2">
                {tags.map((tag, index) => (
                    <TouchableOpacity
                        key={index}
                        className="bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 active:opacity-70"
                    >
                        <Text className="text-xs text-neutral-700 dark:text-neutral-300">{tag}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Stats */}
            <View className="flex-row justify-between mt-5 px-2">
                <View className="flex-row items-center space-x-1">
                    <Text className="text-base font-semibold text-neutral-800 dark:text-neutral-100">{votes}</Text>
                    <Text className="text-xs text-neutral-500 dark:text-neutral-400">votes</Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <Text className="text-base font-semibold text-neutral-800 dark:text-neutral-100">{views}</Text>
                    <Text className="text-xs text-neutral-500 dark:text-neutral-400">views</Text>
                </View>
            </View>
        </View>
    );
}
