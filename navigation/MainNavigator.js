import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";

import Tab_1Screen from "../screens/Tab_1Screen";
import Tab_2Screen from "../screens/Tab_2Screen";
import Tab_3Screen from "../screens/Tab_3Screen";
import Tab_4Screen from "../screens/Tab_4Screen";

const Tab_1Stack = createStackNavigator({
        Tab_1: Tab_1Screen,
    }
);

Tab_1Stack.navigationOptions={
    tabBarLabel: 'TAB 1',
};

const Tab_2Stack = createStackNavigator({
        Tab_2: Tab_2Screen,
    }
);

Tab_2Stack.navigationOptions={
    tabBarLabel: 'TAB 2',
};

const Tab_3Stack = createStackNavigator({
        Tab_3: Tab_3Screen,
    }
);

Tab_3Stack.navigationOptions={
    tabBarLabel: 'TAB 3',
};

const Tab_4Stack = createStackNavigator({
        Tab_4: Tab_4Screen,
    }
);

Tab_4Stack.navigationOptions={
    tabBarLabel: 'TAB 4',
};

const TabNavigator = createBottomTabNavigator({
    Tab_1Stack,
    Tab_2Stack,
    Tab_3Stack,
    Tab_4Stack,
});


export default TabNavigator