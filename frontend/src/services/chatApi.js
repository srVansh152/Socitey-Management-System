import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const setAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

export const chatApi = {
  getChats: async () => {
    const response = await axios.get(
      `${API_URL}/chat`,
      setAuthHeader()
    );
    return response.data;
  },

  createChat: async (participantId) => {
    const response = await axios.post(
      `${API_URL}/chat/create`,
      { participantId },
      setAuthHeader()
    );
    return response.data;
  },

  getChatMessages: async (chatId) => {
    try {
        const response = await axios.get(`${API_URL}/chat/${chatId}/messages`, setAuthHeader());
        return response.data.map(msg => ({
            id: msg._id,
            content: msg.text,
            sender: msg.sender,
            senderId: msg.sender._id,
            timestamp: new Date(msg.createdAt).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
            }),
            read: msg.read
        }));
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
  },

  uploadMedia: async (formData) => {
    const response = await axios.post(
      `${API_URL}/chat/upload`,
      formData,
      {
        ...setAuthHeader(),
        headers: {
          ...setAuthHeader().headers,
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  }
};