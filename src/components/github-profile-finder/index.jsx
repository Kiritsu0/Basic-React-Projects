import { useState, useEffect } from "react";
import User from "./card";
import "./styles.css"

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("Kiritsu0");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    fetchGithubUserData();
  }

  const fetchGithubUserData = async () => {
    try {
      setLoading(true)
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      if (data) {
        setUserData(data);
        setLoading(false);
        setUserName('');
      }

    } catch(e) {
      console.log(e)
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUserData()
  }, [])

  if (loading) {
    return <h1>Loading data! Please wait</h1>
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input onChange={(event) => setUserName(event.target.value)} type="text" name="search-by-username" value={userName} placeholder="Search Github Username..."/>
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData !== null ? <User user={userData} /> : null
      }
    </div>
  )
}

export default GithubProfileFinder;
