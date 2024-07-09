// components/FacebookMessenger.js
"use client"
import { useEffect } from 'react';
import ScriptLoader from './ScriptLoader';

const FacebookMessenger = () => {
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '1172989773748447', // Replace with your Facebook app ID
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v16.0', // Make sure to use the correct version
      });

      // Parse the customer chat plugin after the SDK is loaded
      window.FB.XFBML.parse();
    };
  }, []);

  return (
    <>
      <ScriptLoader
        url="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
        id="facebook-jssdk"
      />
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="301636533825900" // Replace with your Facebook page ID
        theme_color="#0084ff"
        logged_in_greeting="Hi! How can we help you?"
        logged_out_greeting="Log in to chat with us."
        minimized={true}
      ></div>
    </>
  );
};

export default FacebookMessenger;
