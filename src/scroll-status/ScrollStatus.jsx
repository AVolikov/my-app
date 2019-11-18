import React, { useState, useEffect } from "react";
import "./ScrollStatus.scss";

const ScrollStatus = () => {
  const [progress, setProgress] = useState(0);

  const onScrollChange = e => {
    const value =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    setProgress(value);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollChange);

    return () => {
      window.removeEventListener("scroll", onScrollChange);
    };
  }, []);

  useEffect(() => {
    document.title = progress;
  }, [progress]);

  return (
    <div className="ScrollStatus">
      <div
        className="ScrollStatus-progress"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
};

class __ScrollStatus extends React.Component {
  state = { progress: 0 };

  onScrollChange = e => {
    const value =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    this.setState({ progress: value });
  };

  render() {
    return (
      <div className="ScrollStatus">
        <div
          className="ScrollStatus-progress"
          style={{ width: `${this.state.progress * 100}%` }}
        />
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScrollChange);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScrollChange);
  }

  componentDidUpdate() {
    document.title = this.state.progress;
  }
}

export default ScrollStatus;
