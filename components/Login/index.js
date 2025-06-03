import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, ScrollView } from 'react-native';

export default function CreateAccountScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignIn = () => {
        navigation.navigate('SignIn');
    };

    const handleSignUp = () => {
  if (!username || !email || !password || !confirmPassword) {
    Alert.alert('Error', 'Please fill in all fields');
    return;
  }

  if (password !== confirmPassword) {
    Alert.alert('Error', 'Passwords do not match');
    return;
  }

  Alert.alert('Success', `Account created for ${username}`);
  navigation.replace('Home');  // Redirect to Home
};



    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <View style={styles.buttonContainer}>
                <Button title="Sign Up" onPress={handleSignUp} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Sign In" onPress={handleSignIn} color="gray" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        justifyContent: 'center',
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        marginBottom: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 12,
        marginBottom: 16,
        borderRadius: 8,
        fontSize: 16,
    },
    buttonContainer: {
        marginTop: 10,
    },
});
