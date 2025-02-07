module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        'nativewind/babel',
        ['module-resolver', {
            alias: {
                '@ant-design/icons-react-native': 'react-native-vector-icons',
            },
        }],
    ],
};
