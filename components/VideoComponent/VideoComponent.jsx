import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./VideoComponent.module.css";

const VideoComponent = () => {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    },);
  }, []);

  return (
    <div className={styles.videoContainer}>
      <Link href="/">
        <video
          ref={videoRef}
          className={styles.video}
          src="/video.mp4"
          controls={false}
          preload="auto"
          playsInline
          autoPlay
          muted
          loop
        />
      </Link>
    </div>
  );
};

// const VideoComponent = () => {
//   const videoRef = useRef(null)
//   const [videoPlaying, setVideoPlaying] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (videoRef.current && videoPlaying) {
//         if (window.pageYOffset >= 50) {
//           videoRef.current.pause()
//         } else {
//           videoRef.current.play()
//         }
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [videoPlaying])

//   const handleVideoEnd = () => {
//     setVideoPlaying(false)
//   }

//   const handleVideoPlay = () => {
//     setVideoPlaying(true)
//   }

//   return (
//     <div className={styles.videoContainer}>
//       <Link href="/">
//       <video
//         ref={videoRef}
//         onEnded={handleVideoEnd}
//         onPlay={handleVideoPlay}
//         className={styles.video}
//         src="/video.mp4"
//         controls={false}
//         autoPlay
//         loop

//       />
//       </Link>

//     </div>
//   )
// }

export default VideoComponent;
