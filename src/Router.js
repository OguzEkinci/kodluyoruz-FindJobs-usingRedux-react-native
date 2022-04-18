import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Jobs from './pages/Jobs/index';
import FavoritedJobs from './pages/FavoritedJobs/index';
import JobsInfo from './pages/JobsInfo/index';
import JobContainer from './context/Provider';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Jobs"
        component={Jobs}
        options={{
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: 'bold',
        }}
      />
      <Drawer.Screen
        name="FavoritedJobs"
        component={FavoritedJobs}
        options={{
          title: 'Favorited Jobs',
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: 'bold',
        }}
      />
    </Drawer.Navigator>
  );
}

function Router() {
  return (
    <JobContainer>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="JobsInfo"
            component={JobsInfo}
            options={({route}) => ({
              title: route.params.title,
              headerTintColor: 'red',
              headerTitleAlign: 'center',
              headerTitleStyle: 'bold',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </JobContainer>
  );
}
export default Router;
