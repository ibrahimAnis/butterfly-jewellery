import React, { useEffect, useRef, useState } from 'react';

const BannerVideo = ({
  desktopVideoUrl,
  desktopThumbnail,
  desktopLink,
  mobileVideoUrl,
  mobileThumbnail,
  mobileLink,
}) => {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const desktopBannerRef = useRef(null);
  const mobileBannerRef = useRef(null);
  
  const [desktopMuted, setDesktopMuted] = useState(true);
  const [mobileMuted, setMobileMuted] = useState(true);
  
  useEffect(() => {
    const desktopVideo = desktopVideoRef.current;
    const mobileVideo = mobileVideoRef.current;

    // Helper function to toggle mute
    const toggleMute = (video, setMuteState) => {
      if (video) {
        video.muted = !video.muted;
        setMuteState(video.muted);
      }
    };

    // Ensure videos are muted and start playing
    if (desktopVideo) desktopVideo.play().catch(console.error);
    if (mobileVideo) mobileVideo.play().catch(console.error);

    // Intersection Observer setup
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target.querySelector('video');
        if (entry.isIntersecting) {
          video.play().catch(console.error);
        } else {
          video.pause();
          video.muted = true; // Mute video when it's out of view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (desktopBannerRef.current) observer.observe(desktopBannerRef.current);
    if (mobileBannerRef.current) observer.observe(mobileBannerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="main-banner-rollplay homepage_banner" ref={desktopBannerRef}>
        <a href={desktopLink}>
          <video
            ref={desktopVideoRef}
            loop
            playsInline
            preload="auto"
            poster={desktopThumbnail}
            muted={desktopMuted}
            style={{ width: '100%', height: 'auto' }}
          >
            <source src={desktopVideoUrl} type="video/mp4" />
          </video>
        </a>
        {desktopVideoUrl && (
          <button
            className="mute-toggle"
            onClick={() => toggleMute(desktopVideoRef.current, setDesktopMuted)}
          >
            {desktopMuted ? '🔇' : '🔊'}
          </button>
        )}
      </div>
      
      <div className="main-banner-rollplay-mob homepage_banner" ref={mobileBannerRef}>
        <a href={mobileLink}>
          <video
            ref={mobileVideoRef}
            loop
            playsInline
            preload="auto"
            poster={mobileThumbnail}
            muted={mobileMuted}
            style={{ width: '100%', height: 'auto' }}
          >
            <source src={mobileVideoUrl} type="video/mp4" />
          </video>
        </a>
        {mobileVideoUrl && (
          <button
            className="mute-toggle"
            onClick={() => toggleMute(mobileVideoRef.current, setMobileMuted)}
          >
            {mobileMuted ? '🔇' : '🔊'}
          </button>
        )}
      </div>

      <style jsx>{`
        .main-banner-rollplay, .main-banner-rollplay-mob {
          position: relative;
        }
        .mute-toggle {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          z-index: 10;
        }
        @media screen and (min-width: 720px) {
          .main-banner-rollplay-mob {
            display: none;
          }
          .main-banner-rollplay {
            display: block;
          }
        }
        @media screen and (max-width: 719px) {
          .main-banner-rollplay {
            display: none;
          }
          .main-banner-rollplay-mob {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default BannerVideo;
