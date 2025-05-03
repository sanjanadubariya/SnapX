// Gallery.jsx
import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    
    // Updated video data to use local video files
    const videos = [
        {
        id: 1,
        title: 'Lush Tropical Palm Fronds',
        thumbnail: '/thumbnails/t1.jpg',
         // Make sure to create thumbnails
        videoUrl: '/videos/v1.mp4', // Path to your video in public/videos folder
        },
        {
        id: 2,
        title: 'Tropical-Themed Canopy Bed with String Lights Video Production',
        thumbnail: '/thumbnails/t2.jpg',
        videoUrl: '/videos/v2.mp4',
        },
        {
        id: 3,
        title: 'Hands Holding Camera During Portrait Session',
        thumbnail: '/thumbnails/t3.jpg',
        videoUrl: '/videos/v3.mp4',
        },
        {
        id: 4,
        title: 'Travel Documentary',
        thumbnail: '/thumbnails/t4.jpg',
        videoUrl: '/videos/v4.mp4',
        },
        {
        id: 5,
        title: 'Event Highlight Reel',
        thumbnail: '/thumbnails/t5.jpg',
        videoUrl: '/videos/v5.mp4',
        },
        {
        id: 6,
        title: 'Fashion Promo',
        thumbnail: '/thumbnails/t6.jpg',
        videoUrl: '/videos/v6.mp4',
        },
        {
        id: 7,
        title: 'Short Film',
        thumbnail: '/thumbnails/t7.jpg',
        videoUrl: '/videos/v7.mp4',
        },
        {
        id: 8,
        title: 'Real Estate Tour',
        thumbnail: '/thumbnails/t8.jpg',
        videoUrl: '/videos/v8.mp4',
        },
        {
        id: 9,
        title: 'Product Launch Video',
        thumbnail: '/thumbnails/t9.jpg',
        videoUrl: '/videos/v9.mp4',
        },
    ];

    const openVideo = (videoId) => {
        setSelectedVideo(videos.find(video => video.id === videoId));
    };

    const closeVideo = () => {
        setSelectedVideo(null);
    };

    return (
        <section id="work" className="gallery-section">
        <div className="section-header">
            <h2>Latest Work</h2>
            <div className="timeline"></div>
        </div>
        
        <div className="video-grid">
            {videos.map((video) => (
            <div className="video-card" key={video.id} onClick={() => openVideo(video.id)}>
                <div className="thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="play-button">
                    <i className="play-icon"></i>
                </div>
                </div>
                <h3 className="video-title">{video.title}</h3>
            </div>
            ))}
        </div>

        {selectedVideo && (
            <div className="video-modal">
            <div className="modal-content">
                <div className="modal-header">
                <h3>{selectedVideo.title}</h3>
                <button className="close-button" onClick={closeVideo}>×</button>
                </div>
                <div className="video-container">
                <video controls className="modal-video">
                    <source src={selectedVideo.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
            </div>
        )}
        
        </section>
    );
};

export default Gallery;