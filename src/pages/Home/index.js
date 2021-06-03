import React, { useState } from 'react';
import {
    TouchableWithoutFeedback, Keyboard,
    KeyboardAvoidingView, Platform, Modal
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';

import { Feather } from '@expo/vector-icons';
import {
    ContainerLogo,
    Logo,
    ContainerContent,
    Title,
    SubTitle,
    ContainerInput,
    BoxIcon,
    Input,
    ButtonLink,
    ButtonLinkText
} from './styles';


export default function Home() {

    const [input, setInput] = useState('');

    function handleShortLink() {
        //alert('Url Digitada: ' + input);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <LinearGradient
                colors={['#1ddbb9', '#132742']}
                style={{ flex: 1, justifyContent: 'center' }}
            >
                <StatusBarPage
                    barStyle="light-content"
                    backgroundColor="#1ddbb9"
                />

                <Menu />

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'android' ? 'padding' : 'position'}
                    enabled
                >

                    <ContainerLogo>
                        <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
                    </ContainerLogo>

                    <ContainerContent>
                        <Title>Seu Link</Title>
                        <SubTitle>Cole seu link para Encurtar</SubTitle>


                        <ContainerInput>
                            <BoxIcon>
                                <Feather name="link" size={22} color="#fff" />
                            </BoxIcon>
                            <Input
                                placeholder="Cole seu Link Aqui..."
                                placeholderTextColor="white"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="url"
                                value={input}
                                onChangeText={(text) => setInput(text)}
                            />
                        </ContainerInput>

                        <ButtonLink onPress={handleShortLink}>
                            <ButtonLinkText>Gerar Link</ButtonLinkText>
                        </ButtonLink>

                    </ContainerContent>
                </KeyboardAvoidingView>
                <Modal visible={true} transparent animationType="slide">
                    <ModalLink />
                </Modal>
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}