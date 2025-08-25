import React, {useEffect, useState} from 'react'
import {UserButton} from "@clerk/clerk-react";
import {useSearchParams} from "react-router";
import {useStreamChat} from "../hooks/useStreamChat.js";
import PageLoader from "../components/PageLoader.jsx";
import "../styles/stream-chat-theme.css"
import {Chat, Channel, ChannelList, MessageList, MessageInput, Thread, Window} from "stream-chat-react";

const HomePage = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [activeChannel, setActiveChannel] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const {chatClient, error, isLoading} = useStreamChat();
    useStreamChat()

    useEffect(() => {
        //set active channel from URL
        if (chatClient) {
            const channelId = searchParams.get("channel");
            if (channelId) {
                const channel = chatClient.channel("messaging", channelId);
                setActiveChannel(channel)
            }
        }
    }, [chatClient, searchParams])
    if (error) return <p>Something went wrong <span>{error}</span></p>
  /*  if (isLoading || !chatClient) {
        return <PageLoader/>
    }*/
    return (
        <div className='chat-wrapper'>
            <Chat client={chatClient}>
                <div className='chat-container'>
                    {/*   Left sidebar*/}
                    <div className='str-chat__channel-list'>
                        <div className="team_channel-list">
                            {/*    Header */}
                            <div className='team-channel-list__header gap-4'>
                                <div className='brand-container'>
                                    <img src="/Logo.png" alt="Logo" className='brand-logo'/>
                                    <span className='brand-name'>Chatter</span>
                                </div>
                                <div className='user-button-wrapper'><UserButton/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Chat>

            <p>Home page</p>
        </div>

    )
}
export default HomePage
