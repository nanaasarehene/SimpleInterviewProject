import { NavigatorScreenParams } from '@react-navigation/native';

export type MainTabParamList = {
    Home: undefined;
    Maintenance: undefined;
    Car: undefined;
    Oil: undefined;
    Profile: undefined;
};

export type MainStackParamList = {
    MainTabs: NavigatorScreenParams<MainTabParamList>;
};

export type RootStackParamList = {
    MainTabs: NavigatorScreenParams<MainStackParamList>;
};
