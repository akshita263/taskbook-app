# taskbook-app
react native project of taskbook app
While creating the application the first and the most important thing was to set up the environment. 
SETTING UP THE ENVIRONMENT:
Various components are to be added while setting up the environment for react-native application development.
First is to install JDK and add the path to environment variable.
Next is to download and install Android Studio and make sure you add the path to environment variables and there is the platform-tools file.
the file in my android studio was obselte and therefore, not useful. 
Also check if the environment variables have a variable named ANDROID_HOME, JAVA_HOME aNd ANDROID_SDK_HOME. 
If not add the theses variables and their corresponding values
I here used my real device to run the appliaction,
but in case of an emulator you need to make sure that the virtualization technology is enabled in your system.
after installing all the packages run: adb devices to make sure your device is connected.
and once the appliaction starts running on your device run: adb -s <devicenumber> reverse tcp:8081 tcp: 8081
so that your system recieves request from your mobile.
BUILDING THE APP:
React-native is very much similar to react. it works pretty much the same, the syntax is just a bit different.
the first problem i faced while building the app was that i wasnt able to access the icons even after installing the package and 
that was because i didnt link it to the file after installing it.
So it is important to make sure that you link the icons soon after installing the package to avoid future trouble.
Something new that i learned in react-native that i havent used before in react or other web-development technologies was that
in app development the screen is divided usinf flex whose default value is column but can be reset to row, row-reverse or column-reverse.
ALthough the basic functioning and logic in react and react-native remains the same, i.e., we divide the app into components and link them together in the end.
