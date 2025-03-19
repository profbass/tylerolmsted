const BLOB_BASE_URL = process.env.NEXT_PUBLIC_BLOB_BASE_URL || 'https://kiuoi4zd1jyh8w3o.public.blob.vercel-storage.com';

export const assets = {
    videos: {
        hero: {
            waves: `${BLOB_BASE_URL}/video/waves-J2gpLmH5ygL6rFNrjnFepupCqpXArP.mp4`,
            // Add more hero videos as needed
        },
        contact: {
            clouds: `${BLOB_BASE_URL}/video/bg-clouds-YW302TfGZFOwmrDxIjl0C6HtWn43N7.mp4`,
        },
        portfolio: {
            // Add portfolio videos
            encon: `${BLOB_BASE_URL}/video/encon-EzoLF28zDxpn5Ug2zj6TkSMvyKquMF.mp4`,
            backflip: `${BLOB_BASE_URL}/video/backflip-Ck1b0tcnRfjD9krVTrsZRTWr54W9jy.mp4`,
            remax: `${BLOB_BASE_URL}/video/remax-Zex0WoEQ2HaB5ic0vuPV9OJvZBNMH8.mp4`,
            booj: `${BLOB_BASE_URL}/video/booj-Zex0WoEQ2HaB5ic0vuPV9OJvZBNMH8.mp4`,
        }
    },
    images: {
        hero: {
            waves: `${BLOB_BASE_URL}/images/waves-img.jpg`,
            // Add more hero images
        },
        portfolio: {
            // Add portfolio images
        }
    }
}; 