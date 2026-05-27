/* eslint-disable */
/* ArgosIA · Loading Screen */

function LoadingScreen() {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsVisible(false), 800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className={"loading-screen " + (!isVisible ? "is-hidden" : "")}>
      <div className="loading-container">
        <div className="loading-logo">
          <img src="assets/isologo.png" alt="ArgosIA" />
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <p className="loading-text">ArgosIA</p>
      </div>
    </div>
  );
}

Object.assign(window, { LoadingScreen });
