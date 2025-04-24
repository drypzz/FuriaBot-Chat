import { useState, useEffect, useRef } from 'react'

import axios from 'axios'

interface MessageType {
    text: string
    sender: 'user' | 'bot'
};

const INITIAL_GREETING: MessageType = {
    text: 'Olá! Eu sou o FURIABOT. Como posso ajudar?',
    sender: 'bot',
};

export default function useChatBoxRules() {
    const [messages, setMessages] = useState<MessageType[]>([INITIAL_GREETING]);
    const [input, setInput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, loading]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessage()
        }
    };

    const sendMessage = async () => {
        const trimmedInput = input.trim()
        
        if (!trimmedInput) return alert('Digite uma mensagem!');

        const userMessage: MessageType = { text: trimmedInput, sender: 'user' }
        setMessages((prev) => [...prev, userMessage])
        setInput('')
        setLoading(true)

        try {
            const response = await axios.post('https://api-furiabot.onrender.com/chat', { message: trimmedInput })

            const botMessage: MessageType = { text: response.data.reply, sender: 'bot' }
            setMessages((prev) => [...prev, botMessage])
        } catch (error) {
            setMessages((prev) => [...prev,
                { text: 'Erro ao se comunicar com o servidor.', sender: 'bot' },
            ])
        } finally {
            setLoading(false)
        };
    };

    return {
        messages,
        input,
        loading,
        messagesEndRef,
        handleInputChange,
        handleKeyDown,
        sendMessage,
    };
};