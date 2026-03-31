import React from 'react'
import { useChatStore } from "../store/useChatStore";
import BorderAnimatedContainer from '../components/BorderAnimatedContainer';


function ChatPage() {
  const {activeTab,selectedUser} = useChatStore();
  return (
    <div className='relative w-full max-w-6xl h-[800px]'> 
      <BorderAnimatedContainer>
      {/* Left Side */}
      <div className='w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col'>
        <ProfileHeader/>
        <ActiveTabSwitch/>
        <div className='className="flex-1 overflow-y-auto p-4 space-y-2'>
          {activeTab === "chats" ? <ChatList/> : <ContactList/>}
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1 flex flex-col bg-slate-900/50 backdrop-blur-sm'>
        {selectedUser ? <ChatContainer/> : <NoConversationPlaceholder/>}
      </div>
      </BorderAnimatedContainer>
      
    </div>
  )
}

export default ChatPage
