"use client";
import { FacebookProvider, CustomChat } from "react-facebook";
const FacebookMsg = () => {
return (
<FacebookProvider appId="443629761883877" chatSupport>
<CustomChat pageId="301636533825900" minimized={true} />
</FacebookProvider>
);
};
export default FacebookMsg;
