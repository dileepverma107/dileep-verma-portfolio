"use client";
import { FacebookProvider, CustomChat } from "react-facebook";
const FacebookMsg = () => {
return (
<FacebookProvider appId="448839711330615" chatSupport>
<CustomChat pageId="301636533825900" minimized={true} />
</FacebookProvider>
);
};
export default FacebookMsg;