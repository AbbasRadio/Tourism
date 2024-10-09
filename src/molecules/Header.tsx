
import { Image, StyleSheet, View } from 'react-native';
const Header = () => (
    <View style={styles.headerSection}>
        <Image source={require('../../assets/Aloha.png')} />
     </View>
)

const styles = StyleSheet.create({
    headerSection: {
        height: 80,
        paddingHorizontal: 24,
        gap: 0,
        justifyContent: 'center',
        opacity: 1,
        alignItems: 'center',
    },
});

export default Header;