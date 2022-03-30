// client/src/pages/WatchVideo.js

function WatchVideo() {
  const handleAuthAction = useAuthAction();

  function handleLikeVideo() {
    handleAuthAction(likeVideo, video.id);
  }

  function handleDislikeVideo() {
    handleAuthAction(dislikeVideo, video.id);
  }

  function handleToggleSubscribe() {
    handleAuthAction(toggleSubscribeUser, video.user.id);
  }

// rest of component
}