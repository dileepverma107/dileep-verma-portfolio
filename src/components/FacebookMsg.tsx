"use client";
import { FacebookProvider, CustomChat } from "react-facebook";
const FacebookMsg = () => {
return (
<FacebookProvider appId="1172989773748447" chatSupport>
<CustomChat pageId="301636533825900" minimized={true} />
</FacebookProvider>
);
};
export default FacebookMsg;
